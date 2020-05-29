import request from '@/utils/request'

// 查询广告列表
export function market(data) {
    return request({
      url: '/market',
      method: 'get',
      data
    })
} 