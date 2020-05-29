<template>
    <div class="elpage otcList">
        <el-pagination
            v-if="total>pageSize"
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'',
    data () {
        return {
            currentPage:1
        }
    },
    props:{
        pageSize:{
            type:Number,
            default:10
        },
        total:{
            type:Number,
            default:0
        }
    },
    methods:{
        handleCurrentChange(val){
            this.currentPage = val
            this.$emit('changePage',val)
        }
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
