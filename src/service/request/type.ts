import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface CmsRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface CmsRequestConfig extends AxiosRequestConfig {
  interceptors?: CmsRequestInterceptors
}