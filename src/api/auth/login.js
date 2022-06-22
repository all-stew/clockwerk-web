import request from '@/utils/request'

// 获取验证码
export function getCaptcha() {
  return request({
    url: '/api/v1/captcha',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}
