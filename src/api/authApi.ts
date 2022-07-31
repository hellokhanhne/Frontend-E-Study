import baseAxios from './AxiosClient';
export type ILoginType = 'default' | 'google' | 'facebook';
const authApi = {
  register(data: any) {
    return baseAxios.post('/auth/signup', data);
  },

  default: (data: any) => {
    return baseAxios.post('/auth/signin', data);
  },

  google: (data: any) => {
    return baseAxios.post('/auth/google/signin', data);
  },

  facebook: (data: any) => {
    return baseAxios.post('/auth/facebook/signin', data);
  },

  loadUser() {
    return baseAxios.get('/user/me');
  },

  updateProfile(data: any, id: number) {
    return baseAxios.put(`/user/${id}`, data);
  },
};

export default authApi;
