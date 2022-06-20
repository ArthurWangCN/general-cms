import CmsRequest from './request/index';

const instance = new CmsRequest({
  baseURL: 'http://123.207.32.32:8000',
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    responseInterceptor: (res) => {
      return res.data
    }
  }
});

export default instance;