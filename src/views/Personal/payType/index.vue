<template>
  <div class="RealNameAuthentication">
        <Breadcrumb :list="routerList" />
      <div class="layui-container">
        <div class="layui-row ">
            <div class="layui-col-md10 layui-col-md-offset1 layui-col-xs12">
                <div class="tips clearfix">
                    <i class="el-message__icon el-icon-warning"></i>
                    <span>（注：用于C2C交易，至少激活一种支付方式，您激活的支付方式我们将展示给买家）</span>
                </div>
                <div class="layui-row layui-col-space5" style="margin-bottom:150px">
                    <div class="layui-col-xs4">
                        <div class="imgWrap">
                            <img src="./../../../../public/img/tixonexImages/yinhangkaBG.png" alt="">
                            <div class="imgContent" @click="bankVisible = true">
                                <div style="display:inline-block">
                                    <p>点击激活</p>
                                    <p>(请填写银行卡信息)</p>
                                </div>
                            </div>
                            <p class="nameType">银行卡支付</p>
                        </div>
                    </div>
                    <div class="layui-col-xs4">
                        <div class="imgWrap" style="margin: 0 auto;">
                            <img src="./../../../../public/img/tixonexImages/weiixnzhifu.png" alt="">
                            <div class="imgContent" @click="WeChatVisible = true">
                                <div style="display:inline-block">
                                    <p>点击激活</p>
                                    <p>(请填写微信信息)</p>
                                </div>
                            </div>
                            <p class="nameType">微信支付</p>
                        </div>
                    </div>
                    <div class="layui-col-xs4">
                        <div class="clearfix">
                            <div class="imgWrap" style="float:right">
                                <img src="./../../../../public/img/tixonexImages/zhifubaozhifu.png" alt="">
                                <div class="imgContent" @click="AliPayVisible = true">
                                    <div style="display:inline-block">
                                        <p>点击激活</p>
                                        <p>(请填写支付宝信息)</p>
                                    </div>
                                </div>
                                <p class="nameType">支付宝支付</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Bank :visible="bankVisible" @close="(v)=>{this.close(v,'bankVisible')}" />
      <AliPay :visible="AliPayVisible" @close="(v)=>{this.close(v,'AliPayVisible')}" />
      <WeChat :visible="WeChatVisible" @close="(v)=>{this.close(v,'WeChatVisible')}" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Bank from './../components/payType/Bank'
import AliPay from './../components/payType/Alipay'
import WeChat from './../components/payType/WeChat'
export default {
    name:'payType',
    data () {
        return {
            form: {
                name: '',
            },
            code:'',
            bankVisible:false,
            WeChatVisible:false,
            AliPayVisible:false
        }
    },
    computed:{
        routerList(){
            const navList=[
                {
                    name:this.$t('Personal.zhzx'),
                    path:'/Personal/Personal-center'
                },
                {
                    name:this.$t('Personal.zffs'),
                }
            ]
            return navList
        }
    },
    
    components:{
        Breadcrumb,
        Bank,
        AliPay,
        WeChat
    },
   
    methods:{
        close(v,type){
            this[type] =v
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='less' scoped>
    .RealNameAuthentication{
        background: #fff;
        .tips{
            text-align: center;
            font-size: 14px;
            margin: 70px 0;
            i{
                font-size: 16px;
                line-height: 20px;
                color: #FB8989;
            }
            span{
                color: #333333;
                font-size: 16px;
            }
        }
        .imgWrap{
            // width: 240px;
            max-width: 240px;
            cursor: pointer;
            position: relative;
            img{
                width: 100%;
            }
            .nameType{
                text-align: center;
                color: #333333;
                font-size: 14px;
                margin: 28px 0 0 0;
            }
            .imgContent{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                p{
                    color: #fff;
                    &:first-child{
                        font-size: 24px;
                    }
                    &:last-child{
                        font-size: 16px;
                        margin-top: 20px;
                    }
                }
                &:after{
                    content: "";
                    display: inline-block;
                    height: 100%;
                    vertical-align: middle;
                }
            }
        }
    }
</style>