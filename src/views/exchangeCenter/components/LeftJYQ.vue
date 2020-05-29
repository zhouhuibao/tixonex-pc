<template>
    <div class="leftJyq">
        <div class="layui-row" style="margin-bottom:20px">
            <div class="layui-col-xs4">
                <el-input placeholder="币种" v-model="inputVal" suffix-icon="el-icon-search"></el-input>
            </div>
            <div class="layui-col-xs4" style="line-height:30px">最新价</div>
            <div class="layui-col-xs4"> 
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in 10"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="content">
            <div class="layui-row item" v-for="(itme,index) in 5" :key="index" >
                <div class="layui-col-xs4 left">TSH/USDT</div>
                <div class="layui-col-xs4 center">0.382819</div>
                <div class="layui-col-xs4 right">+0.23%</div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            value:'',
            inputVal:'',
            list:[]
        }
    },
    mounted(){
        // for
    }
}
</script>

<style lang="scss" scoped>
.leftJyq{
    padding:  0 15px;
    text-align: center;
    .content{
        height: 500px;
        overflow-y: auto;
        .item{
            margin-bottom: 30px;
            .left{
                text-align: left;
            }
            .center{
                text-align: center;
            }
            .right{
                text-align: right;
                color: $green;
            }
        }
    }
}
</style>

<style scoped>
    .leftJyq /deep/ .el-input .el-input__inner{
        width: 104px;
        height: 30px;
        border-radius:15px;
    }
    .leftJyq /deep/ .el-select .el-input .el-select__caret{
        line-height: 30px;
    }
    .leftJyq /deep/ .el-input__icon{
        line-height: 30px;
    }
    
</style>