import request from '@/utils/request'

// 获取指定用户的委托历史(已经成交或者取消的订单)
export function w(data) {
    return request({
      url: '/trade/user-trade-list',
      method: 'get',
      data
    })
} 

// 获取指定用户的成交订单列表
export function userTradeLogList(data) {
    return request({
      url: '/trade/user-trade-log-list',
      method: 'get',
      data
    })
} 
