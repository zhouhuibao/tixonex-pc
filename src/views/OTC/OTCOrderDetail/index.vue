<template>
  <div class="RealNameAuthentication">
    <Breadcrumb :list="routerList" style="background:#f8f3f2" />
      
      <div class="layui-container">
        <div class="realNameContainer">
            <div class="title">
                <i class="iconfont iconuser"></i>
                您向 13087889342 出售的39402.987 TSH
            </div>
            <div class="layui-row">
                <div class="layui-col-md8 layui-col-md-offset2 layui-col-xs12">
                    <div class="layui-row">
                        <div class="layui-col-xs6">
                            <div class="wrap">
                                <i class="iconfont iconqian"></i>
                                单价:
                                <span style="color: #E71717;">2.6CNY</span>
                            </div>
                            
                        </div>
                        <div class="layui-col-xs6">
                            <div class="wrap">
                                <i class="iconfont iconzhifubao" style="color:#1C61D4"></i>
                                支付宝
                            </div>
                            
                        </div>
                        <div class="layui-col-xs6">
                            <div class="wrap">
                                <i class="iconfont iconqian"></i>
                                总价:
                                <span style="color: #E71717;">2379.4932 CNY</span>
                            </div>
                        </div>
                        <div class="layui-col-xs6">
                            <div class="wrap">
                                刘亦菲
                                <span style="margin:0 10px">12345678@qq.com</span>
                                <i class="iconfont iconico" style="color: #C5CDF4;margin:0"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layui-col-md8 layui-col-md-offset2 layui-col-xs12">
                    <Cancel v-if="type === 'cancel'" />
                    <Appealing v-if="type === 'Appealing'" />
                    <Inpayment v-if="type === 'Inpayment'" />
                    <Done v-if="type === 'Done'" />
                    <Sell v-if="type === 'Sell'" />
                    <Buy v-if="type === 'Buy'" />
                  
                    
                </div>
                <div class="layui-col-md8 layui-col-md-offset2 layui-col-xs12 tipsFooter">
                    <p>1、您所出售的数字资产，已交由平台托管冻结。请在确定收到对方付款后，点击“确认放行”支付数字资产！</p>
                    <p>2、请不要相信任何催促放币的理由，确认收到款项后再是否数字资产，避免造成损失！</p>
                    <p>3、在收到账短信后，请务必登录网上银行或手机银行确认款项是否入账，避免因收到诈骗短信错误释放数字</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Cancel from './components/Cancel'
import Appealing from './components/Appealing'
import Inpayment from './components/Inpayment'
import Done from './components/Done'
import Sell from './components/Sell'
import Buy from './components/Buy'

export default {
    name:'OTCOrderDetail',
    data () {
        return {
            form: {
                name: '',
            },
            type:'Done'
        }
    },
    components:{
        Breadcrumb,
        Cancel,
        Appealing,
        Inpayment,
        Done,
        Sell,
        Buy
    },
    computed:{
        routerList(){
            const navList=[
                {
                    name:this.$t('OTC.gdlb'),
                    path:'/OTC/OTC-list'
                },
                {
                    name:this.$t('OTC.ddgl'),
                    path:'/OTC/OTC-order-list'
                },
                {
                    name:this.$t('OTC.dgxq'),
                }
            ]
            return navList
        }
    },
    methods:{
        
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='scss' scoped>
    .RealNameAuthentication{
        padding-bottom: 100px;
        .realNameContainer{
            .title{
                i{
                    font-size: 22px;
                    color: #279DEE;
                    margin-right: 5px;
                }
                text-align: center;
                color: #333333;
                font-size: 20px;
                padding: 60px 0 80px 0;
            }
            .wrap{
                font-size: 20px;
                color: #333333;
                margin-bottom: 50px;
                i{
                    font-size: 22px;
                    color: #F5A04C;
                    margin-right: 10px;
                }
            }
            .tipsFooter{
                margin-top: 80px;
                p{
                    color: #666;
                    font-size: 14px;
                    line-height: 30px;
                }
            }
            
        }
    }
</style>