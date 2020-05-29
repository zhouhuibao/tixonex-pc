<template>
    <div class="modalWrapper">
        <el-dialog
            :visible.sync="show"
            width="700px"
            :before-close="handleClose"
            @open="open"
            :show-close="false"
        >
            <div class="closeImg">
                <img @click="handleClose" src="./../../../../../public/img/tixonexImages/quxiao.png" alt="">
            </div>
            
            
            <div class="title">
                <img src="./../../../../../public/img/tixonexImages/weChat.png" alt="">绑定微信
            </div>


            <el-form ref="form" :rules="rules" :model="form" label-width="auto">
                
                <el-form-item label="姓名" prop="bankUser">
                    <el-input v-model="form.bankUser" placeholder="请输入姓名"></el-input>
                </el-form-item>
                
                <el-form-item label="账号" prop="bankNo">
                    <el-input v-model="form.bankNo" placeholder="请输入绑定微信账号"></el-input>
                </el-form-item>
                <el-form-item label="收款码">
                    <el-upload
                        class="avatar-uploader"
                        :action="action"
                        :headers="headers"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="form.receiptCode" :src="form.receiptCode" class="avatar">
                        <div v-else>
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                            <div class="uploadTips">点击上传微信收款码</div>
                        </div>
                        
                    </el-upload>
                </el-form-item>
                <el-form-item label="验证码" prop="smsCode">
                    <div class="yzmCode">
                        <el-input v-model="form.smsCode" placeholder="请输入验证码"></el-input>
                        <GetVerifyCode class="prBtn" YZMtype="BANK" :info="codeInfo" :areaCode="codeInfo.areaCode" codeType="ADD_BANKER" />
                    </div>
                    
                </el-form-item>
                    <div class="btnWrap">
                        <div class="button" @click="handleClose">取消</div>
                        <div class="button" @click="onSubmit">确定</div>
                    </div>
                </el-form>
        
        </el-dialog>
    </div>
    
</template>

<script>
import GetVerifyCode from '@/views/user/components/GetVerifyCode'
import {uploadImage} from '@/api/upload'
import personal from '@/api/personal';
import { isEmpty } from '@/utils/auth';
const {BindBankAddress} = personal

export default {
    name:'WeChat',
    data () {
        const {userInfo} = this.$store.state.user;
        return {
            action:uploadImage(),
            headers:{
                token:this.$store.state.user.token
            },
            form: {
                bankUser: '',
                bankName: '',
                bankNo: '',
                smsCode:'',
                receiptCode:''
            },
            userInfo,
            codeInfo:{
                phone:userInfo.mobile,
                areaCode:userInfo.areaCode
            },
            rules:{
                bankUser:[
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                bankName: [
                    { required: true, message: '请输入开户行', trigger: 'blur' }
                ],
                bankNo: [
                    { required: true, message: '请输入微信账号', trigger: 'blur' }
                ],
                smsCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
            },
        }
    },
    props:{
        visible:{
            required:true,
            type:Boolean,
            default:false
        },
        info:{
            type:Object
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
    components:{
      GetVerifyCode
    },
    methods:{
        open(){
            const {info,form} = this;
            if(info.bind){
                Object.keys(form).forEach(item=>{
                    let itemVal = info[item]
                    form[item] = isEmpty(itemVal) ? itemVal : ''
                })
            }
        },
        handleClose(){
            this.$emit('close',false)
        },
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    const submitData={
                        ...this.form,
                        bankType:2,
                        name:this.$store.state.user.userInfo.realName,
                        legalName:'CNY'
                    }

                    const {bind,id} = this.info
                    if(bind){
                        submitData.id =id
                    }

                    BindBankAddress(submitData,bind ? 'update' : 'add').then(res=>{
                        if(res.statusCode === 0){
                            this.$message({
                                type:'success',
                                message:'微信绑定成功'
                            })
                            this.$emit('close',false)
                            this.form={
                                bankUser: '',
                                bankName: '',
                                bankNo: '',
                                smsCode:'',
                                receiptCode:''
                            }
                        }
                    })

                }else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        handleAvatarSuccess(res, file) {
            const {statusCode,content,errorMessage} = res
            if(statusCode === 0){
                this.form.receiptCode = content
            }else{
                this.$message({
                    type:'error',
                    message:errorMessage
                })
            }
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            const imgTypeArr= ['image/png','image/jpeg']
            const isImg = imgTypeArr.indexOf(file.type) !== -1 || false

            if (imgTypeArr.indexOf(file.type) === -1) {
                this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isImg && isLt2M;
        }
    }
}
</script>

<style lang='scss' scoped>
.modalWrapper{
    .title{
        text-align: center;
        font-size: 24px;
        margin-bottom: 46px;
        color: #333;
        vertical-align: middle;
        img{
            margin-right: 10px;
        }
    }
    .tips{
        margin:27px 0 45px 0 ;
        color: #E71717;
        font-size: 16px;
        text-align: center;
    }
    .yzmCode{
        padding-right: 170px;
        position: relative;
        .prBtn{
            position:absolute;
            width: 160px;
            height: 40px;
            text-align: center;
            padding: 0;
            right: 0;
            top: 0px;
            line-height: 40px;
        }
    }
    .btnWrap{
        text-align: center;
        .button{
            display: inline-block;
            width: 170px;
            height: 45px;
            line-height: 45px;
            border: 0;
            cursor: pointer;

            border-radius:4px;
            &:first-child{
                color: #666666;
                font-size: 16px;
                background: #fff;
                border: 1px solid #CCCCCC;
                margin-right: 10px;
            }
            &:last-child{
                margin-left: 10px;
                color: #fff;
                font-size: 16px;
                background: #2E54EB;
                border: 1px solid #2E54EB;
            }
        }
    }

    .avatar-uploader .el-icon-plus{
        font-size: 40px;
        line-height: 160px;
    }
}
    
</style>