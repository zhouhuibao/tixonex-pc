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
                <img @click="handleClose" src="./../../../../public/img/tixonexImages/quxiao.png" alt="">
            </div>
            
            <div class="title">
                <div class="img"><i class="iconfont iconuser" style="color:#279DEE"></i></div>
                 卖家名称：136****8888
            </div>
            <div class="title">
                <div class="img"><i class="iconfont iconqian" style="color:#F5A04C"></i></div>
                 单价：2.6 CNY
            </div>
            
            <el-form ref="form" :model="form"  label-width="auto">
                
                <el-form-item label="数量" style="margin:60px 0 10px 0">
                    <el-col :span="11">
                        <el-input v-model="form.date1">
                            <template slot="append">CNY</template>
                        </el-input>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align:center">≈</el-col>
                    <el-col :span="11">
                        <el-input v-model="form.date2">
                            <template slot="append">TSH</template>
                        </el-input>
                    </el-col>
                </el-form-item>
                <el-form-item style="margin-bottom:80px">（单笔限额269～1234.67CNY）</el-form-item>
                
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
                date1:'',
                date2:'',
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
        }
    }
}
</script>

<style lang='less' scoped>
.modalWrapper{
   .title{
        font-size: 18px;
        color: #333;
        vertical-align: middle;
        margin-bottom: 20px;
        .img{
            display: inline-block;
            width: 40px;
            height: 22px;

            i{
                float: left;
                color: #29D677;
                font-size: 28px;
            }
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