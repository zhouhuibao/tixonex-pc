import request from '@/utils/request'

// 查询系统中可用的币种
export function walletCoins(data) {
    return request({
      url: '/wallet/coins',
      method: 'get',
      data
    })
} 

// 新增数字货币转账地址
export function addAddress(data,type) {
  return request({
    url: '/wallet/add-transfer-address',
    method: 'post',
    data
  })
}

// 修改数字货币转账地址
export function updateAddress(data,type) {
  return request({
    url: '/wallet/update-transfer-address',
    method: 'PUT',
    data
  })
}

// 删除数字货币转账地址
export function deleteAddress(data) {
  return request({
    url: `/wallet/delete-transfer-address`,
    method: 'DELETE',
    data
  })
} 

// 查询数字货币转账地址列表
export function addressList(data) {
  return request({
    url: '/wallet/transfer-addresses',
    method: 'get',
    data
  })
} 




