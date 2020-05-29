<template>
  <div class="home">
    <el-carousel height="450px" :interval="2000" >
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <div class="message">
      <div class="layui-container">
        <Message style="message"></Message >
      </div>
    </div>
    <div class="layui-container jyq">
      <div class="usdtTitle">
          <div class="title">{{$t('home.usdt')}}</div>
          <div class="titleBorder"></div>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            align="center"
            :label="$t('home.jyd')"
          >
            <template slot-scope="scope"> {{ `${scope.row.coinName}/${scope.row.settlementCurrency}` }} </template>
          </el-table-column>
          <el-table-column
            prop="lastDayPrice"
            align="center"
            :label="$t('home.zxj')"
          >
          </el-table-column>
          <el-table-column
            prop="maxIncrease"
            align="center"
            :label="$t('home.zf')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="maxCurrency"
            :label="$t('home.zgj')"
          >
          </el-table-column>
          <el-table-column
            prop="minBuyPrice"
            align="center"
            :label="$t('home.zdj')"
          >
          </el-table-column>
          <el-table-column
            prop="maxExchangeNum"
            align="center"
            :label="$t('home.jyl')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('home.qjy')"
          >
            <template slot-scope="scope">
               <el-button >去交易</el-button> 
               </template>
          </el-table-column>
          <template slot="empty">
            <TableEmpty></TableEmpty>
          </template>
      </el-table>
    </div>

    <div class="dup">
      <div class="layui-container">
        <div class="usdtTitle">
          <div class="title dpt">{{ $t('home.dptzdjr') }}</div>
          <div class="title">{{ $t('home.fgiaw') }}</div>
        </div>
        <div class="layui-row imgWrapper layui-col-space30">
          <div class="layui-col-sm6 left">
            <img src="./../../../public/img/tixonexImages/anzhuoshouji.png" alt="">
            <div class="code">
              <img src="./../../../public/img/tixonexImages/code.png" alt="">
              <p>Andriod下载</p>
            </div>
          </div>
          <div class="layui-col-sm6 right">
            <img src="./../../../public/img/tixonexImages/iphone.png" alt="">
            <div class="code">
              <img src="./../../../public/img/tixonexImages/code.png" alt="">
              <p>IOS下载</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
    
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import TableEmpty from '@/components/TableEmpty.vue'
import {advertise} from '@/api/advertise'
import {market} from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      tableData: [],
      lang:localStorage.lang || 'cn',
      banner:["https://fancblock.oss-cn-shenzhen.aliyuncs.com/8d88ab6f550f6b442d57dc5a5aed6ca5.png","https://fancblock.oss-cn-shenzhen.aliyuncs.com/14e4cebf014757c55772c2d2fb17df57.png"]
    }
  },
  components: {
    Message,
    TableEmpty
  },
  mounted(){
    this.getAdvertiseList()
    this.getmarketList()
  },
  methods:{
    clickUser(){
      this.$router.push('/content')
    },
    setVuex(){
      this.$store.commit('user/setTest')
    },
    getmarketList(){
      market({pageNo:1,pageSize:100}).then(res=>{
        console.log(res)
        const {statusCode,content} = res;
        if(statusCode === 0){
          this.tableData = content
        }
      })
    },
    getAdvertiseList(){
      let locale = '';
      if(this.lang === 'cn'){
        locale='zh_CN'
      }else if(lang === 'en'){
        locale='en_US'
      }else{
        locale='zh_TW'
      }

      advertise({locale}).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .message,.dup{
    background: $bgColor;
  }
  
  .dup{
    padding: 70px  0 100px 0;
  }
  .jyq{
    padding:60px 15px ;
  }
  .home{
    .usdtTitle{
      text-align: center;
      margin-bottom: 60px;
      .title{
        color: $mainColor;
        font-size: 24px;
      }
      .dpt{
        margin-bottom: 20px;
      }
      .titleBorder{
        width:40px;
        height:3px;
        background: $mainColor;
        margin: 5px auto;
      }
    }
    .imgWrapper{
      
      .code{
        display: inline-block;
        margin:0 50px 0 10px;
        padding-top: 90px;
        vertical-align: top;
        &:last-child{
          margin-right:0 ;
        }
        img{
          width: 120px;
          height: 120px;
        }
        p{
          color: #333333;
          font-size: 16px;
          margin: 20px 0 0px 0;
          padding-left: 5px;
        }
      }
      .left{
        text-align: right;
        .code p{
          text-align: left;
        }
      }
      .right{
        text-align: left;
      }
    }
  }


  .el-carousel__item img {
    width: 100%;
    min-height: 450px;
  }



</style>

<style scoped>
  .jyq /deep/ .el-table th.is-leaf {
    font-weight: normal;
    color: #333333;
    font-size: 16px;
  }
  .jyq /deep/ .el-table{
    border: 1px solid #EBEEF5;
    border-bottom: 0;
  }
  .jyq /deep/ .el-table th .cell{
    line-height: 40px;
  }
</style>