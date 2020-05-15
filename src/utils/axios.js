import axios from 'axios';
import appConfig from '@/config';

// create axios instance
const instance = axios.create({
  baseURL: appConfig.baseUrl,
  timeout: 1000 * 60 // 1 min
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // const userToken = store.getters.token
    // if (userToken) {
    //   config.headers['authorization'] = userToken
    // }
    // config.withCredentials = true
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // 当响应结果不成功，则报错
    // todo: msg待定
    // if (!response.data.data.success) {
    //   Message.error({
    //     message: response.data.data.msg,
    //     duration: 2000
    //   })
    // }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
