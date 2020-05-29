<template>
    <div @click="sendCode">{{name}}</div>
</template>

<script>
import { getVerifyCode,securityVerifyCode } from '@/api/user';
import { MathRandom, isEmpty } from '@/utils/auth';

export default {
    name:'GetVerifyCode',
    data () {
        return {
            name:'发送验证码',
            isTime:false
        }
    },
    props:{
        info:{
            type:Object,
            default:{},
            required:true
        },
        areaCode:{
            default:86
        },
        codeType:{
            type:String,
            default:'REGISTER'
        },
        YZMtype:{
            type:String,
            default:'no_BANK'
        }   
    },
    methods:{
        successFun(){
            this.$message({
                type:'success',
                message:'验证码发送成功,请注意查收'
            })
            let time = 60;
            this.name = time+' 秒后重发';
            const timer = setInterval(() => {
                time--;
                if(time < 0){
                    clearTimeout(timer)
                    this.name ='重新获取验证码'
                    this.isTime = false
                }else{
                    this.isTime = true
                    this.name =time+' 秒后重发'
                }
            }, 1000);
        },
        sendCode(){
            if(!this.isTime){
                const {phone,captchaImgCode} = this.info;
                if(!isEmpty(phone)){
                    this.$message({
                        type:'warning',
                        message:'手机号不能为空'
                    })
                }else{
                    const paramsObj={
                        phone,
                        type:this.codeType,
                        areaCode:this.areaCode
                    }
                    if(this.YZMtype == 'no_BANK'){
                        paramsObj.captchaImgCode =captchaImgCode
                        if(!isEmpty(captchaImgCode)){
                            this.$message({
                                type:'warning',
                                message:'图形验证码不能为空'
                            })
                        }else{
                            getVerifyCode(paramsObj).then(res=>{
                                if(res.statusCode === 0){
                                    this.successFun()
                                }
                                
                            })

                        }

                    }else{
                        securityVerifyCode(paramsObj).then(res=>{
                            if(res.statusCode === 0){
                                this.successFun()
                            }
                                
                        })

                    }
                }
                
            }
            
           
            
        }
    }
}
</script>

<style lang='scss' scoped>
    .codeBox{
        width: 100%;
        height: 100%;
    }
</style>
