<template>
  <div class="CJTime">
      <div class="title">成交时间</div>
      <div class="content">
          <div class="layui-row c-con">
              <div class="layui-col-xs4">时间</div>
              <div class="layui-col-xs4">价格</div>
              <div class="layui-col-xs4">成交量(TSH)</div>
          </div>
          <div class="layui-row item" v-for="(item,index) in 10" :key="index">
              <div class="layui-col-xs4">18:12:48</div>
              <div class="layui-col-xs4">0.38</div>
              <div class="layui-col-xs4">35</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'CJTime',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
    .CJTime{
        height: 570px;
        .title{
            height: 60px;
            padding-left: 15px;
            line-height: 60px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
        }
        .content{
            text-align: center;
            .c-con{
                color: #666;
                font-size: 16px;
                margin: 13px 0 20px 0;
            }
            .item{
                margin-bottom: 20px;
                font-size: 18px;
            }
        }
    }
</style>
