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
                <img src="./../../../../../public/img/tixonexImages/yinhangka.png" alt="">绑定银行卡
            </div>

            <div class="tips">
                *请设置您的收款支付方式，请务必使用本人实名账号
            </div>

            <el-form ref="form" :rules="rules" :model="form" label-width="auto">
                
                <el-form-item label="姓名" prop="bankUser">
                    <el-input v-model="form.bankUser" placeholder="请输入开户姓名"></el-input>
                </el-form-item>
                
                <el-form-item label="开户银行" prop="bankName">
                    <el-input v-model="form.bankName" placeholder="请输入开户银行"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号" prop="bankNo">
                    <el-input v-model="form.bankNo" placeholder="请输入开户银行卡号"></el-input>
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
import { isEmpty } from '@/utils/auth';
import personal from '@/api/personal';
const {BindBankAddress} = personal
export default {
    name:'Bank',
    data () {
        const {userInfo} = this.$store.state.user;
        return {
            form: {
                bankUser: '',
                bankName: '',
                bankNo: '',
                smsCode:''
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
                    { required: true, message: '请输入银行卡号', trigger: 'blur' }
                ],
                smsCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
            }
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
            console.log('submit!');
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    const submitData={
                        ...this.form,
                        bankType:0,
                        name:this.$store.state.user.userInfo.realName,
                        legalName:'CNY'
                    }
                    const {bind,id} = this.info
                    if(bind){
                        submitData.id =id
                    }
                    BindBankAddress(submitData,bind ? 'update' : 'add').then(res=>{
                        console.log(res)
                        if(res.statusCode === 0){
                            this.$message({
                                type:'success',
                                message:'银行卡绑定成功'
                            })
                            this.$emit('close',false)
                            this.form={
                                bankUser: '',
                                bankName: '',
                                bankNo: '',
                                smsCode:''
                            }
                        }
                    })

                }else {
                    console.log('error submit!!');
                    return false;
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.modalWrapper{
    .title{
        text-align: center;
        font-size: 24px;
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
}
    
</style>