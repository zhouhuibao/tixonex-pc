<template>
  <div class="MyBalance">
    <div class="layui-container">
      <div class="layui-row">
        <div class="layui-col-md6">
          <div class="nav clearfix">
            <router-link v-for="(item,index) in navList" :key="index" :to='item.path' @click="changeCoin(item)">{{item.name}}</router-link>
          </div>
        </div>
        <div class="layui-col-md6">
          <div class="tbdzgl">
            <router-link to="/withdrawal-address">提币地址管理</router-link>
          </div>
           
        </div>
      </div>
      <div style="padding:30px 0 300px 0">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
    name:'MyBalance',
    data () {
      return {
        navList:[
          {
            name:'我的资产',
            path:'/MyBalance/MyAssets',
          },
          {
            name:'交易资产',
            path:'/MyBalance/TradingAssets',
          }
        ],
      }
    },
    methods:{
      changeCoin(record){
        this.navList.forEach(item=>{
          if(item.name === record.name){
            item.checked =true
          }else{
            item.checked =false
          }
        })
      },
    } 
}
</script>

<style lang='less' scoped>
.MyBalance{
  padding-top: 40px;
  background: #fff;
  .nav{
    a{
      width:245px;
      height:60px;
      color: #333333;
      float: left;
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
    }
    .myactive{
      background:rgba(46,84,235,1);
      border-radius:35px;
      
      color: #fff;
    }
    
  }
  .tbdzgl{
    text-align: right;
    line-height: 60px;
    a{
      background: #fff;
      padding: 8px 26px;
      border-radius:4px;
      border: 0;
      border:1px solid rgba(46,84,235,1);
      color: #2E54EB;
      cursor: pointer;
    }
    
  }
}
  
</style>