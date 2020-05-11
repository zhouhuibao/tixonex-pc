<template>
    <el-table
    :data="tableData"
    style="width: 100%"
    >
        <el-table-column
            label="Date"
            prop="address1"
        >
            <template slot="header">
                <el-select style="width:90px" v-model="value" placeholder="交易区">
                    <el-option
                    v-for="item in 6"
                    :key="item"
                    :value="item">
                    </el-option>
                </el-select>
            </template>
            <template slot-scope="scope"> <div style="padding-left:30px">{{scope.row.address1}}</div></template>
        </el-table-column>
        <el-table-column
            label="成交时间"
            prop="address2">
        </el-table-column>
        <el-table-column
            label="Date"
            prop="address3"
        >
            <template slot="header">
                <el-select style="width:110px"  v-model="value" placeholder="交易类型">
                    <el-option
                    v-for="item in 6"
                    :key="item"
                    :value="item">
                    </el-option>
                </el-select>
            </template>
            <template slot-scope="scope"> <div style="padding-left:40px">{{scope.row.address3}}</div></template>
        </el-table-column>
        <el-table-column
            label="成交价格"
            prop="address4">
        </el-table-column>
        <el-table-column
            label="成交数量"
            prop="address5">
        </el-table-column>
        <el-table-column
            label="总金额"
            prop="address6">
        </el-table-column>
        <el-table-column
            label="手续费"
            prop="address7">
        </el-table-column>

    </el-table>
</template>

<script>
export default {
    name:'Entrust',
    data () {
        return {
            value:'',
            value:'',
            tableData:[]
        }
    },
    mounted(){
        const arr = [];
        for(let i=0;i<10;i+=1){
            const obj ={};
            obj.address1 = 'TSH';
            obj.address2 = '2020-11-08 18:38:28';
            obj.address3 = '买入';
            obj.address4 = '1287.97866';
            obj.address5 = '1000';
            obj.address6 = '28386.2863';
            obj.address7 = '5.000000';
            arr.push(obj)
        }
        this.tableData = arr
    }
}
</script>

<style>

</style>