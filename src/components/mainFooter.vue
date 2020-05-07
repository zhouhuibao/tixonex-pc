<template>
  <div class="footerWrapper">
      <div class="tixonex-container clearfix">
        <div class="footerLogo hidden-md-and-down">
          <img src="./../../public/img/tixonexImages/logo-white.png" alt="">
        </div>
        <div class="footeritem">
          <el-row>
            <el-col :span="8">
              <div class="">
                <div class="title">{{$t('footer.gywm')}}</div>
                <ul>
                  <li>{{$t('footer.ptjj')}}</li>
                  <li>{{$t('footer.jrwm')}}</li>
                  <li>{{$t('footer.yssm')}}</li>
                  <li>{{$t('footer.fwtk')}}</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <div class="title">{{$t('footer.fwzc')}}</div>
                <ul>
                  <li>{{$t('footer.bzzx')}}</li>
                  <li>{{$t('footer.gdzc')}}</li>
                  <li>{{$t('footer.fysm')}}</li>
                  <li>{{$t('footer.sbsq')}}</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="last">
                <div class="title">{{$t('footer.lxwm')}}</div>
                <ul>
                  <li>{{$t('footer.fwyx')}}</li>
                  <li>{{$t('footer.wyfk')}}</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="reserved">©2019 Tixon All Rights Reserved</div>
  </div>
</template>

<script>
export default {
    name:'mainFooter'
}
</script>

<style lang='less' scoped>
  .footerWrapper{
    background: #061339;
    padding: 50px 0 35px;
    color: #fff;
    .footerLogo{
      float: left;
      height: 170px;
      padding: 19px 66px 0 0;
      border-right: 1px solid #fff;
      // margin-right: 106px;
    }
    .footeritem{
      padding-left: 60px;
      margin-left:181px ;
      overflow: hidden;
      .title{
        margin-bottom: 22px;
        font-size: 16px;
      }
      ul{
        li{
          font-size: 14px;
          text-align: left;
          margin-bottom: 13px;
          cursor: pointer;
          &:hover{
            color: #1a8bf4;
          }
        }
      }
    }
    .reserved{
      text-align: center;
      font-size: 14px;
    }

  }

  @media only screen and (max-width: 1199px){
    .footerWrapper{
      .footeritem{
        margin: 0;
        padding: 0;
      }
    }
    
  }
</style>