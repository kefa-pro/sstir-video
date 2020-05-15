import instance from './axios';
import qs from 'qs';

const handleResponse = (res, resolve, reject) => {
  resolve(res.data);
};

export function AppPost(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then((res) => {
        handleResponse(res, resolve, reject);
      })
      .catch((err) => {
        reject(err.toString());
      });
  });
}

export function AppGet(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: {
          ...data
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        }
      })
      .then((res) => {
        handleResponse(res, resolve, reject);
      })
      .catch((err) => {
        reject(err.toString());
      });
  });
}
