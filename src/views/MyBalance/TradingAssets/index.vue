<template>
  <div>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理123123</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    </el-tabs> -->
    <div class="tab">
      <div class="tabList clearfix">
        <div v-for="(item,index) in tabList" :key="index" :class="`tabItem ${index === currentIndex ? 'active' : ''}`" @click="changeTab(index)">{{item.name}} <div class="sub"></div></div>
      </div>
      
    </div>
    <div class="tabContent">
      <DealList v-if="currentIndex === 0" />
      <Entrust v-else />
    </div>
  </div>
</template>

<script>
import DealList from '@/views/MyBalance/TradingAssets/DealList'
import Entrust from '@/views/MyBalance/TradingAssets/Entrust'
export default {
    name:'MyAssets',
    data() {
      return {
        currentIndex:0,
        tabList:[
          {
            name:'成交查询'
          },
          {
            name:'委托管理'
          }
        ],
      };
    },
    components:{
      DealList,
      Entrust
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      changeTab(index){
        
        this.currentIndex=index;
        
      }
    }
}
</script>

<style lang='scss' scoped>
.tab{
  border-bottom: 1px solid #CCCCCC;
  margin-bottom: 20px;
  .tabItem{
    position: relative;
    float: left;
    padding: 0  30px 16px;
    color: #666666;
    font-size: 18px;
    cursor: pointer;
    .sub{
      display: none;
      position: absolute;
      bottom: -2px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 4px;
      background: #2E54EB;
    }
  }
  .active{
    color: #2E54EB;
    .sub{
      display: block;
    }
  }
}

</style>