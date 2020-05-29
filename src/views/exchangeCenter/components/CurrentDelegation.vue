<template>
  <div class="box">
      <div class="title">
          当前委托
      </div>
      <div class="content">
          <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="address1"
            label="时间"
            >
          </el-table-column>
          <el-table-column
            prop="address2"
            label="买/卖"
            >
          </el-table-column>
          <el-table-column
            prop="address3"
            label="价格（USDT）"
            >
          </el-table-column>
          <el-table-column
            prop="address4"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="address4"
            label="已成交">
          </el-table-column>
          <el-table-column
            prop="address4"
            label="总额（USDT)">
          </el-table-column>
          
          <el-table-column
            prop="address"
            label="操作"
            width="120"
            align="center"
          >
            <template>
              <el-button @click="BuyVisible = true" type="primary">购买</el-button>
              <!-- <button class="buy" ></button> -->
            </template>
          </el-table-column>
          <template slot="empty">
              <TableEmpty></TableEmpty>
            </template>
        </el-table>
      </div>
  </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty'
export default {
  name:'CurrentDelegation',
  data () {
    return {
        tableData:[]
    }
  },
  components:{
      TableEmpty
  }
}
</script>

<style lang='scss' scoped>
@mixin borderBg() {
    // border: 1px solid $borderColor;
    border: 1px solid #ccc;
    background: $fff;
}
.box{
    margin-top: 20px;
    @include borderBg();
    .title{
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        padding-left: 28px;
        border-bottom: 1px solid #ccc;
    }
    .content{

    }
}
</style>
