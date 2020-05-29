import request from '@/utils/request'

class personal {
    constructor(){
        this.name='lisi'
    }

    // 激活支付方式
    BindBankAddress=(data,type)=>{
        return request({
            url: `/bank/${type==='add' ? 'add' : 'update'}-bank-address`,
            method: 'post',
            data
        })
    }

    // 查看用户是否存在有效支付方式0：不存在，1：存在
    bankAddresses=(data)=>{
        return request({
            url: '/bank/bank-addresses',
            method: 'get',
            data
        })
    }

    // 获取登录日志
    loginLog=(data)=>{
        return request({
            url: '/user/login-log',
            method: 'get',
            data
        })
    }

    


} 
export default new personal()