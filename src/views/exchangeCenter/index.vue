<template>
    <div class="exchangeCenter">
        <div class="infoBox clearfix">
            <div class="left">
                <div class="jzczh">净资产折合：0.0</div>
                <div class="l-title">USDT交易区</div>
                <div class="l-info">
                    <LeftJYQ />
                </div>
            </div>
            <div class="content">
                <div class="c-title">
                    <div class="clearfix zdf">
                        <p>TSH/USDT</p>
                        <p>0.38≈¥2.698</p>
                    </div>
                    <div class="clearfix sj">
                        <div class="layui-row">
                            <div class="layui-col-xs2">
                                <p><span>开</span>0.37</p>
                            </div>
                            <div class="layui-col-xs2">
                                <p><span>高</span>0.37</p>
                            </div>
                            <div class="layui-col-xs2">
                                <p><span>低</span>0.37</p>
                            </div>
                            <div class="layui-col-xs2">
                                <p><span>收</span>0.37</p>
                            </div>
                            <div class="layui-col-xs2">
                                <p><span>日成交量</span>2382937</p>
                            </div>
                            <div class="layui-col-xs2 zdfsj">
                                <p><span>涨跌幅</span>+1.14%</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="c-view">
                    1
                </div>
            </div>
            <div class="right">
                <TradeOrder />
            </div>
        </div>

        <div class="priceWrap clearfix">
            <div class="right">
                <CJTime />
            </div>
            <div class="left">
                <div class="clearfix">
                    <div class="box">
                        <Buy viewBg="#11BC70" />
                        
                    </div>
                    <div class="box">
                        <Buy viewBg="#E71717" />
                    </div>
                </div>
                
            </div>
            
        </div>

        <CurrentDelegation />
        <HistoryDelegation />




    </div>
</template>

<script>
import LeftJYQ from './components/LeftJYQ'
import TradeOrder from './components/TradeOrder'
import CJTime from './components/CJTime'
import Buy from './components/Buy'
import HistoryDelegation from './components/HistoryDelegation'
import CurrentDelegation from './components/CurrentDelegation'
export default {
    name:'exchangeCenter',
    data () {
        return {
            bizhong:'',
            value:''
        }
    },
    components:{
        LeftJYQ,
        TradeOrder,
        CJTime,
        Buy,
        HistoryDelegation,
        CurrentDelegation
    }
}
</script>

<style lang='scss' scoped>

@mixin borderBg() {
    // border: 1px solid $borderColor;
    border: 1px solid #ccc;
    background: $fff;
}

.exchangeCenter{
    padding: 90px 90px 70px 90px;
    background: $bgColor;
    margin: 0 auto;
    min-width: 1520px;
    .infoBox{
        width: 100%;
        position: relative;
        .left{
            position: absolute;
            top: 0;
            left: 0;
            width: 340px;
            .jzczh{
                font-size: 16px;
                @include borderBg();
                height: 70px;
                line-height: 70px;
                padding-left: 15px;
            }
            .l-title{
                color: #3156EB;
                height: 70px;
                line-height: 70px;
            }
            .l-info{
                @include borderBg();
                height: 580px;
                padding-top: 20px;

            }

        }
        .content{
            margin:0 350px 0 350px;
            .c-title{
                @include borderBg();
                height: 120px;
                margin-bottom: 20px;
                padding-left:20px;
                .zdf{
                    p{
                        color: $fontColor;
                        float: left;
                        font-size: 14px;
                        margin-top: 28px;
                        &:last-child{
                            color: $green;
                            margin: 22px 0 0px 50px;
                            font-size: 24px;font-weight: bold;
                        }
                    }

                }
                .sj{
                    margin-top: 20px;
                    p{
                        float: left;
                        >span{
                            &:first-child{
                                margin-right: 5px;
                            }
                        }
                    }
                    .zdfsj{
                        color:$green;
                    }
                }
            }
            .c-view{
                @include borderBg();
                height: 580px;
            }
        }
        .right{
            position: absolute;
            top: 0;
            right: 0;
            width: 340px;
            height: 720px;
            @include borderBg();
            background: #f8f8f8;
        }
    }
    .priceWrap{
        position: relative;
        margin-top: 20px;
        width: 100%;
        .left{
            margin-right: 350px;
            .box{
                float: left;
                width: 50%;
                &:first-child{
                    padding-right: 12px;
                }
                &:last-child{
                    padding-left: 12px;
                }
            }
        }
        .right{
            width: 340px;
            // position: absolute;
            // top: 0;
            // right: 0;
            float: right;
            @include borderBg();
        }
    }
    
}

</style>