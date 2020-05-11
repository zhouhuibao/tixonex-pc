<template>
  <div class="otc">
    <div class="layui-container">
      <div class="layui-row otc-top">
        <div class="layui-col-md6">
          <div class="layui-row">
            <div class="layui-col-xs6">
              <div class="mc">卖出</div>
              <div class="nav">
                <span v-for="(item,index) in coinArr" :key="index" :class="item.checked ? 'active' : ''" @click="changeCoin(item)">{{item.name}}</span>
              </div>
            </div>
            <div class="layui-col-xs6" style="padding-top:40px">
              <el-select v-model="value" placeholder="支付货币CNY">
                  <el-option
                    v-for="item in 3"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
            </div>
          </div>
        </div>
        <div class="layui-col-md6">
          <div class="orderBtn" style="padding-top:40px">
            <el-button @click="IssueOrderVisible = true">发布订单</el-button>
            <el-button @click="pushRouter('/OTC/OTC-order-list')">订单管理</el-button>
            <el-button @click="pushRouter('/OTC/OTC-posters-list')">挂单管理</el-button>
          </div>
            
        </div>
      </div>
      <div class="tableWrap">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="address1"
            label="商家"
            width="180">
            <template slot-scope="scope"> 
              {{scope.row.address1}}
              <p style="color:#74A2ED">30日成交：20笔</p> 
            </template>
          </el-table-column>
          <el-table-column
            prop="address2"
            label="单价"
            width="180">
            <template slot-scope="scope"> <div style="color:#11BC70">{{scope.row.address2}}</div> </template>
          </el-table-column>
          <el-table-column
            prop="address3"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="address4"
            label="单笔限额">
          </el-table-column>
          <el-table-column
            prop="address5"
            label="支付方式"
            align="center"
          >
            <template>
              <div class="payType">
                <img src="./../../../../public/img/tixonexImages/yinhangka.png" alt="">
                <img src="./../../../../public/img/tixonexImages/zhifubao.png" alt="">
                <img src="./../../../../public/img/tixonexImages/weChat.png" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            width="120"
            align="center"
          >
            <template>
              <button class="buy">购买</button>
            </template>
          </el-table-column>
          <template slot="empty">
              <TableEmpty></TableEmpty>
            </template>
        </el-table>
      </div>
      
      <div class="elpage otcList">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
      
    </div>
   

        
     <issue-order :visible="IssueOrderVisible" @close="closeIssueOrder"></issue-order> 

        
  </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import IssueOrder from './../Components/IssueOrder'
export default {
    nameL:'OTCList',
    data () {
      return {
        IssueOrderVisible:false,
        value:'',
        currentPage3: 5,
        coinArr:[
          {
            name:'TSH',
            checked:true
          },
          {
            name:'BTC',
            checked:false
          }
        ],
        tableData:[]
      }
    },
    components: {
      TableEmpty,
      IssueOrder
    },
    mounted(){
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = '183****1283';
        obj.address2 = '2.25 CNY';
        obj.address3 = '100 TSH';
        obj.address4 = '225-2250 CNY';
        obj.address5 = '183****1283';
        obj.address6 = '183****1283';
        arr.push(obj)
      }
      this.tableData = arr

    },
    methods:{
      pushRouter(router){
        this.$router.push(router)
      },
      changeCoin(record){
        this.coinArr.forEach(item=>{
          if(item.name === record.name){
            item.checked =true
          }else{
            item.checked =false
          }
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      closeIssueOrder(v){
        this.IssueOrderVisible = v
      }
    }
}
</script>


<style lang="less" scoped>
.otc{
  background: #fff;
  margin-top: 40px;
  .otc-top{
    padding-bottom: 24px;
    .mc{
      color: #2E54EB;
      font-size: 16px;
      margin: 25px 0;
    }
    .nav{
      span{
        margin-right: 40px;
        cursor: pointer;
        font-size: 16px;
        color: #333;

      }
      .active{
        color: #2E54EB;
        text-decoration:underline ;
      }
    }
    .orderBtn{
      text-align: right;
    }
  }
  .buy{
    border: 0;
    width:90px;
    height:40px;
    background:rgba(34,100,209,1);
    border-radius:4px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
  }
  .tableWrap{
    margin-bottom: 80px;
  }
  .elpage{
    text-align: center;
    padding-bottom: 150px;
    .el-pagination{
      white-space:normal;

    }
  }
  .payType{
    img{
      margin-right: 10px;
      &:last-child{
        margin: 0;
      }
    }
  }
  
}

@media only screen and (max-width: 1000px){
    .otc .elpage{
      text-align: left;
    }
  }
</style>