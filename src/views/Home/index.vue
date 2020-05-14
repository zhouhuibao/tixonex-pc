<template>
  <div class="home">
    <el-carousel height="400px" :interval="2000" >
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="tixonex-container">
        <Message></Message>
        <div class="usdtTitle">
          <div class="title">{{$t('home.usdt')}}</div>
          <div class="titleBorder"></div>
        </div>
        <el-table
          border
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
            prop="priceBeforeStat"
            align="center"
            :label="$t('home.zxj')"
          >
          </el-table-column>
          <el-table-column
            prop="changeRate"
            align="center"
            :label="$t('home.zf')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="maxPrice"
            :label="$t('home.zgj')"
          >
          </el-table-column>
          <el-table-column
            prop="minPrice"
            align="center"
            :label="$t('home.zdj')"
          >
          </el-table-column>
          <el-table-column
            prop="sumCurrency"
            align="center"
            :label="$t('home.jyl')"
          >
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('home.qjy')"
          >
            <template slot-scope="scope"> <el-button >去交易</el-button> </template>
          </el-table-column>
          <template slot="empty">
            <TableEmpty></TableEmpty>
          </template>
        </el-table>

        <div class="usdtTitle">
          <div class="title dpt">{{ $t('home.dptzdjr') }}</div>
          <div class="title">{{ $t('home.fgiaw') }}</div>
        </div>
        <div class="imgWrapper">
          <img src="./../../../public/img/tixonexImages/anzhuoshouji.png" alt="">
          <div class="code">
            <img src="./../../../public/img/tixonexImages/code.png" alt="">
            <p>Andriod下载</p>
          </div>
          <img src="./../../../public/img/tixonexImages/iphone.png" alt="">
          <div class="code">
            <img src="./../../../public/img/tixonexImages/code.png" alt="">
            <p>IOS下载</p>
          </div>

        </div>
      </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import TableEmpty from '@/components/TableEmpty.vue'
export default {
  name: 'Home',
  data() {
    return {
      tableData: [],
      banner:["https://fancblock.oss-cn-shenzhen.aliyuncs.com/8d88ab6f550f6b442d57dc5a5aed6ca5.png","https://fancblock.oss-cn-shenzhen.aliyuncs.com/14e4cebf014757c55772c2d2fb17df57.png"]
    }
  },
  components: {
    Message,
    TableEmpty
  },
  mounted(){
    const arr =[{"coinName":"TSH","settlementCurrency":"USDT","startTime":1588749820,"endTime":1588836220,"priceBeforeStat":0.38285700,"latestPrice":0.38142800,"latestCnyPrice":2.7081388000000000,"sumAmount":261214.00000000,"sumCurrency":98899.5065790000000000,"dealTimes":6643,"minPrice":0.37428500,"maxPrice":0.38285700,"firstPrice":0.37428500,"lastPrice":0.38142800,"changeRate":0.01908439,"coinUrl":"https://fancblock.oss-cn-shenzhen.aliyuncs.com/120.png","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0},{"coinName":"ETH","settlementCurrency":"USDT","startTime":1588749820,"endTime":1588836220,"priceBeforeStat":207.72000000,"latestPrice":204.06000000,"latestCnyPrice":1448.8260000000000000,"sumAmount":4920.34000000,"sumCurrency":1009244.5583900000000000,"dealTimes":5548,"minPrice":197.00000000,"maxPrice":210.62000000,"firstPrice":207.72000000,"lastPrice":204.06000000,"changeRate":-0.02002593,"coinUrl":"https://iblocks.oss-cn-shenzhen.aliyuncs.com/1560407498534WeChat Image_20190613143101.jpg","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0},{"coinName":"ETC","settlementCurrency":"USDT","startTime":1588749820,"endTime":1588836220,"priceBeforeStat":7.24370000,"latestPrice":6.94750000,"latestCnyPrice":49.3272500000000000,"sumAmount":11103.54000000,"sumCurrency":78700.0911801000000000,"dealTimes":5548,"minPrice":6.78800000,"maxPrice":7.31720000,"firstPrice":7.23730000,"lastPrice":6.94750000,"changeRate":-0.02920422,"coinUrl":"https://iblocks.oss-cn-shenzhen.aliyuncs.com/1560407498534WeChat Image_20190613143101.jpg","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0},{"coinName":"LTC","settlementCurrency":"USDT","startTime":1588749821,"endTime":1588836221,"priceBeforeStat":46.94000000,"latestPrice":45.79000000,"latestCnyPrice":325.1090000000000000,"sumAmount":2625.58000000,"sumCurrency":121350.0699100000000000,"dealTimes":5548,"minPrice":44.47000000,"maxPrice":47.55000000,"firstPrice":46.89000000,"lastPrice":45.79000000,"changeRate":-0.02449936,"coinUrl":"https://iblocks.oss-cn-shenzhen.aliyuncs.com/1560407498534WeChat Image_20190613143101.jpg","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0},{"coinName":"BTC","settlementCurrency":"USDT","startTime":1588749820,"endTime":1588836220,"priceBeforeStat":9020.00000000,"latestPrice":9275.00000000,"latestCnyPrice":65852.5000000000000000,"sumAmount":428.38200000,"sumCurrency":3948812.4193500000000000,"dealTimes":5547,"minPrice":8996.19000000,"maxPrice":9385.00000000,"firstPrice":9013.42000000,"lastPrice":9275.00000000,"changeRate":2.7501E-4,"coinUrl":"https://iblocks.oss-cn-shenzhen.aliyuncs.com/1560407498534WeChat Image_20190613143101.jpg","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0},{"coinName":"OMG","settlementCurrency":"USDT","startTime":1588749820,"endTime":1588836220,"priceBeforeStat":0.70560000,"latestPrice":0.69220000,"latestCnyPrice":4.9146200000000000,"sumAmount":4863.19000000,"sumCurrency":3428.6822169000000000,"dealTimes":5544,"minPrice":0.67560000,"maxPrice":0.72020000,"firstPrice":0.70560000,"lastPrice":0.69220000,"changeRate":-0.03310518,"coinUrl":"https://fancblock.oss-cn-shenzhen.aliyuncs.com/1560407498534WeChat Image_20190613143101.jpg","preArea":0,"mineArea":1,"mainArea":0,"ukzArea":0}]
    this.tableData = arr
    console.log(this.$store.state.user.testArr.name)
  },
  methods:{
    clickUser(){
      this.$router.push('/content')
    },
    setVuex(){
      this.$store.commit('user/setTest')
    }
  }
}
</script>

<style lang="less" scoped>
  .home{
    .usdtTitle{
      text-align: center;
      margin: 60px 0;
      .title{
        color: #2E54EB;
        font-size: 24px;
      }
      .dpt{
        margin: 170px 0 20px 0;
      }
      .titleBorder{
        width:40px;
        height:3px;
        background: #2E54EB;
        margin: 5px auto;
      }
    }
    .imgWrapper{
      text-align: center;
      margin-bottom: 100px;
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
        }
      }
    }
  }


  .el-carousel__item img {
    width: 100%;
    min-height: 400px;
  }


</style>