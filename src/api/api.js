import axios from 'axios';
export const apiProduct = axios.create({
  baseURL: 'http://70.34.242.75/api',
  withCredentials: false,
  headers: { 'content-type': 'application/json' },
  method: 'GET',
});

export const apiAuth = axios.create({
  baseURL: 'http://70.34.242.75/api',
  withCredentials: false,
  headers: { 'content-type': 'application/json' },
  method: 'POST',
});

export const setToken = token => {
  apiAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  apiAuth.defaults.headers.common.Authorization = ``;
};
