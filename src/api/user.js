import request from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'

// 获取国家代码
export function nationalCode(data) {
  return request({
    url: '/user/national-code',
    method: 'get',
    data,
    isToken:true
  })
}


// 不需要图形验证获取短信邮箱验证码
export function securityVerifyCode(data) {
  return request({
    url: '/user/security-verify-code',
    method: 'post',
    data,
  })
} 



// 获取短信邮箱验证码
export function getVerifyCode(data) {
  return request({
    url: '/user/verify-code',
    method: 'post',
    data,
    isToken:true
  })
}

// 注册
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data,
    isToken:true
  })
} 

// 登录
export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
    isToken:true
  })
} 

// 重设登录密码
export function resetPwd(data) {
  return request({
    url: '/user/reset-pwd',
    method: 'post',
    data,
    isToken:true
  })
} 

// 获取用户信息
export function userInfo(data) {
  return request({
    url: '/user/user-info',
    method: 'get',
    data
  })
} 

// 判断Token是否有效
export function isTokenValid(data) {
  return request({
    url: '/user/is-token-valid',
    method: 'post',
    data
  })
} 

// 实名认证
export function idCardAuth(data) {
  return request({
    url: '/user/id-card-auth',
    method: 'post',
    data
  })
} 

// 设置交易密码
export function settingPayPwd(data) {
  return request({
    url: '/user/setting-pay-pwd',
    method: 'post',
    data
  })
} 
