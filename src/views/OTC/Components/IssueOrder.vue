<template>
    <div class="modalWrapper">
        <el-dialog
            :visible.sync="show"
            width="600px"
            :before-close="handleClose"
            @open="open"
            :show-close="false"
        >
            <div class="closeImg">
                <img @click="handleClose" src="./../../../../public/img/tixonexImages/quxiao.png" alt="">
            </div>

            <el-form ref="form" :model="form" label-width="auto">
                <el-form-item label="选择交易币种">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="TSH"></el-radio>
                        <el-radio label="BTC"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="选择支付币种">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="CNY（人民币）"></el-radio>
                        <el-radio label="UDS（美元）"></el-radio>
                        <el-radio label="HDK（港元）"></el-radio>
                        <el-radio label="AUD（澳元）"></el-radio>
                        <el-radio label="JPY（日元）"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="账户余额">
                    <div style="color:#E71717">8479283748.980</div>
                </el-form-item>
                <el-form-item label="价格区间">
                    <el-input v-model="form.desc" placeholder="价格区间为2~2.65"></el-input>
                </el-form-item>
                
                <el-form-item label="卖出数量">
                    <el-input v-model="form.desc" placeholder="卖出数量5~20000"></el-input>
                </el-form-item>
                <el-form-item label="卖出金额">
                    <el-input v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="交易限额">
                    <el-col :span="11">
                    <el-input v-model="form.desc" placeholder="请设置交易上限"></el-input>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align:center">-</el-col>
                    <el-col :span="11">
                    <el-input v-model="form.desc" placeholder="请设置交易下限"></el-input>
                    </el-col>
                </el-form-item>
                
                
                    <div class="btnWrap">
                        <button class="button">取消</button>
                        <button class="button">发布卖单</button>
                    </div>
                    
                </el-form>
        
        </el-dialog>
    </div>
    
</template>

<script>
export default {
    name:'IssueOrder',
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

<style lang='less' scoped>
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
</style>