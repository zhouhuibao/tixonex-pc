<template>
    <div class="exchangeCenter">
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="4">
                <div class="jzczh">净资产折合：0.0</div>
                <div class="usdtTitle">USDT交易区</div>
                <div class="usdtContent">
                    <div class="contentTop">
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <div class="bizhong">
                                    <el-input
                                        size="mini"
                                        placeholder="币种"
                                        suffix-icon="el-icon-search"
                                        v-model="bizhong"
                                    >
                                    </el-input>
                                </div>
                                
                            </el-col>
                            <el-col :span="8">最新价</el-col>
                            <el-col :span="8">
                                <el-select v-model="value" placeholder="涨跌幅">
                                    <el-option
                                    v-for="item in 3"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                    
                </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="14" :xl="16">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name:'exchangeCenter',
    data () {
        return {
            bizhong:'',
            value:''
        }
    }
}
</script>

<style lang='less' scoped>

.borderBg{
    border: 1px solid #ccc;
    background: #fff;
}

@fontColor:#333;

.exchangeCenter{
    padding: 70px 90px;
    .jzczh{
        height: 70px;
        line-height: 70px;
        padding-left: 15px;
        color: @fontColor;
        font-size: 16px;
        .borderBg;
    }
    .usdtTitle{
        color: #3156EB;
        font-size: 14px;
        height: 72px;
        line-height: 72px;
    }
    .usdtContent{
        height: 580px;
        .borderBg;
        .contentTop{
            height: 77px;
            line-height: 77px;
            font-size: 14px;
            color:@fontColor ;
            text-align: center;
            .bizhong{
                .el-input{
                    padding: 0 5px;
                    
                }
            }
        }
        

    }
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>