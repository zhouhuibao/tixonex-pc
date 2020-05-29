<template>
    <div style="background:#fff;">
    <Breadcrumb :list="routerList" style="margin-bottom:40px" />

        <div class="layui-container">
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="operationTime"
                label="操作时间"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="type"
                label="操作类型"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="comment"
                label="操作备注">
            </el-table-column>
            <el-table-column
                prop="success"
                label="状态"
                align="center"
            >
            </el-table-column>
            <template slot="empty">
                <TableEmpty></TableEmpty>
                </template>
            </el-table>
            
            <page 
                :total='total'
                @changePage="changePage"
            />
           
        </div>
    </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import Breadcrumb from '@/components/Breadcrumb'
import page from '@/components/page'
import personal from '@/api/personal';
const {loginLog} = personal
export default {
    name:'orderLIst',
    data () {
        return {
            currentPage: 1,
            formInline: {
                user: '',
                region: ''
            },
            total:0,
            tableData:[]
        }
    },
    computed:{
        routerList(){
            const navList=[
                {
                name:this.$t('Personal.zhzx'),
                path:'/Personal/Personal-center'
            },
            {
                name:this.$t('Personal.ddrz'),
            }
            ]
            return navList
        }
    },
    mounted(){
        this.getLog()
    },
    components:{
        Breadcrumb,
        TableEmpty,
        page  
    },
    methods:{
        getLog(){
            loginLog({pageNo:this.currentPage,pageSize:10}).then(res=>{
                const {statusCode,content,total} = res
                if(statusCode === 0){
                    this.tableData = content || []
                    this.total = total
                }
            })
        },  
      
        changePage(val){
            this.currentPage = val
            this.getLog()
        }
    }
}
</script>

<style lang='scss' scoped>
.elpage{
    padding-top: 80px;
    text-align: center;
    padding-bottom: 150px;
    .el-pagination{
      white-space:normal;

    }
}


</style>