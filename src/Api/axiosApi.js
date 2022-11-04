import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'v2/huyit',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient;

// interceptors 

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response 
axiosClient.interceptors.response.use(function (response) {
  // xuất dữ liệu
  console.log(response);
  return response.data;
}, function (error) { // false
  return Promise.reject(error);
});