import baseAxios from './AxiosClient';

const categoryApi = {
  getOne(id: number) {
    return baseAxios.get(`/category/${id}`);
  },
  getAll() {
    return baseAxios.get('/category');
  },
  create(data: FormData) {
    return baseAxios.post('/category', data);
  },
  update(id: number, data: FormData) {
    return baseAxios.put(`/category/${id}`, data);
  },
  delete(id: number) {
    return baseAxios.delete(`/category/${id}`);
  },
};

export default categoryApi;
