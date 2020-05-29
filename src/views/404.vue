<template>
  <div>
    <img src="./../../public/img/tixonexImages/404.png" alt="">
    <div class="btnWrap">
      <span>点击刷新</span>
      <span><router-link to="/">返回首页</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
    name:'nopage'
}
</script>

<style lang="scss" scoped>
  img{
    margin: 100px auto 30px;

  }
  .btnWrap{
    text-align: center;
    span{
      width:170px;
      height:50px;
      border-radius:4px;
      border:1px solid rgba(204,204,204,1);
      display: inline-block;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      &:first-child{
        margin-right: 10px;
      }
      &:last-child{
        margin-left: 10px;
        a{
        color: #fff;
        }
        background: #2E54EB;
      }
    }
  }
  
</style>