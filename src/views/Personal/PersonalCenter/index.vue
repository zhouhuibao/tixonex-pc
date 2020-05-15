<template>
  <div class="Personal">
    <div class="title-wrapper">
      <div class="layui-container title">
          账号中心
      </div>
    </div>

    <div class="layui-container">
      <div class="layui-row">
        <div class="layui-col-md6 layui-col-xs12">
          <div class="userInfo">
              <img src="./../../../../public/img/tixonexImages/yonghuxinxi.png" alt="">
              <div class="nameWrap">
                  <p>用户姓名：李潇潇</p>
                  <p>手机号码：139****2395</p>
              </div>
          </div>
          
        </div>
        <div class="layui-col-md6 layui-col-xs12">
          <div class="userInfo">
              <img src="./../../../../public/img/tixonexImages/shimingrenz.png" alt="">
              <div class="nameWrap">
                  <p>实名认证</p>
                  <p>实名认证状态：已认证</p>
              </div>
          </div>
        </div>
      </div>
      
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/mima.png" alt="">
            <div class="name-wrap">
              <p>登录密码</p>
              <p class="layui-hide-xs">登录账号时需要输入的密码</p>
            </div>
        </div>
        <div class="right" @click="EditPsswordVisible =true">修改密码</div>
      </div>
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/jiaoyimima.png" alt="">
            <div class="name-wrap">
              <p>交易密码</p>
              <p class="layui-hide-xs">进行交易时需要输入的密码</p>
            </div>
        </div>
        <div class="right" @click="EditYJPsswordVisible = true">修改密码</div>
      </div>
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/renzheng.png" alt="">
            <div class="name-wrap">
              <p>实名认证</p>
              <p class="layui-hide-xs">响应国家要求及为了您的资金安全需要进行实</p>
            </div>
        </div>
        <div class="right"> <router-link to="/Personal/Real-Name-authentication">立即认证</router-link> </div>
      </div>
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/gugeyanzheng.png" alt="">
            <div class="name-wrap">
              <p>谷歌验证器</p>
              <p class="layui-hide-xs">用于登录、提币、找回密码、修改安全设置进行安全验</p>
            </div>
        </div>
        <div class="right"><router-link to="/Personal/google-verify">开启</router-link></div>
      </div>
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/zhifufangshi.png" alt="">
            <div class="name-wrap">
              <p>支付方式</p>
              <p class="layui-hide-xs">注：用户C2C交易，至少激活一种支付方式</p>
            </div>
        </div>
        <div class="right"> <router-link to="/Personal/pay-type">设置</router-link> </div>
      </div>
      <div class="functionList clearfix">
        <div class="left">
            <img src="./../../../../public/img/tixonexImages/rizhi.png" alt="">
            <div class="name-wrap">
              <p>登录日志</p>
              <p class="layui-hide-xs">查看登录日志</p>
            </div>
        </div>
        <div class="right"> <router-link to="/Personal/login-log">查看</router-link> </div>
      </div>

    </div>
    <EditPssword :visible="EditPsswordVisible" @close="(v)=>{this.closeModal(v,'EditPsswordVisible')}" />
    <EditJYPssword :visible="EditYJPsswordVisible" @close="(v)=>{this.closeModal(v,'EditYJPsswordVisible')}" />
    
  </div>
</template>

<script>
import EditPssword from './../components/EditPssword'
import EditJYPssword from './../components/EditJYPssword'
export default {
    name:'PersonalCenter',
    data () {
      return {
          EditPsswordVisible:false,
          EditYJPsswordVisible:false
      }
    },
    methods:{
      closeModal(v,type){
        this[type] =v
      }
    },
    components:{
      EditJYPssword,
      EditPssword
    }
}
</script>

<style lang='scss' scoped>
  .Personal{
    background: #fff;
    padding-bottom: 140px;
    .title-wrapper{
      // background: #f8f3f2;
      padding: 30px 0;
      .title{
        color: #333333;
        font-size: 24px;
      }
    }
    .userInfo{
      text-align: center;
      margin: 30px 0;
      .nameWrap{
        display: inline-block;
        margin-left: 15px;
        vertical-align: top;
        p{
          text-align: left;
          margin-top:50px;
          color: #333333;
          font-size: 18px;
          &:last-child{
            margin: 0;
            margin-top: 30px;
          }
        }
      }
    }

    .functionList{
      padding: 20px 0;
      border-top: 1px solid #CCCCCC;
      &:last-child{
        border-bottom: 1px solid #CCCCCC;
      }
      .left{
        float: left;
        .name-wrap{
          margin-left: 20px;
          display: inline-block;
          vertical-align: top;
          p{
            &:first-child{
              color: #333333;
              font-size: 16px;
              margin-bottom: 9px;
            }
            &:last-child{
              color: #888888;
              font-size: 14px;
            }
          }
        }
      }
      .right{
        float: right;
        line-height: 50px;
        color: #2264D1;
        font-size: 16px;
        cursor: pointer;
        a{
            color: #2264D1;
            font-size: 16px;
        }
      }
    }
    
  }
</style>