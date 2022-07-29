import baseAxios from './AxiosClient';

const courseApi = {
  getAll() {
    return baseAxios.get('/course');
  },
  getOne(id: number) {
    return baseAxios.get(`/course/${id}`);
  },
  create(data: FormData) {
    return baseAxios.post('/course', data);
  },
  update(id: number, data: FormData) {
    return baseAxios.put(`/course/${id}`, data);
  },
  delete(id: number) {
    return baseAxios.delete(`/course/${id}`);
  },
};

export default courseApi;
