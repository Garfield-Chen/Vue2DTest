import axios from 'axios';
import Qs from 'qs';
import router from '@/router'
import store from '@/store'
import { Toast } from 'vant'

import config from "@/assets/config/index"

var lang = localStorage.getItem('language') || config.baseLang

// axios.defaults.baseURL = config.baseUrl;
axios.defaults.headers['Content-Type'] ='application/json';
axios.defaults.headers['language'] = lang
axios.defaults.withCredentials = true;
/**
 * 请求拦截器
 */
axios.interceptors.request.use(function(config) {
  // if(config.url.indexOf('/addReceiveRewards') > -1){
  //   config.headers['sign'] = store.state.signVal
  //   console.log(store.state.signVal,config.headers['sign'])
  // }
  // store.state.loading = true
  return config;
},function(error){
  // store.state.loading = false;
  return Promise.reject(error);
});
/**
 * 响应拦截器
 */
axios.interceptors.response.use(function(response) {
  //  && response.data.code != 400002 && response.data.code != 400001
  if(response.data.code && response.data.code!=0){
    if(store.state.install) Toast(lang == config.baseLang ? response.data.msg : response.data.msgEn)
  }

  store.state.loading = false
  return response.data;
    
},function(err){
    if(err){
      // store.state.loading = false;
    }
    if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误';
            break
          case 401:
            err.message = '未授权，请登录';
            break
          case 403:
            err.message = '拒绝访问';
            break
          case 404:
            err.message = `请求地址出错: ${err.response.config.url}`;
            break
          case 408:
            err.message = '请求超时';
            break
          case 500:
            err.message = '服务器内部错误';
            break

          case 501:
            err.message = '服务未实现';
            break

          case 502:
            err.message = '网关错误';
            break

          case 503:
            err.message = '服务不可用';
            break

          case 504:
            err.message = '网关超时';
            break

          case 505:
            err.message = 'HTTP版本不受支持';
            break

          default:
        }
    }
    // Toast(err.message)
    return Promise.reject(err)
})

export default axios;