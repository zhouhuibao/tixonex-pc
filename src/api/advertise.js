import request from '@/utils/request'

// 查询广告列表
export function advertise(data) {
    return request({
      url: '/advertise',
      method: 'get',
      data
    })
} 

// 查询广告详情
export function advertiseDetail(data) {
    return request({
      url: '/advertise/detail',
      method: 'get',
      data
    })
} 

// 查询官方群信息
export function officialGroup(data) {
    return request({
      url: '/advertise/official_group',
      method: 'get',
      data
    })
} 