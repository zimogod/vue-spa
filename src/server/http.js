import http from 'axios';
import qs from 'qs';
// 网页超时时间
http.defaults.timeout = 5000;
// http.defaults.baseURL = 'http://152.136.97.184:3000';
// 请求拦截
http.interceptors.request.use(config =>{
    if(config.method == 'get' || config.method == 'put'){
        // config.headers = {
        //     'Content-type':'application/json;charset=utf8'
        // }
        config.data = qs.stringify(config.data);
    }else if(config.method == 'post' || config.method == 'delete'){
        config.headers = {
            'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }
        config.data = qs.stringify(config.data);
    }
    return config;
},
error =>{
    const err = Promise.reject(error);
    throw err;
});
// 响应拦截
http.interceptors.response.use(res =>{
    return res.data;
});

export default http;

