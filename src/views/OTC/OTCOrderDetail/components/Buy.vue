<template>
  <div>
    <p>待支付，请于<span style="color:#2A4DEF">2020-04-19 12:09:43 </span>内完成支付，付款参考号239290437230958-345-3490</p>
    <p>付款成功后，请点击“已支付”按钮</p>
    <div class="btnWrap">
      <div class="defaultBtn" @click="cancelVisible = true">取消订单</div>
      <div class="defaultBtn" @click="payVisible = true">已支付</div>
    </div>
    <AskModal :visible="cancelVisible" @close="(v)=>{close(v,'cancelVisible')}" title="确认取消该订单？"/>
    <PayModal :visible="payVisible" @close="(v)=>{close(v,'payVisible')}" />
  </div>
</template>

<script>
import AskModal from '@/components/AskModal'
import PayModal from './Paid'
export default {
    name:'Buy',
    data () {
      return {
        cancelVisible:false,
        payVisible:false  
      }
    },
    components:{
      AskModal,
      PayModal
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
    font-size: 16px;
    margin-bottom: 10px;
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
</style>