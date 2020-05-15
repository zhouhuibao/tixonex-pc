<template>
<div>

    <Breadcrumb :list="routerList" style="margin-bottom:27px;" />
  <div class="layui-container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="类型">
            <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
            <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="订单状态一" value="shanghai"></el-option>
            <el-option label="订单状态二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="交易币种">
            <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="交易币种一" value="shanghai"></el-option>
            <el-option label="交易币种二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        </el-form>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="address1"
            label="订单编号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address2"
            label="创建时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address3"
            label="支付方式"
            align="center"
        >
            <template>
              <img src="./../../../../public/img/tixonexImages/yinhangka.png" alt="">
            </template>
        </el-table-column>
        <el-table-column
            prop="address4"
            label="交易对象">
        </el-table-column>
        <el-table-column
            prop="address5"
            label="支付币种">
        </el-table-column>
        <el-table-column
            prop="address6"
            label="交易币种">
        </el-table-column>
        <el-table-column
            prop="address7"
            label="类型">
        </el-table-column>
        <el-table-column
            prop="address8"
            label="订单状态">
        </el-table-column>
        <el-table-column
            prop="address9"
            label="操作"
            width="120px"
            align="center"
        >
            <template>
              <router-link  class="prBtn" to="/OTC/OTC-order-detail">订单详情</router-link>
            </template>
        </el-table-column>
        <template slot="empty">
              <TableEmpty></TableEmpty>
            </template>
        </el-table>

        <div class="elpage otcList">
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="100">
            </el-pagination>
        </div>
  </div>
</div>

</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name:'orderLIst',
    data () {
        return {
            currentPage3: 5,
            formInline: {
                user: '',
                region: ''
            },
            tableData:[]
        }
    },
    computed:{
        routerList(){
            const navList=[
                {
                    name:this.$t('OTC.gdlb'),
                    path:'/OTC/OTC-list'
                },
                {
                    name:this.$t('OTC.ddgl'),
                }
            ]
            return navList
        }
    },
    
    mounted(){
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = '1332472309483054';
        obj.address2 = '2020-11-08 18:34:19';
        obj.address3 = '100 TSH';
        obj.address4 = '13812902000';
        obj.address5 = '100 CNY';
        obj.address6 = '100 TSH';
        obj.address7 = '买入';
        obj.address8 = '已完成';
        arr.push(obj)
      }
      this.tableData = arr
    },
    components:{
        Breadcrumb,
        TableEmpty  
    },
    methods:{
        
        onSubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
    }
}
</script>

<style lang='scss' scoped>
.elpage{
    margin-top: 80px;
    text-align: center;
    padding-bottom: 150px;
    .el-pagination{
      white-space:normal;

    }
}


</style>