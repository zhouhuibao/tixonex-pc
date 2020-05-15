<template>
    <div>
      <div class="bg"></div>
        <div class="layui-container" style="padding-bottom:300px">
            <div class="layui-row">
                <div class="layui-col-md6">
                    <div class="nav clearfix">
                        <router-link v-for="(item,index) in navList" :key="index" :to='item.path' @click="changeCoin(item)">{{item.name}}</router-link>
                    </div>
                </div>
                <div class="layui-col-md6" v-if="currentPath === '/MyBalance/MyBalance-container/MyAssets'">
                    <div class="tbdzgl">
                        <router-link to="/MyBalance/withdrawal-address">提币地址管理</router-link>
                    </div>
                </div>
            </div>
            <div style="padding-top:38px">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Container',
    data () {
      return {
        navList:[
          {
            name:'我的资产',
            path:'/MyBalance/MyBalance-container/MyAssets',
          },
          {
            name:'交易资产',
            path:'/MyBalance/MyBalance-container/TradingAssets',
          }
        ],
        currentPath:'',
      }
    },
    created(){
      this.currentPath = this.$route.path
    },
    watch:{
      '$route':{
        handler(newVal){
          this.currentPath = newVal.path
        },
        deep:true
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

<style lang="scss" scoped>
.bg{
  height: 50px;
  background: $bgColor;
  margin-bottom: 40px;
}
.nav{
  width: 490px;
  height: 60px;
  border-radius:35px;
  overflow: hidden;
  background: $bgColor;
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
</style>