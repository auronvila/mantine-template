import BaseService from './BaseService';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

const ApiService = {
  fetchData<TReq, TRes>(config: AxiosRequestConfig<TReq>): Promise<AxiosResponse<TRes>> {
    return BaseService.request<TRes, AxiosResponse<TRes>, TReq>(config);
  },
};

export default ApiService;
