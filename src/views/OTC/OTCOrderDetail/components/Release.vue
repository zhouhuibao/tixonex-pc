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
                <div class="img"><i class="el-icon-circle-check"></i></div>
                 确认收款并放行
            </div>
            <div class="tips">
                *请确认您已向卖方付款，并上传凭证。恶意点击将被冻结账号
            </div>
            <el-form ref="form" :model="form">
                
                <p style="color:#999999;font-size:16px">资金密码</p>
                <div class="inputWrap">
                    <el-input v-model="form.password"/>
                </div>
                <el-checkbox v-model="form.checked">我确认已登陆收款账户，并核对收款无误</el-checkbox>
                
              
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
    name:'Release',
    data () {
        return {
            form: {
                password: '',
                checked:false
            },
            imageUrl: '',
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

<style lang='scss' scoped>
.modalWrapper{
    .title{
        text-align: center;
        font-size: 20px;
        color: #333;
        vertical-align: middle;
        margin-bottom: 50px;
        .img{
            display: inline-block;
            width: 30px;
            height: 21px;

            i{
                float: left;
                color: #29D677;
                font-size: 28px;
            }
        }
        
    }
    .tips{
        margin:27px 0 45px 0 ;
        color: #E71717;
        font-size: 14px;
    }
    .inputWrap{
        margin: 15px 0 20px 0;
    }
    .btnWrap{
        margin-top: 50px;
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