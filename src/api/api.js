import axios from './server'
import url from './serverAPI.config'

// 通用接口方法
export async function Post (apiUrl, data = {}) {
  const res = await axios({
    url: url[apiUrl],
    method: 'post',
    data: data
  })
  return res.data
}

// 使用时：
//   const res = await Post('example', {
//     // 需要传输的data
//   })