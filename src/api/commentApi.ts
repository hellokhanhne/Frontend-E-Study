import baseAxios from './AxiosClient';

const commentApi = {
  getByCourse(idCourse: number, limit: number, currentPage: number) {
    return baseAxios.get(`/comment/${idCourse}?p=true&current_page=${currentPage}&limit=${limit}`);
  },
  create(data: any) {
    return baseAxios.post('/comment', data);
  },
  delete(id: number) {
    return baseAxios.delete(`/comment/${id}`);
  },
  update(id: number, data: any) {
    return baseAxios.put(`/comment/${id}`, data);
  },
};

export default commentApi;
