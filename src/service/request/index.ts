import axios from "axios";
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CmsRequestConfig } from "./type";

class CmsRequest {
  instance: AxiosInstance
  constructor(config: CmsRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  request<T>(config: CmsRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config)
        .then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  }

  get<T>(config: CmsRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'GET'})
  }

  post<T>(config: CmsRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'POST'})
  }
}

export default CmsRequest;