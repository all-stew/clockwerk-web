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

// 登录方法
export function login(username, password, captcha, captcha_id) {
  const data = {
    username,
    password,
    captcha,
    captcha_id
  }
  return request({
    url: '/api/v1/login ',
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/api/v1/logout',
    method: 'post'
  })
}
