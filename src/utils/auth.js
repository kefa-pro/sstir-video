import Cookies from 'js-cookie';

const TOKEN_KEY = '__$_sstir_video__';

export function setToken(val) {
  Cookies.set(TOKEN_KEY, val);
}

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}
