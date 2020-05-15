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
                 确认付款，上传凭证
            </div>
            <el-form ref="form" :model="form">
                
                <el-form-item label="请选择付款方式">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="微信支付"></el-radio>
                    <el-radio label="支付宝支付"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div class="tips">
                    *请确认您已向卖方付款，并上传凭证。恶意点击将被冻结账号
                </div>
                <el-upload
                    class="shangchuan"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <el-image
                        v-if="imageUrl"
                        style="width: 150px; height: 150px"
                        :src="imageUrl"
                        fit="contain"
                    ></el-image>
                    <img v-else src="./../../../../../public/img/tixonexImages/xiangji.png" alt="">
                </el-upload>
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
    name:'Paid',
    data () {
        return {
            form: {
                resource: '',
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
    .shangchuan{
        width: 150px;
        height: 150px;
        background: #F2F3F8;
        text-align: center;
        line-height: 150px;
        margin-bottom: 30px;
        .avatar{
            max-width: 100%;
            max-height: 150px;
        }
         .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
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