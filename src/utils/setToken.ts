import baseAxios from '~/api/AxiosClient';

export const setToken = (token: string | null) => {
  if (token) {
    return (baseAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token);
  }
  return (baseAxios.defaults.headers.common['Authorization'] = false);
};
