import baseAxios from './AxiosClient';

const lessionApi = {
  create(data: FormData) {
    return baseAxios.post('/lession', data);
  },
  put(id: number, data: FormData) {
    return baseAxios.put(`/lession/${id}`, data);
  },
  delete(id: number) {
    return baseAxios.delete(`/lession/${id}`);
  },
};

export default lessionApi;
