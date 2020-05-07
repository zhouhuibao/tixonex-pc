<template>
  <div>
    <div class="titleWrapper clearfix">
      <div class="title">{{ $t('user.zhdl') }}</div>
      <div class="close">
        <router-link to="/">
          <img src="./../../../public/img/tixonexImages/quxiao.png" alt="">
        </router-link>
        
      </div>
    </div>
    <el-form  ref="form" :model="form">
        <el-form-item class="clearfix">
          <div class="address">
            <div class="clearfix">
              <div class="img">
                <img src="./../../../public/img/tixonexImages/Bitmap.png" alt="">
              </div>
              <div class="content">
                +86
                <i class="el-icon-caret-bottom"></i>
              </div>
            </div>
          </div>
          <div class="input">
            <input class="inputText" :placeholder="$t('user.mobileNumber')" type="text" v-model="form.name1">
          </div>
        </el-form-item>

        <el-form-item>
            <input class="inputText" :placeholder="$t('user.qsrmm')" type="password" v-model="form.name3">
        </el-form-item>

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
        
        <el-form-item class="submitbtn">
          <el-button type="primary" @click="onSubmit">{{ $t('user.ljdl') }}</el-button>
        </el-form-item>
        <div class="wzBtn clearfix">
          <router-link to="/user/forgetPassWorld">{{ $t('user.wjmm') }}</router-link>
          <router-link to="/user/register">{{ $t('user.ljzc') }}</router-link>
        </div>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'login',
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
    methods:{
      onSubmit(){
        console.log(1)
      }
    }
}
</script>

<style lang="less" scoped>
.userContent{
  .titleWrapper{
    .title{
      float: left;
      color: #000000;
      font-size: 24px;
      line-height: 37px;
    }
    .close{
      float: right;
      cursor: pointer;
    }
    margin-bottom: 40px;
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
          width: 240px;
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
          a{
            color: #999999;
            font-size: 16px;
            &:first-child{
              float: left;
            }
            &:last-child{
              float: right;
            }
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