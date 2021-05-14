// 基于axios封装的请求模块
import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// 创建一个axios实例
const request = axios.create({
  baseURL: '', // 接口的基准路径
  timeout: 5000 // request timeout
})
// 请求拦截器 request interceptor
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 响应拦截器 respone interceptor
request.interceptors.response.use(
  response => response,
  error => {
    console.log('错误' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default request
