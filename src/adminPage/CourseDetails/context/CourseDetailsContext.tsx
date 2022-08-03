import React, { createContext, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import chapterApi from '~/api/chapterApi';
// import { useDispatch } from 'react-redux';
import courseApi from '~/api/CourseApi';
import lessionApi from '~/api/lessionApi';

import { ICourse } from '~/interface';
import { changeLoading } from '~/store/reducers/loadingOverlayReducer';
import { toastEmit } from '~/utils/toasify';

interface IInitstate {
  course: ICourse | null;
}

export interface ICourseDetailsContext {
  state: IInitstate;
  selectedChapter: number | null;
  setSelectedChapter: React.Dispatch<React.SetStateAction<number | null>>;
  getCourse: (id: number) => Promise<void>;
  createChapter: (payload: FormData) => Promise<void>;
  deleteChapter: (id: number) => Promise<void>;
  updateChapter: (id: number, payload: FormData) => Promise<void>;
  createLession: (payload: FormData, chapter_id: number) => Promise<void>;
  updateLession: (id: number, payload: FormData, chapter_id: number) => Promise<void>;
  deleteLession: (id: number, chapter_id: number) => Promise<void>;
}

const initState: IInitstate = {
  course: null,
};

enum ActionKind {
  CHANGE_STATE = 'CHANGE_STATE',
  ADD_CHAPTER = 'ADD_CHAPTER',
  UPDATE_CHAPTER = 'UPDATE_CHAPTER',
  DELETE_CHAPTER = 'DELETE_CHAPTER',
  ADD_LESSION = 'ADD_LESSION',
  UPDATE_LESSION = 'UPDATE_LESSION',
  DELETE_LESSION = 'DELETE_LESSION',
}

interface IAction {
  type: ActionKind;
  payload: any;
}

export const CourseDetailsContext = createContext<ICourseDetailsContext | null>(null);

const reducer = (state: IInitstate, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.CHANGE_STATE:
      return {
        ...state,
        ...payload,
      };

    case ActionKind.ADD_CHAPTER:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: [...state.course?.chapters!, payload],
        },
      };

    case ActionKind.UPDATE_CHAPTER:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: state.course?.chapters.map((c) => {
            if (c.id === payload.id) {
              c.name = payload.name;
              c.description = payload.description;
            }
            return c;
          }),
        },
      };

    case ActionKind.DELETE_CHAPTER:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: state.course?.chapters.filter((c) => c.id !== payload),
        },
      };

    case ActionKind.ADD_LESSION:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: state.course?.chapters.map((c) => {
            if (c.id === payload.chapter_id) {
              c.list_lession = [...c.list_lession, payload.lession];
            }
            return c;
          }),
        },
      };

    case ActionKind.UPDATE_LESSION:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: state.course?.chapters.map((c) => {
            if (c.id === payload.chapter_id) {
              c.list_lession = c.list_lession.map((l) => {
                if (l.id === payload.lession.id) {
                  console.log('zoo');
                  return payload.lession;
                }
                return l;
              });
            }
            return c;
          }),
        },
      };

    case ActionKind.DELETE_LESSION:
      return {
        ...state,
        course: {
          ...state.course,
          chapters: state.course?.chapters.map((c) => {
            if (c.id === payload.chapter_id) {
              c.list_lession = c.list_lession.filter((l) => l.id !== payload.lession_id);
            }
            return c;
          }),
        },
      };

    default:
      return state;
  }
};

const CourseDetailsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [selectedChapter, setSelectedChapter] = useState<null | number>(null);
  const dispatchRedux = useDispatch();

  const getCourse = async (id: number) => {
    const res = await courseApi.getOne(Number(id));
    const { data } = res.data;
    dispatch({
      type: ActionKind.CHANGE_STATE,
      payload: {
        ...state,
        course: data,
      },
    });

    setSelectedChapter(data?.chapters?.length > 0 ? data?.chapters[0].id : null);
  };

  const createChapter = async (payload: FormData) => {
    try {
      dispatchRedux(changeLoading(true));
      const res = await chapterApi.create(payload);
      const { data } = res.data;
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.ADD_CHAPTER,
        payload: {
          ...data,
          list_lession: [],
        },
      });
    } catch (error) {}
  };

  const updateChapter = async (id: number, payload: FormData) => {
    try {
      dispatchRedux(changeLoading(true));
      const res = await chapterApi.update(id, payload);
      const { data } = res.data;
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.UPDATE_CHAPTER,
        payload: data,
      });
      toastEmit({
        type: 'success',
        message: data.message,
      });
    } catch (error) {}
  };

  const deleteChapter = async (id: number) => {
    try {
      await chapterApi.delete(id);
      dispatch({
        type: ActionKind.DELETE_CHAPTER,
        payload: id,
      });
    } catch (error) {}
  };

  const createLession = async (payload: FormData, chapter_id: number) => {
    try {
      dispatchRedux(changeLoading(true));
      const res = await lessionApi.create(payload);
      const { data } = res.data;
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.ADD_LESSION,
        payload: {
          chapter_id,
          lession: data,
        },
      });
    } catch (error) {}
  };

  const updateLession = async (id: number, payload: FormData, chapter_id: number) => {
    try {
      dispatchRedux(changeLoading(true));
      const res = await lessionApi.put(id, payload);
      const { data } = res.data;
      dispatchRedux(changeLoading(false));
      dispatch({
        type: ActionKind.UPDATE_LESSION,
        payload: {
          chapter_id,
          lession: data,
        },
      });
    } catch (error) {}
  };

  const deleteLession = async (id: number, chapter_id: number) => {
    try {
      await lessionApi.delete(id);
      dispatch({
        type: ActionKind.DELETE_LESSION,
        payload: {
          chapter_id,
          lession_id: id,
        },
      });
    } catch (error) {}
  };

  const value = {
    state,
    getCourse,
    selectedChapter,
    createChapter,
    setSelectedChapter,
    deleteChapter,
    updateChapter,
    createLession,
    updateLession,
    deleteLession,
  };

  return <CourseDetailsContext.Provider value={value}>{children}</CourseDetailsContext.Provider>;
};

export default CourseDetailsContextProvider;
