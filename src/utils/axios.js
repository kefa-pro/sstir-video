import axios from 'axios';
import appConfig from '@/config';

// import store from '@/stores';
// import { actionCreators as appActionCreators } from '@/stores/modules/app';

// let reqList = [];

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
    // 当前请求
    // const request = JSON.stringify(config);
    // 如果当前已经在请求了，则不再处理
    // if (!reqList.includes(request)) {
    //   reqList.push(request);
    // }
    // store.dispatch(appActionCreators.showLoading());
    return config;
  },
  (error) => {
    // store.dispatch(appActionCreators.hideLoading());
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

    // reqList.splice(
    //   reqList.findIndex((item) => item === JSON.stringify(response.config)),
    //   1
    // );
    // if (reqList.length === 0) {
    //   store.dispatch(appActionCreators.hideLoading());
    // }
    return response;
  },
  (error) => {
    // store.dispatch(appActionCreators.hideLoading());
    return Promise.reject(error);
  }
);

export default instance;
