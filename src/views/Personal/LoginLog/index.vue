<template>
    <div style="background:#fff;">

        <div class="layui-container">
            <Breadcrumb :list="routerList" style="margin-bottom:40px" />
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="address1"
                label="操作时间"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="address2"
                label="操作类型"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="address3"
                label="操作备注">
            </el-table-column>
            <el-table-column
                prop="address4"
                label="状态"
                align="center"
            >
            </el-table-column>
            <template slot="empty">
                <TableEmpty></TableEmpty>
                </template>
            </el-table>

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
    </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name:'orderLIst',
    data () {
        return {
            routerList:[],
            currentPage3: 5,
            formInline: {
                user: '',
                region: ''
            },
            tableData:[]
        }
    },
    watch:{
      '$i18n.locale':{
        deep:true,
        handler(newVal){
          this.setnavList()
        }
      }
    },
    mounted(){
      this.setnavList()
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = '2020-04-16 10:17:38';
        obj.address2 = '登录';
        obj.address3 = '暂无备注';
        obj.address4 = '登录成功';
        arr.push(obj)
      }
      this.tableData = arr
    },
    components:{
        Breadcrumb,
        TableEmpty  
    },
    methods:{
        setnavList(){
            const navList=[
                {
                    name:this.$t('Personal.zhzx'),
                    path:'/Personal/Personal-center'
                },
                {
                    name:this.$t('Personal.ddrz'),
                }
            ]
            this.routerList = navList
        },
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

<style lang='less' scoped>
.elpage{
    margin-top: 80px;
    text-align: center;
    padding-bottom: 150px;
    .el-pagination{
      white-space:normal;

    }
}


</style>