<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            >
                <el-table-column
                    label="Date"
                    prop="address1"
                >
                    <template #header>
                            <el-select style="width:90px" class="coinWrap" v-model="coinName" placeholder="请选择">
                            <el-option
                                v-for="item in coinList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.name" 
                            />
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
                    <template #header>
                        <el-select style="width:110px"  v-model="typeValue" placeholder="交易类型">
                            <el-option
                                v-for="(item,index) in tradeType"
                                :key="index"
                                :label="item.name"
                                :value="item.value"
                            >
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
                <template slot="empty">
                    <TableEmpty></TableEmpty>
                </template>
            </el-table>
        <page 
        style="padding:0"
            :total='total'
            @changePage="changePage"
        />
    </div>
    
    
</template>

<script>
import TableEmpty from '@/components/TableEmpty'
import page from '@/components/page'
import {walletCoins} from '@/api/withdrawalAddress';
import {userTradeLogList} from '@/api/MyBalance';
export default {
    name:'DealList',
    data () {
        return {
            value:'',
            typeValue:'ALL',
            tableData:[],
            coinList:[],
            tradeType:[
                {
                    name:'所有',
                    value:'ALL'
                },
                {
                    name:'买入',
                    value:'BUY'
                },
                {
                    name:'卖出',
                    value:'SELL'
                }

            ],
            coinName:'',
            pageNo:1,
            total:0
        }
    },
    watch:{
        'typeValue':{
            handler(newVal){
                console.log(newVal)
                this.pageNo =1
            }
        },
        'coinName':{
            handler(newVal){
                console.log(newVal)
            }
        }
    },
    components:{
      TableEmpty,
      page
    },
    mounted(){
        this.getCoinList()
        this.getTableList()
    },
    methods:{
        getCoinList(){
            walletCoins().then(res=>{
                const {content,statusCode} = res;
                if(res.statusCode === 0){
                    this.coinList =content || []
                    console.log(this.coinList)
                }
            })
        },
        getTableList(){
            const {coinName,typeValue,pageNo} =this
            const params={
                coinName,
                type:typeValue,
                pageNo,
                pageSize:10
            }

            userTradeLogList(params).then(res=>{
                const {content,statusCode,total} = res;
                if(res.statusCode === 0){
                    this.coinList =content || []
                    this.total = total
                }
            })

        },
        changePage(val){
            this.pageNo = val
            this.getTableList()
        }
        

    }
}
</script>

<style>

</style>