<template>
  <div>
      <div class="noData">
            <img src="./../../public/img/tixonexImages/wujilu.png" alt="">
            <p>
                {{tips}}

            </p>
      </div>
      
  </div>
</template>

<script>
export default {
    props:{
        tips:{
            default:'暂无记录'
        }
    }
}
</script>

<style lang="less" scoped>
    .noData{
        padding: 50px;
        p{
            color: #999;
            margin-right: 10px;
        }
    }
</style>