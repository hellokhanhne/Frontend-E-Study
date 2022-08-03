import baseAxios from './AxiosClient';

const chapterApi = {
  create(data: FormData) {
    return baseAxios.post('/chapter', data);
  },
  update(id: number, data: FormData) {
    return baseAxios.put(`/chapter/${id}`, data);
  },
  delete(id: number) {
    return baseAxios.delete(`/chapter/${id}`);
  },
};

export default chapterApi;
