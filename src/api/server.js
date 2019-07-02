import axios from 'axios'
import qs from 'qs'

let CancelToken = axios.CancelToken
axios.create({
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers = {}
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.data = qs.stringify(config.data)
  config.withCredentials = true
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default axios
