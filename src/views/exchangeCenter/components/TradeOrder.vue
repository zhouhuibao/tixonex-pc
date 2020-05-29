<template>
  <div class="wrapper">
      <div class="title">
          买卖挂单
      </div>
      <div class="mmContent">
        <div class="layui-row mmTitle">
            <div class="layui-col-xs3">
                <div class="nbsp"></div>
            </div>
            <div class="layui-col-xs3">
                <p>价格</p>
                <p>(USDT)</p>
            </div>
            <div class="layui-col-xs3">
                <p>数量</p>
                <p>(USDT)</p>
            </div>
            <div class="layui-col-xs3">
                <p>累计</p>
                <p>(USDT)</p>
            </div>
        </div>
        <div class="mmBox">
            <div class="layui-row item" v-for="(item,index) in 5" :key="index">
                <div class="layui-col-xs3" style="color:#E71717;text-align: center;">卖7</div>
                <div class="layui-col-xs3" style="color:#E71717">3</div>
                <div class="layui-col-xs3">2</div>
                <div class="layui-col-xs3">2</div>
            </div>
        </div>
        
      </div>
      
      <div class="price"><span>TSH</span>0.383840≈¥2.698849</div>
      <div class="mmContent">
        <div class="layui-row mmTitle">
            <div class="layui-col-xs3">
                <div class="nbsp"></div>
            </div>
            <div class="layui-col-xs3">
                <p>价格</p>
                <p>(USDT)</p>
            </div>
            <div class="layui-col-xs3">
                <p>数量</p>
                <p>(USDT)</p>
            </div>
            <div class="layui-col-xs3">
                <p>累计</p>
                <p>(USDT)</p>
            </div>
        </div>
        <div class="mmBox" style="height:235px">
            <div class="layui-row item" v-for="(item,index) in 5" :key="index">
                <div class="layui-col-xs3" style="color:#E71717;text-align: center;">卖7</div>
                <div class="layui-col-xs3" style="color:#E71717">3</div>
                <div class="layui-col-xs3">2</div>
                <div class="layui-col-xs3">2</div>
            </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name:'TradeOrder',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>

    .wrapper{
        .title{
            border-bottom: 1px solid #ccc;
            height: 60px;
            line-height: 60px;
            padding-left: 15px;
            font-size: 18px;
            background: $fff;
        }
        .mmContent{
            background: #f8f8f8;
            .mmTitle{
                padding: 10px;
                height:60px;
                font-size: 14px;
            }
            .mmBox{
                font-size: 14px;
                height: 230px;
                overflow-y: auto;
                margin-bottom: 10px;
                .item{
                    margin-bottom: 10px;
                }
            }
        }
        .price{
            height: 60px;
            line-height: 60px;
            text-align: center;
            color: $green;
            font-size: 18px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            background: $fff;
            span{
                margin-right: 10px;
            }
        }
    }
</style>
