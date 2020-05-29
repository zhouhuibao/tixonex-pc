<template>
    <div class="modalWrapper">
        <el-dialog
            :visible.sync="show"
            width="480px"
            :before-close="handleClose"
            @open="open"
            :show-close="false"
        >
            <div class="closeImg">
                <img @click="handleClose" src="./../../../../public/img/tixonexImages/quxiao.png" alt="">
            </div>


            <div class="userContent">
                <div class="title">
                    <img @click="handleClose" src="./../../../../public/img/tixonexImages/baozhang.png" alt="">
                    {{$t('PostersList.xgdlmm')}}

                </div>
                <div class="title">
                    <img @click="handleClose" src="./../../../../public/img/tixonexImages/shouji.png" alt="">
                    {{userInfo.mobile}}
                </div>
                <el-form class="userLayout" :rules="rules"  ref="form" :model="form">
                    <el-form-item class="clearfix yzCode imgCode">
                        <div class="codeBox">
                        <el-input class="inputText" :placeholder="$t('user.imgyzCode')" type="text" v-model="form.captchaImgCode" />
                        </div>
                        <div class="codeBox">
                            <GetWordJpg ref="wordJpg" :phone="userInfo.mobile" :code="userInfo.areaCode" />
                        </div>
                    </el-form-item>
                    <el-form-item class="clearfix yzCode dxCode" prop="verificationCode">
                        <div class="codeBox">
                        <el-input class="inputText" :placeholder="$t('user.dxyzCode')" type="text" v-model="form.verificationCode" />
                        </div>
                        <div class="codeBox">
                            <GetVerifyCode :info="codeInfo" :areaCode="codeInfo.areaCode" codeType="PASSWORD_FORGET" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="inputText" :placeholder="$t('user.shuzimima')" type="password" autocomplete="new-password" v-model="form.password" />
                    </el-form-item>
                    <el-form-item prop="password2">
                        <el-input class="inputText" :placeholder="$t('user.querenmima')" type="password" autocomplete="new-password" v-model="form.password2" />
                    </el-form-item>
                </el-form>
                <el-button type="primary" class="tjiao" @click="onSubmit">{{ $t('PostersList.tj') }}</el-button>
                <!-- <button class="submitBtn">
                    {{$t('PostersList.tj')}}
                </button> -->
            </div>

        </el-dialog>
    </div>
    
</template>

<script>
import GetWordJpg from '@/views/user/components/GetWordJpg'
import GetVerifyCode from '@/views/user/components/GetVerifyCode'
import {validPassword} from '@/utils/validate'
import {resetPwd} from '@/api/user'
export default {
    name:'EditPssword',
    data () {
        const {userInfo} = this.$store.state.user;
        console.log(this.$store)
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
            form:{
                verificationCode:'',
                captchaImgCode:'',
                password:'',
                password2:'',
            },
            userInfo,
            codeInfo:{
                captchaImgCode:'',
                phone:userInfo.mobile,
                areaCode:userInfo.areaCode
            },
            rules:{
                verificationCode:[
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                password2: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        }
    },
    props:{
        visible:{
            required:true,
            type:Boolean,
            default:false
        }
    },
    computed:{
        show:{
            get(){
                return this.visible
            },
            set(v){
                this.$emit('close',v)
            }
        }
    },
    watch:{
        'form.captchaImgCode':{
            handler(newVal){
                this.codeInfo ={
                    ...this.codeInfo,
                    captchaImgCode:newVal,
                }
                console.log(this.codeInfo)
            }
        }
    },
    components:{
      GetWordJpg,
      GetVerifyCode
    },
    methods:{
        open(){
            this.$nextTick(() => {
                this.$refs.wordJpg.updateCode()
            })
        },
        
        handleClose(){
            this.$emit('close',false)
        },
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    const {password,verificationCode} = this.form;
                    const parmasData={
                        areaCode:this.userInfo.areaCode,
                        phone:this.userInfo.mobile,
                        password,
                        verificationCode,
                    }
                    resetPwd(parmasData).then(res=>{
                        if(res.statusCode === 0){
                            this.$message({
                                type:'success',
                                message:'登录密码修改成功'
                            })
                            this.$emit('close',false)
                            this.form={
                                verificationCode:'',
                                captchaImgCode:'',
                                password:'',
                                password2:''
                            }
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang='scss' scoped>
    .userContent{
        .title{
            color: #333333;
            font-size: 20px;
            margin-bottom: 80px;
            &:first-child{
                margin-bottom:20px ;
            }
        }
        .submitBtn{
            width: 100%;
            height:50px;
            font-size: 16px;
            color: #fff;
            background: #2E54EB;
            border: 0;
            margin-top:50px ;
        }
    
    .el-form-item{
        border-bottom: 1px solid #CCCCCC;
        .el-form-item__content{
        line-height: initial;
        }
        .address{
        float: left;
        width: 100px;
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
            width: 60px;
            text-align: right;
            padding-right: 5px;
            line-height: 40px;
            cursor: pointer;
            }
            
        }
        
        .input{
        width: 100%;
        padding-left:100px;
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
            width: 210px;
            border-bottom: 1px solid #CCCCCC;
            }
            
        }
        
    }

    .imgCode{
            .codeBox{
            &:last-child{
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
  // .el-input{
  //   .el-input__inner{
  //   border: none;
  //   border-bottom: 1px solid #CCCCCC;
  // }

  // }
  

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
  .modalWrapper /deep/ .tjiao{
      margin-top: 50px;
      height: 50px;
      width: 100%;
  }
  
</style>