import { isApp, GetAppEnvirment } from '../app/utils'
// 统一定义接口，有利于维护

const host = window.location.host
let HISTORY = 'xxx.com/xxx' // 测试服地址
if (host === 'xxx.com') { // 测试服地址
  HISTORY = 'xxx.com/xxx' // 测试服地址
} else if (host === 'xxx.com') { // 正式服地址
  HISTORY = 'xxx.com/xxx' // 正式服地址
}
// 判断app中正式服or测试服
if (window.Judge) {
  const en = GetAppEnvirment()
  if (en === 'xxx') { // 正式服地址
    HISTORY = 'xxx.com/xxx' // 正式服地址
  } else {
    HISTORY = 'xxx.com/xxx' // 测试服地址
  }
}

const url = {
  examplr: HISTORY + 'xxx/xxx'
}
export default url
