<template>
  <div class="userLayout">
    <div class="titleWrapper clearfix">
      <div class="title">{{ $t('user.czdlmm') }}</div>
      <div class="close">
        <router-link to="/">
          <img src="./../../../public/img/tixonexImages/quxiao.png" alt="">
        </router-link>
        
      </div>
    </div>
    <el-form  ref="form" status-icon :rules="rules" :model="form">
        <el-form-item class="clearfix codeWrap" prop="phone">
          <div class="address" @click="visible = true">
            <div class="clearfix">
              <div class="img">
                <img src="./../../../public/img/tixonexImages/Bitmap.png" alt="">
              </div>
              <div class="content">
                +{{nationCode.code}}
                <i class="el-icon-caret-bottom"></i>
              </div>
            </div>
          </div>
          <div class="input">
            <el-input class="inputText" @blur="phoneBlur" :placeholder="$t('user.mobileNumber')" type="text" v-model="form.phone" />
          </div>
          <NationalCode class="code" :visible="visible" @close="visible =false" @changeCode="changeCode" />
        </el-form-item>
        <el-form-item class="clearfix yzCode imgCode">
            <div class="codeBox">
              <el-input class="inputText" :placeholder="$t('user.imgyzCode')" type="text" v-model="form.captchaImgCode" />
            </div>
            <div class="codeBox">
              <GetWordJpg ref="wordJpg" :phone="form.phone" :code="nationCode.code" />
            </div>
        </el-form-item>
        <el-form-item class="clearfix yzCode dxCode" prop="verificationCode">
            <div class="codeBox">
              <el-input class="inputText" :placeholder="$t('user.dxyzCode')" type="text" v-model="form.verificationCode" />
            </div>
            <div class="codeBox">
              <GetVerifyCode :info="form" :areaCode="nationCode.code" codeType="PASSWORD_FORGET" />
            </div>
        </el-form-item>
        <el-form-item prop="password">
            <el-input class="inputText" :placeholder="$t('user.shuzimima')" type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item prop="password2">
            <el-input class="inputText" :placeholder="$t('user.querenmima')" type="password" v-model="form.password2" />
        </el-form-item>
        
        <el-form-item class="submitbtn">
          <el-button type="primary" @click="onSubmit">{{ $t('user.qrxg') }}</el-button>
        </el-form-item>
        <div class="wzBtn">
          <router-link to="/user/login">{{ $t('user.ljdl') }}</router-link>
        </div>
    </el-form>
  </div>
</template>

<script>
import NationalCode from './components/NationCode'
import GetWordJpg from './components/GetWordJpg'
import GetVerifyCode from './components/GetVerifyCode'
import {validPassword} from '@/utils/validate'
import { resetPwd } from '@/api/user';
export default {
    name:'forgetPassWorld',
    data () {
      const validatePass = (rule, value, callback) => {
        if (!validPassword(value)) {
          callback(new Error('密码长度6-15位，数字字母组成'));
        } else {
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (!validPassword(value)) {
          callback(new Error('密码长度6-15位，数字字母组成'));
        }else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      

      return {
        nationCode:{
          code:86
        },
        visible:false,
        rules:{
          phone:[
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          verificationCode:[
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password2: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        },
        form:{
          password :'',
          phone :'',
          verificationCode :'',
          captchaImgCode:'',
          password2:'',
        }
      }
    },
    components:{
      NationalCode,
      GetWordJpg,
      GetVerifyCode
    },
    methods:{
      onSubmit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            const {phone,password,verificationCode} = this.form;
              const parmasData={
                areaCode:this.nationCode.code,
                phone,
                password,
                verificationCode,
              }
              resetPwd(parmasData).then(res=>{
                if(res.statusCode === 0){
                  this.$message({
                    type:'success',
                    message:'密码重置成功'
                  })
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeCode(data){
        console.log(data)
        this.nationCode = data
      },
      phoneBlur(){
        // 失去焦点时更换图片验证码
        this.$refs.wordJpg.updateCode()
      }
    }
}
</script>

<style lang="scss" scoped>
.userContent{
  .titleWrapper{
    .title{
      float: left;
      color: #000000;
      font-size: 24px;
      line-height: 37px;
    }
    .close{
      float: right;
      cursor: pointer;
    }
    margin-bottom: 40px;
  }
  .codeWrap{
      position: relative;
      .code{
        position: absolute;
        bottom: -202px;
        left: 0;
        z-index: 11111;
      }
  }
  .el-form-item{
    border-bottom: 1px solid #CCCCCC;
    .el-form-item__content{
      line-height: initial;
    }
    .address{
      float: left;
      width: 110px;
      padding-left: 4px;
        .img{
          float: left;
          padding-top: 7px;
          img{
            width: 36px;
            height: 24px;
            width: 100%;
            // height: 100%;
          }
        }
        .content{
          float: left;
          width: 70px;
          text-align: right;
          padding-right: 5px;
          line-height: 40px;
          cursor: pointer;
        }
        
    }
    
    .input{
      width: 100%;
      padding-left:110px;
      box-sizing: border-box;
    }
    .inputText{
        border: 0;
        width: 100%;
        height: 38px;
        font-size: 16px;
        outline: none;
        float: left;
        padding-left: 10px;
        &:focus{
          .userContent .el-form-item{
            border-color: red;
          }
        }
      }
    
  }

  .yzCode{
      border: none;
      position: relative;
      
      .codeBox{
        float: left;
        &:first-child{
          width: 240px;
          border-bottom: 1px solid #CCCCCC;
        }
        
      }
      
  }

  .imgCode{
        .codeBox{
          &:nth-child(2){
          position:absolute;
          top: -10px;
          right: 10px;
          width: 160px;
          border: 1px solid #ccc;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 34px;
          color: #F57723;
        }
        }
      }
      
      .dxCode{
        .codeBox{
          &:nth-child(2){
          position:absolute;
          top: 0px;
          right: 10px;
          border-radius:4px;
          width: 160px;
          height: 40px;
          background: #2E54EB;
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
        }
      }


      .itemChecked{
        text-align: left;
        padding-left: 10px;
        margin-bottom: 20px;
      }
      .wzBtn{
          text-align: right;
          a{
            color: #999999;
            font-size: 16px;
            &:hover{
              color: #1a8bf4;
            }
          }
        
      }


}
  

</style>

<style scoped>
  .userLayout /deep/ .el-input__inner{
    border: 0;
    padding: 0;
    height: 38px;
  }
  .userLayout /deep/ .el-input__inner::-webkit-input-placeholder{
			color: #999999;
  }
  .userLayout /deep/ .el-input__inner::-moz-placeholder{
			color: #999999;
  }
  .userLayout /deep/ .el-input__inner:-ms-input-placeholder{
			color: #999999;
  }
  .userLayout /deep/ .el-input__inner:-moz-placeholder{
			color: #999999;
  }
  .userLayout /deep/ .el-input__suffix{
    color: green;
  }
</style>