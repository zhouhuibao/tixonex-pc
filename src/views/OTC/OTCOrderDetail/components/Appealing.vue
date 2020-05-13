<template>
  <div>
      <p>您的订单处于申诉中，请耐心等待，付款参考号239290437230958-345-3490</p>
      <div class="box">申诉中…</div>
  </div>
</template>

<script>
export default {
    name:'Appealing'
}
</script>

<style lang='less' scoped>
p{
    text-align: center;
    color: #666666;
    margin-bottom: 60px;
    font-size: 16px;
}
.box{
  margin: 0 auto;
  border:1px solid #E71717;
  width: 170px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #E71717;
  cursor: pointer;
  border-radius:4px;
}
</style>