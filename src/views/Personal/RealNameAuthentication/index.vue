<template>
  <div class="RealNameAuthentication">
    <Breadcrumb :list="routerList" />
      <div class="layui-container">
        <div class="realNameContainer">
            <div class="title">
                <img src="./../../../../public/img/tixonexImages/baozhang.png" alt="">
                填写身份信息
            </div>
            <div class="layui-row ">
                <div class="layui-col-md6 layui-col-md-offset3 layui-col-xs12">
                    <el-form ref="form" :rules="rules" :model="form" label-width="auto">
                        <el-form-item label="真实姓名" prop="realname">
                            <el-input v-model="form.realname" placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型" prop="idcardType">
                            <el-select v-model="form.idcardType" placeholder="请选择证件类型" style="width:100%">
                            <el-option label="居民身份证" :value="1"></el-option>
                            <el-option label="护照" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码" prop="idcard">
                            <el-input v-model="form.idcard" placeholder="请输入证件号码"></el-input>
                        </el-form-item>

                        <div class="line"></div>
                        <div class="tips clearfix">
                            <i class="el-message__icon el-icon-warning"></i>
                            <p>请上传身份证正面照，身份证反面照，手持身份证半身照，完善认证资料。1-3个工作日审核，仅支持 png、jpg格式，且单张大小不超过2M。</p>
                        </div>
                        <div class="layui-row layui-col-space5">
                            <div class="layui-col-xs4">
                                <div class="imgContent">
                                    <div class="imgWrapper">
                                        <el-form-item prop="idcardimg2">
                                            <el-upload
                                                class="avatar-uploaders"
                                                :headers="headers"
                                                :action="action"
                                                :show-file-list="false"
                                                :on-success="(res, file)=>{handleAvatarSuccess(res, file,'idcardimg2')} "
                                                :before-upload="(file)=>{beforeAvatarUpload(file,'idcardimg2')} "
                                                >
                                                <img v-if="form.idcardimg2" :src="form.idcardimg2" class="avatar">
                                                <img v-else src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                            </el-upload>
                                        </el-form-item>
                                    </div>
                                    <p>身份证正面</p>
                                </div>
                            </div>
                            <div class="layui-col-xs4 ">
                                <div class="imgContent zj">
                                    <div class="imgWrapper">
                                        <el-form-item prop="idcardimg3">
                                            <el-upload
                                                class="avatar-uploaders"
                                                :headers="headers"
                                                :action="action"
                                                :show-file-list="false"
                                                :on-success="(res, file)=>{handleAvatarSuccess(res, file,'idcardimg3')} "
                                                :before-upload="(file)=>{beforeAvatarUpload(file,'idcardimg3')} "
                                                >
                                                <img v-if="form.idcardimg3" :src="form.idcardimg3" class="avatar">
                                                <img v-else src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                            </el-upload>
                                        </el-form-item>
                                    </div>
                                    <p>身份证反面</p>
                                </div>
                            </div>
                            <div class="layui-col-xs4">
                                <div class="imgContent" style="float:right">
                                    <div class="imgWrapper">
                                        <el-form-item prop="idcardimg1">
                                            <el-upload
                                                class="avatar-uploaders"
                                                :action="action"
                                                :headers="headers"
                                                :show-file-list="false"
                                                :on-success="(res, file)=>{handleAvatarSuccess(res, file,'idcardimg1')} "
                                                :before-upload="(file)=>{beforeAvatarUpload(file,'idcardimg1')} "
                                                >
                                                <img v-if="form.idcardimg1" :src="form.idcardimg1" class="avatar">
                                                <img v-else src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                            </el-upload>
                                        </el-form-item>
                                    </div>
                                    <p>手持身份证照片</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="btn">
                            <el-button class="defaultBtn" type="primary" @click="onSubmit">提交</el-button>
                        </div>


                        
                        </el-form>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import {idCardAuth} from '@/api/user'
import {uploadImage} from '@/api/upload'

export default {
    name:'RealNameAuthentication',
    data () {
        return {
            action:uploadImage(),
            headers:{
                token:this.$store.state.user.token
            },
            form: {
                idcard: '',
                idcardType:1,
                realname:'',
                idcardimg1:'',
                idcardimg2:'',
                idcardimg3:''
            },
            rules:{
                realname:[
                    { required: true, message: '请输入真实姓名', trigger: 'blur' }
                ],
                idcard:[
                    { required: true, message: '请输入证件号', trigger: 'blur' }
                ],
                idcardType:[
                    { required: true, message: '请选择证件类型', trigger: 'change' }
                ],
                idcardimg1:[
                    { required: true, message: '请上传手持身份证照片', trigger: 'change' }
                ],
                idcardimg2:[
                    { required: true, message: '请上传身份证正面照片', trigger: 'change' }
                ],
                idcardimg3:[
                    { required: true, message: '请上传身份证背面照片', trigger: 'change' }
                ]
            } 

        }
    },
    components:{
        Breadcrumb
    },
    computed:{
        routerList(){
            const navList=[
                {
                    name:this.$t('Personal.zhzx'),
                    path:'/Personal/Personal-center'
                },
                {
                    name:this.$t('Personal.smrz'),
                }
            ]
            return navList
        }
    },
    
    methods:{
        
        onSubmit() {
            console.log('submit!');
            this.$refs.form.validate((valid) => {
                if (valid) {
                    idCardAuth(this.form).then(res=>{
                        if(res.statusCode === 0){
                            this.$store.dispatch({
                                type:'user/getUserInfo'
                            })
                            this.$message({
                                type:'success',
                                message:'实名认证成功'
                            })
                        }
                    })

                } else {
                    console.log('error submit!!');
                    return false;
                }
            })

        },
        handleAvatarSuccess(res, file,type) {
            const {statusCode,content,errorMessage} = res
            if(statusCode === 0){
                this.form[type] = content
            }else{
                this.$message({
                    type:'error',
                    message:errorMessage
                })
            }
        },
        beforeAvatarUpload(file,type) {
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
<style scoped>
    .imgWrapper /deep/ .el-upload{
        width: 100%
    }
    .imgWrapper /deep/ .el-form-item__content{
        margin: 0 !important;
        line-height: 160px;
        max-height: 160px;
        vertical-align: middle;
    }
</style>
<style lang='scss' scoped>
    .RealNameAuthentication{
        background: #fff;
        .realNameContainer{
            .title{
                text-align: center;
                color: #333333;
                font-size: 20px;
                padding: 60px 0;
            }
            .line{
                margin: 40px 0;
                border-bottom: 1px solid #CCCCCC;
                width: 100%;
            }
            .tips{
                font-size: 14px;
                i{
                    font-size: 16px;
                    float: left;
                    line-height: 20px;
                    color: #FB8989;
                }
                p{
                    margin-left: 20px;
                    color: #999999;
                }
            }
            .imgContent{
                width: 130px;
                max-width: 100%;
                text-align: center;
                margin:40px 0 30px;
                .imgWrapper{
                    width: 130px;
                    max-width: 100%;
                    height: auto;
                    line-height: 160px;
                    cursor: pointer;
                    position: relative;
                    img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        margin: auto;
                        max-width: 100%;
                        max-height: 100%;
                        height: auto;
                        width: auto;
                    }
                }
                p{
                    text-align: center;
                    color: #333333;
                    font-size: 14px;
                    margin-top: 20px;
                }
            }
            .zj{
                margin: 40px auto 30px;

            }
            .btn{
                text-align: center;
                margin:60px 0 140px 0;
            }
        }
    }
</style>