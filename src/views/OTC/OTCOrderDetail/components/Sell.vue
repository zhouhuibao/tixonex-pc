<template>
  <div>
      <div class="box">
        <p>订单对方已支付，付款参考号239290437230958-345-3490</p>
        <img src="./../../../../../public/img/tixonexImages/test.jpg" alt="">
        <div class="btnWrap">
          <el-button type="info" @click="SubmitComplaintVisible = true">提交申诉</el-button>
          <el-button type="primary" @click="releaseVisible = true">到账无误，确认放行</el-button>
        </div>
      </div>
      

      <SubmitComplaint :visible="SubmitComplaintVisible" @close="(v)=>{close(v,'SubmitComplaintVisible')}" />
      <Release :visible="releaseVisible" @close="(v)=>{close(v,'releaseVisible')}" />
  </div>
</template>

<script>

import SubmitComplaint from './SubmitComplaint'
import Release from './Release'
export default {
    name:'Sell',
    data () {
      return {
        releaseVisible:false,
        SubmitComplaintVisible:false
      }
    },
    components:{
      Release,
      SubmitComplaint
    },
    methods:{
      close(v,type){
        this[type] = false
      }
    }
}
</script>

<style lang='scss' scoped>
p{
    text-align: center;
    color: #666666;
    margin-bottom: 30px;
    font-size: 16px;
}
img{
  width: 150px;
  height: 150px;
}

.btnWrap{
    text-align: center;
    margin-top: 40px;
    .defaultBtn{
      border: 1px solid #ccc;
      &:first-child{
        border: 1px solid #ccc;
        background: #f5f2f0;
        color: #666666;
        margin-right: 25px;
      }
      &:last-child{
        margin-left: 25px;
        border-color: #2E54EB;
      }
    }
    
  }

.box{
  text-align: center;
 
}
</style>

<style scoped>
.btnWrap /deep/ .el-button{
  width: 170px;
}
</style>