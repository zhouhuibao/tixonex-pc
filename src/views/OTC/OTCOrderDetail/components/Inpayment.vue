<template>
  <div>
      <p>等待对方支付，13465789876将于2020-04-19 10:46:35内完成支付，付款参号：3928402937438974830 </p>
      <div class="box">等待支付中…</div>
  </div>
</template>

<script>
export default {
    name:'Inpayment'
}
</script>

<style lang='scss' scoped>
p{
    text-align: center;
    color: #666666;
    margin-bottom: 60px;
    font-size: 16px;
}
.box{
  margin: 0 auto;
  border:1px solid #29D677;
  width: 170px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #29D677;
  cursor: pointer;
  border-radius:4px;
}
</style>