<template>
    <div class="modalWrapper">
        <el-dialog
            :visible.sync="show"
            width="480px"
            :before-close="handleClose"
            @open="open"
            :show-close="false"
        >
            <div class="closeImg">
                <img @click="handleClose" src="./../../../../public/img/tixonexImages/quxiao.png" alt="">
            </div>


            <div class="userContent">
                <div class="title">
                    <img @click="handleClose" src="./../../../../public/img/tixonexImages/baozhang.png" alt="">
                    {{$t('PostersList.xgyjmm')}}
                </div>
                <div class="title">
                    <img @click="handleClose" src="./../../../../public/img/tixonexImages/shouji.png" alt="">
                    136****2819
                </div>
                <el-form  ref="form" :model="form">
                    <el-form-item class="clearfix yzCode imgCode">
                        <div class="codeBox">
                        <input class="inputText" :placeholder="$t('user.imgyzCode')" type="text" v-model="form.name4">
                        </div>
                        <div class="codeBox">
                        8456
                        </div>
                    </el-form-item>
                    <el-form-item class="clearfix yzCode dxCode">
                        <div class="codeBox">
                        <input class="inputText" :placeholder="$t('user.dxyzCode')" type="text" v-model="form.name5">
                        </div>
                        <div class="codeBox">
                        {{ $t('user.dxyzmBtn') }}
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <input class="inputText" :placeholder="$t('user.shuzimima')" type="password" v-model="form.name2">
                    </el-form-item>
                    <el-form-item>
                        <input class="inputText" :placeholder="$t('user.querenmima')" type="password" v-model="form.name3">
                    </el-form-item>
                   
                </el-form>
                <button class="submitBtn">
                    {{$t('PostersList.tj')}}
                </button>
            </div>

        </el-dialog>
    </div>
    
</template>

<script>
export default {
    name:'EditPssword',
    data () {
        return {
            form:{
            name1:'',
            name2:'',
            name3:'',
            name4:'',
            name5:'',
            name6:'',
            name7:'',
            checked:false
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
    .userContent{
        .title{
            color: #333333;
            font-size: 20px;
            margin-bottom: 80px;
            &:first-child{
                margin-bottom:20px ;
            }
        }
        .submitBtn{
            width: 100%;
            height:50px;
            font-size: 16px;
            color: #fff;
            background: #2E54EB;
            border: 0;
            margin-top:50px ;
        }
    
    .el-form-item{
        border-bottom: 1px solid #CCCCCC;
        .el-form-item__content{
        line-height: initial;
        }
        .address{
        float: left;
        width: 100px;
        padding-left: 4px;
            .img{
            float: left;
            padding-top: 7px;
            img{
                width: 36px;
                height: 24px;
                width: 100%;
                // height: 100%;
            }
            }
            .content{
            float: left;
            width: 60px;
            text-align: right;
            padding-right: 5px;
            line-height: 40px;
            cursor: pointer;
            }
            
        }
        
        .input{
        width: 100%;
        padding-left:100px;
        box-sizing: border-box;
        }
        .inputText{
            border: 0;
            width: 100%;
            height: 38px;
            font-size: 16px;
            outline: none;
            float: left;
            padding-left: 10px;
            &:focus{
            .userContent .el-form-item{
                border-color: red;
            }
            }
        }
        
    }

    .yzCode{
        border: none;
        position: relative;
        
        .codeBox{
            float: left;
            &:first-child{
            width: 210px;
            border-bottom: 1px solid #CCCCCC;
            }
            
        }
        
    }

    .imgCode{
            .codeBox{
            &:last-child{
            position:absolute;
            top: -10px;
            right: 10px;
            width: 160px;
            border: 1px solid #ccc;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 34px;
            color: #F57723;
            }
            }
        }
        
        .dxCode{
            .codeBox{
            &:last-child{
            position:absolute;
            top: 0px;
            right: 10px;
            border-radius:4px;
            width: 160px;
            height: 40px;
            background: #2E54EB;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
            }
            }
        }


        .itemChecked{
            text-align: left;
            padding-left: 10px;
            margin-bottom: 20px;
        }
        .wzBtn{
            text-align: right;
            a{
                color: #999999;
                font-size: 16px;
                &:hover{
                color: #1a8bf4;
                }
            }
            
        }
  // .el-input{
  //   .el-input__inner{
  //   border: none;
  //   border-bottom: 1px solid #CCCCCC;
  // }

  // }
  

}
</style>