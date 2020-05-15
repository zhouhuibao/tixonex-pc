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

            <el-form ref="form" :model="form" label-width="auto">
                
                <el-form-item label="姓名">
                    <el-input v-model="form.desc" placeholder="请输入开户姓名"></el-input>
                </el-form-item>
                
                <el-form-item label="开户银行">
                    <el-input v-model="form.desc" placeholder="请输入开户银行"></el-input>
                </el-form-item>
                <el-form-item label="开户支行">
                    <el-input v-model="form.desc" placeholder="请输入开户银行支行"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号">
                    <el-input v-model="form.desc" placeholder="请输入开户银行卡号"></el-input>
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
    name:'Bank',
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
    methods:{
        open(){
            console.log('打开')
        },
        handleClose(){
            this.$emit('close',false)
        },
        onSubmit() {
            console.log('submit!');
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