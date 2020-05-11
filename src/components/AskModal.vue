<template>
    <div class="askModal">
        <el-dialog
            :visible.sync="show"
            width="600px"
            :before-close="handleClose"
            @open="open"
            :show-close="false"
        >
            <div class="title">
                <img src="./../../public/img/tixonexImages/baozhang.png" alt="">
                {{title}}
            </div>
            <div class="btn">
                <button @click="handleClose">取消</button>
                <button>确定</button>
            </div>
        </el-dialog>
    </div>
  
</template>

<script>
export default {
    name:'AskModal',
    props:{
        visible:{
            required:true,
            type:Boolean,
            default:false
        },
        title:{
            required:true,
            type:String,
            default:''
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
    .title{
        text-align: center;
        color: #333333;
        font-size: 28px;
        img{
            margin-right: 10px;
        }
    }
    .btn{
        text-align: center;
        button{
            width: 150px;
            height: 45px;
            border-radius: 4px;
            font-size: 16px;
            border: 0;
            cursor: pointer;
            &:first-child{
                background: #fff;
                border:1px solid #CCCCCC;
                color: #666666;
                margin-right: 10px;
            }
            &:last-child{
                color: #fff;
                margin-left: 10px;
                background: #2E54EB;
                border:1px solid #2E54EB;
            }
        }
    }
</style>