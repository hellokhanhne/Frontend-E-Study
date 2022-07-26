import React, { createContext, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import authApi, { ILoginType } from '~/api/authApi';

import { IUser } from '~/interface';
import { changeLoading } from '~/store/reducers/loadingOverlayReducer';
import { setToken } from '~/utils/setToken';
import { toastEmit } from '~/utils/toasify';

interface IInitstate {
  user: IUser | null;
  isAuthenticate: boolean;
  isLoading: boolean;
}

export interface IAuthContext {
  authState: IInitstate;
  register: (payload: any) => Promise<void>;
  login: (type: ILoginType, payload: any) => Promise<void>;
  updateProfile: (payload: FormData) => Promise<void>;
}

const initState: IInitstate = {
  isAuthenticate: false,
  isLoading: true,
  user: null,
};

enum ActionKind {
  CHANGE_AUTH_STATE = 'CHANGE_AUTH_STATE',
}

interface IAction {
  type: ActionKind;
  payload: any;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const reducer = (state: IInitstate, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.CHANGE_AUTH_STATE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, dispatch] = useReducer(reducer, initState);
  const dispatchRedux = useDispatch();
  const register = async (payload: any) => {
    try {
      dispatchRedux(changeLoading(true));
      await authApi.register(payload);

      await login('default', {
        username: payload.get('username'),
        password: payload.get('password'),
      });
      dispatchRedux(changeLoading(false));
      //   localStorage.setItem('refresh_token', data.refresh_token);
    } catch (error: any) {
      console.log(error);
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.CHANGE_AUTH_STATE,
        payload: {
          isAuthenticate: false,
          isLoading: false,
        },
      });
      toastEmit({
        message: 'Register fail !',
        type: 'error',
      });
    }
  };

  const login = async (type: ILoginType, payload: any) => {
    try {
      dispatchRedux(changeLoading(true));
      const res = await authApi[type](payload);
      const { data } = res.data;

      // dispatch({
      //   type: ActionKind.CHANGE_AUTH_STATE,
      //   payload: {
      //     user: data,
      //     isAuthenticate: true,
      //     isLoading: false,
      //   },
      // });
      dispatchRedux(changeLoading(false));
      setToken(data.token);
      localStorage.setItem('access_token', data.token);
      toastEmit({
        message: 'Login successfully !',
        type: 'success',
      });
      window.location.reload();
      //   localStorage.setItem('refresh_token', data.refresh_token);
    } catch (error: any) {
      console.log(error);
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.CHANGE_AUTH_STATE,
        payload: {
          isAuthenticate: false,
          isLoading: false,
        },
      });

      toastEmit({
        message: 'Login fail !',
        type: 'error',
      });
    }
  };

  const loadUser = async (access_token: string | null) => {
    try {
      dispatchRedux(changeLoading(true));
      if (!access_token) {
        dispatch({
          type: ActionKind.CHANGE_AUTH_STATE,
          payload: {
            isAuthenticate: false,
            isLoading: false,
          },
        });
      }
      setToken(access_token);
      const { data } = await authApi.loadUser();

      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.CHANGE_AUTH_STATE,
        payload: {
          user: data.data,
          isAuthenticate: true,
          isLoading: false,
        },
      });
    } catch (error) {
      console.log(error);
      localStorage.removeItem('access_token');
      setToken(null);
      dispatchRedux(changeLoading(false));

      dispatch({
        type: ActionKind.CHANGE_AUTH_STATE,
        payload: {
          isAuthenticate: false,
          isLoading: false,
        },
      });
    }
  };

  const updateProfile = async (payload: FormData) => {
    try {
      const res = await authApi.updateProfile(payload, authState.user.id);
      const { data } = res.data;
      dispatch({
        type: ActionKind.CHANGE_AUTH_STATE,
        payload: {
          ...authState,
          user: data,
        },
      });
      toastEmit({
        message: 'Update profile successfully !',
        type: 'success',
      });
    } catch (error) {
      toastEmit({
        message: 'Update profile failed !',
        type: 'error',
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    loadUser(access_token);
  }, []);

  const value = {
    authState,
    register,
    login,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
