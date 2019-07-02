import { info } from '../api/api'
import { Toast } from 'antd-mobile'
import { JSEncrypt } from 'jsencrypt'


// 提示框
export function showToast (text) {
  Toast.info(
    text,
    2
  )
}

// 判断app环境正式服or测试服
function GetAppEnvirment () {
  const ua = navigator.userAgent.toLowerCase()
  // const span = document.createElement('span')
  // span.innerText = JSON.stringify(ua)
  // span.style.position = 'fixed'
  // span.style.left = 0
  // span.style.top = 0
  // span.style.color = 'red'
  // document.body.append(span)
  if (ua.indexOf('haiwangapp') !== -1) {
    return 'haiwangapp'
  } else {
    return 'haiwangtestapp'
  }
}
export {
  GetAppEnvirment
}

// 判断安卓IOS
function GetSystem () {
  const ua = navigator.userAgent.toLowerCase()
  // Android终端
  const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1
  // Ios终端
  const isiOS = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/)

  if (isAndroid) {
    return 'android'
  } else if (isiOS) {
    return 'ios'
  }
  return ua
}

export {
  GetSystem
}


// 获取问号后参数
function GetRequest () {
  const url = window.location.hash // 获取#符后的字串
  const theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(url.indexOf('?') + 1)
    const strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
    }
  }
  return theRequest
}

export {
  GetRequest
}


// 获取当前日期
export function getNowFormatDate () {
  let date = new Date()
  const seperator1 = '-'
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  const currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}

// 打开外部链接后回到app内方法
export function openUrl (url) {
  if (window.Judge) {
    // eslint-disable-next-line no-undef
    var w = plus.webview.create(url)
    w.setStyle({
      'titleNView': {
        'backgroundColor': '#FFF',
        'titleText': '',
        'titleColor': '#CCCCCC',
        autoBackButton: false,
        buttons: [{
          type: 'back',
          text: '0000',
          float: 'left',
          onclick: function () {
            w.canBack(function (e) {
              if (e.canBack) {
                w.back()
              } else {
                w.close() // hide,quit
                // plus.runtime.quit()
              }
            })
          }
        }]
      }
    })
    w.evalJS("plus.key.addEventListener('backbutton',function () { plus.webview.currentWebview().close(); })")
    w.show() // 显示窗口
  } else {
    location.href = url
  }
}

// 添加千分号
export function formatNumberRgx (num) {
  var parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

