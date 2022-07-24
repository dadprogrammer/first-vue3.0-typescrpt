import Axios from 'axios';
import axiosRetry from 'axios-retry'

/*
 *  error说明
 *  - error.config: 始终会包含该参数，是request的配置信息
 *  - error.message: 在客户端发送请求时就失败的情况下会有该信息
 *  - error.request: 客户端成功发送请求，但是服务端没有响应时
 *  - error.response: 服务端响应了但是错误码的范围不在2xx内时
 * */

// /* 请求拦截 */

Axios.interceptors.request.use(
  (requestConfig) => {
    let testEnvironment = Boolean(window.localStorage.getItem('testEnvironment'));
    if (testEnvironment) {
      if (requestConfig.method !== 'get') {
        return Promise.reject();
      } else {
        return requestConfig;
      }
    } else {
      return requestConfig;
    }
  },
  (error) => {
    switch (error.request.status) {
      case 404: {
        console.log('访问错误');
        break;
      }
      default: {
        break;
      }
    }
    return Promise.reject(error);
  },
);
/* 响应拦截 */
Axios.interceptors.response.use(
  (response) => {
    let contentTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    if (contentTypes.indexOf(response.headers['content-type']) > -1) {
      return response;
    } else {
      if (response.data.code === 0) {
        let  dataObject=response.data.data
        if(typeof dataObject ==='boolean' ){
          if(dataObject){
            return response.data
          }else{
            return Promise.reject('操作失败');
          }
        }
        return response.data
      } else {
        return Promise.reject(response.data.message);
      }

    }

  },
  (error) => {
    return Promise.reject(error);
  },
);

export default {
  /**
   * 插件注册handle
   * @param Vue: Vue
   * @param baseURL: 公共根路径
   * @param timeout: 公共超时
   * @param contentType: 默认数据类型
   */
  install(Vue:any, baseURL:string, timeout = 5 * 1000, contentType = 'application/json') {
    /* 设置默认公共参数 */
    Axios.defaults.baseURL = baseURL;
    Axios.defaults.headers.post['Content-Type'] = contentType;
    Axios.defaults.timeout = timeout; /* 单位ms */
    /** *
     *  Axios 实例
     *  retries：重试次数
     *  retryDelay: 每次请求延迟时间
     *  shouldResetTimeout： 重新设置超时时间 重新计算
     * retryCondition 是否自动发送请求  我们任何时候的失败 都重新请求
     */
    axiosRetry(Axios, {
      retries: 3,
      retryDelay: (retryCount) => {
        return retryCount * 1000;
      },
      shouldResetTimeout: true,
      retryCondition: (error) => {
        return true;
      }
    });
    /**
     * vue3.0把 router prototype 都放一级 globalProperties
     */
    Object.defineProperty(Vue.config.globalProperties, '$axios', {
      value: Axios,
      writable: false,
    });
  },
};
