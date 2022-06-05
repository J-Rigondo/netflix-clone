import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    //handle response

    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
