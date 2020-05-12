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


            <el-form ref="form" :model="form" label-width="auto">
                
                <el-form-item label="姓名">
                    <el-input v-model="form.desc" placeholder="请输入姓名"></el-input>
                </el-form-item>
                
                <el-form-item label="账号">
                    <el-input v-model="form.desc" placeholder="请输入绑定微信账号"></el-input>
                </el-form-item>
                <el-form-item label="收款码">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div class="uploadTips">点击上传微信收款码</div>
                        
                    </el-upload>
                </el-form-item>
                <el-form-item label="验证码">
                    <div class="yzmCode">
                        <el-input v-model="form.desc" placeholder="请输入验证码"></el-input>
                        <button class="prBtn" style="">发送验证码</button>
                    </div>
                    
                </el-form-item>
                
                
                
                    <div class="btnWrap">
                        <button class="button" @click="handleClose">取消</button>
                        <button class="button">确定</button>
                    </div>
                    
                </el-form>
        
        </el-dialog>
    </div>
    
</template>

<script>
export default {
    name:'WeChat',
    data () {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            imageUrl:''
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
    methods:{
        open(){
            console.log('打开')
        },
        handleClose(){
            this.$emit('close',false)
        },
        onSubmit() {
            console.log('submit!');
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style lang='less' scoped>
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
        padding-right: 120px;
        position: relative;
        button{
            position:absolute;
            right: 0;
            top: 2px;
        }
    }
    .btnWrap{
        text-align: center;
        .button{
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
}
    
</style>