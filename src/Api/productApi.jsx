import axiosApi from "./axiosApi";

const productApi = {
  getAll(params) {
    const url = '/v2/huyit';
    return axiosApi.get(url, {
      params
    })
  },
  get(id) {
    const url = `/v2/huyit/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = '/v2/huyit';
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/v2/huyit/${data.id}`;
    return axiosApi.put(url, data);
  },
  remove(id) {
    const url = `/v2/huyit/${id}`;
    return axiosApi.delete(url);
  }
};

export default productApi;
