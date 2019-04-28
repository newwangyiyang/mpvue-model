//引入fly请求
const Fly = require("flyio/dist/npm/wx")
const fly = new Fly;
// qs用于application/x-www-form-urlencoded 编码格式发送请求
const qs = require('qs');

fly.config.timeout = 10000;
fly.config.baseURL = "http://localhost:8082/";

//添加请求拦截器
fly.interceptors.request.use(
  (config) => {
    if (config.method === 'POST') {
        config.body = qs.stringify(config.body)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  })

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.reject(err);
  }
)

export default fly;
