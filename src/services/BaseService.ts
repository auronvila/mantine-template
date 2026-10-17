import axios from 'axios';
import appConfig from '@/configs/app.config';
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from '@/constants/api.constant';
import store, { signOutSuccess } from '../store';

const unauthorizedCode = [401];

const BaseService = axios.create({
  timeout: 60000,
  baseURL: appConfig.apiPrefix,
});

BaseService.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.session.token;

    if (accessToken) {
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(signOutSuccess());
    }

    return Promise.reject(error);
  }
);

export default BaseService;
