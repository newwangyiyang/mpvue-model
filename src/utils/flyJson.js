//引入fly请求
const Fly = require("flyio/dist/npm/wx")
const flyJson = new Fly;

//Fly默认会将JavaScript objects 序列化为 JSON 发送（RequestBody）

flyJson.config.timeout = 10000;
flyJson.config.baseURL = "http://localhost:8082/";

//添加请求拦截器
flyJson.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
flyJson.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.reject(err);
  }
)

export default flyJson;
