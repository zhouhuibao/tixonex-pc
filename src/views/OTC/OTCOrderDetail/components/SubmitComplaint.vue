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
                <div class="img"><img src="./../../../../../public/img/tixonexImages/baozhang.png" alt=""></div>
                 提交申诉
            </div>
            <el-form ref="form" :model="form">
                <el-select v-model="form.region" placeholder="请选择申诉类型" style="width:100%;margin-bottom:20px">
                  <el-option label="对方未打款" value="shanghai"></el-option>
                  <el-option label="对方已打款" value="beijing"></el-option>
                </el-select>
                <p style="color:#999999;font-size:16px">备注</p>
                <div class="inputWrap">
                    <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="请说明原因及上传截图"
                      v-model="form.password"
                    />
                </div>

                <div class="layui-row">
                  <div class="layui-col-xs4">
                      <div style="float:right;width:120px">
                        <el-upload
                            class="shangchuan"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="(res, file)=>{handleAvatarSuccess(res, file,'imageUrl1')}"
                            :before-upload="beforeAvatarUpload"
                        >
                            <el-image
                                v-if="form.imageUrl1"
                                style="width: 120px; height: 120px"
                                :src="form.imageUrl1"
                                fit="contain"
                            ></el-image>
                            <img v-else src="./../../../../../public/img/tixonexImages/xiangji.png" alt="">
                        </el-upload>
                      </div>
                  </div>
                  <div class="layui-col-xs4">
                    <div style="margin:0 auto;width:120px">
                      <el-upload
                          class="shangchuan"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="(res, file)=>{handleAvatarSuccess(res, file,'imageUrl2')}"
                          :before-upload="beforeAvatarUpload"
                      >
                          <el-image
                              v-if="form.imageUrl2"
                              style="width: 120px; height: 120px"
                              :src="form.imageUrl2"
                              fit="contain"
                          ></el-image>
                          <img v-else src="./../../../../../public/img/tixonexImages/xiangji.png" alt="">
                      </el-upload>
                    </div>
                      
                  </div>
                  <div class="layui-col-xs4">
                      <div style="float:left;width:120px">
                        <el-upload
                            class="shangchuan"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="(res, file)=>{handleAvatarSuccess(res, file,'imageUrl3')}"
                            :before-upload="beforeAvatarUpload"
                        >
                            <el-image
                                v-if="form.imageUrl3"
                                style="width: 120px; height: 120px"
                                :src="form.imageUrl3"
                                fit="contain"
                            ></el-image>
                            <img v-else src="./../../../../../public/img/tixonexImages/xiangji.png" alt="">
                        </el-upload>
                      </div>
                  </div>
                </div>
                
                
              
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
    name:'SubmitComplaint',
    data () {
        return {
            form: {
                password: '',
                region:'',
                checked:false,
                imageUrl1:'',
                imageUrl2:'',
                imageUrl3:''
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
        handleAvatarSuccess(res, file,type) {
            this.form[type] = URL.createObjectURL(file.raw);
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
            width: 60px;
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
    .shangchuan{
        width: 120px;
        height: 120px;
        background: #F2F3F8;
        text-align: center;
        line-height: 120px;
        .avatar{
            max-width: 100%;
            max-height: 120px;
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
        margin-top: 40px;
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