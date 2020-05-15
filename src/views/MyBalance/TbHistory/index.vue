<template>
<div style="background:#fff">

    <Breadcrumb :list="routerList" style="margin-bottom:27px;" />
  <div class="layui-container">
      
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="address1"
            label="转出时间"
            width="170px"
        >
        </el-table-column>
        <el-table-column
            prop="address2"
            label="创建时间"
        >
        <template slot="header">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in 10"
                :key="item"
                label="TSH"
                :value="item">
                </el-option>
            </el-select>
        </template>
        </el-table-column>
        <el-table-column
            prop="address3"
            label="接收地址"
        >
        </el-table-column>
        <el-table-column
            prop="address4"
            label="转出数量">
        </el-table-column>
        <el-table-column
            prop="address5"
            label="转出费用">
        </el-table-column>
        <el-table-column
            prop="address6"
            label="实际到账">
        </el-table-column>
        <el-table-column
            prop="address7"
            label="状态">
        </el-table-column>
        <el-table-column
            prop="address8"
            width="330px"
            label="hash">
            <template slot-scope="{row}">
                {{row.address8}} <span class="copy"><i class="iconfont iconfuzhi"></i>复制</span>
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
                :total="100"
            >
            </el-pagination>
        </div>
  </div>
</div>

</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name:'TbHistory',
    data () {
        return {
            currentPage3: 5,
            formInline: {
                user: '',
                region: ''
            },
            tableData:[],
            value:''
        }
    },
    computed:{
        routerList(){
            const navList=[
                {
                    name:this.$t('MyBalance.zcgl'),
                    path:'/MyBalance'
                },
                {
                    name:this.$t('MyBalance.wdzc'),
                    path:'/MyBalance'
                },
                {
                    name:this.$t('MyBalance.tbjl'),
                }
            ]
            return navList
        }
    },
    
    mounted(){
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = '2020-11-08 18:38:28';
        obj.address2 = 'TSH';
        obj.address3 = '100';
        obj.address4 = '100';
        obj.address5 = '100';
        obj.address6 = 'TSH';
        obj.address7 = 'TSH';
        obj.address8 = 'NDIEHSFINES;F;DSLFMLRGORS';
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
.copy{
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
    padding: 3px 7px;
    border: 1px solid #E2E8FF;
    color: #2E54EB;
    font-size: 14px;
    border-radius: 4px;
    i{
        margin-right: 5px;
    }
}


</style>