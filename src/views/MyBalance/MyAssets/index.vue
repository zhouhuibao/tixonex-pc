<template>
  <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
        prop="address1"
        label="币种"
        width="180">
        <template slot-scope="scope"> 
            {{scope.row.address1}}
        </template>
        </el-table-column>
        <el-table-column
        prop="address2"
        label="可用"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address3"
        label="冻结">
        </el-table-column>
        <el-table-column
        prop="address4"
        label="锁仓">
        </el-table-column>
        <el-table-column
        prop="address5"
        label="总计"
        >
        
        </el-table-column>
        <el-table-column
        prop="address"
        label="操作"
        width="200"
        align="center"
        >
        <template>
            <div class="btnWrap">
                <span>充币</span>
                <span>提币</span>
                <span>交易</span>
            </div>
            
        </template>
        </el-table-column>
        <template slot="empty">
            <TableEmpty></TableEmpty>
        </template>
    </el-table>
  </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
export default {
    name:'MyAssets',
    data () {
        return {
            tableData:[{}]
        }
    },
    components: {
      TableEmpty
    },
    mounted(){
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = 'TSH';
        obj.address2 = '17368.389';
        obj.address3 = '0.000000';
        obj.address4 = '0.000000';
        obj.address5 = '836868.8675';
        obj.address6 = '183****1283';
        arr.push(obj)
      }
      this.tableData = arr

    },
}
</script>

<style lang='less' scoped>
    .btnWrap{
        span{
            color: #2E54EB;
            font-size: 16px;
            margin-right: 30px;
            cursor: pointer;
            &:last-child{
                margin: 0;
            }
        }
    }
</style>