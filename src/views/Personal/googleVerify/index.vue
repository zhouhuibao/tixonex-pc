<template>
  <div class="RealNameAuthentication">
        <Breadcrumb :list="routerList" />
      <div class="layui-container">
        <div class="layui-row ">
            <div class="layui-col-md6 layui-col-md-offset3 layui-col-xs12">
                <div class="tips clearfix">
                    <i class="el-message__icon el-icon-warning"></i>
                    <p>谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。</p>
                </div>
                <div class="step">
                    <div class="title clearfix">
                        <div class="num">1</div>   
                        <div class="content">
                            <p>下载谷歌验证APP</p>                        
                            <p>iOS用户登录App Store搜索“Authenticator”下载。</p>
                            <p>安卓用户登录应用商店或使用手机浏览器搜索“谷歌验证器”下载。</p>
                        </div> 
                    </div>
                    <div class="btn">
                        <button class="defaultBtn"><i class="iconfont iconiphone" style="margin-right:5px"></i>Applestore</button>
                    </div>
                </div>
                <div class="step">
                    <div class="title clearfix">
                        <div class="num">2</div>   
                        <div class="content">
                            <p>在谷歌验证器中添加密钥并备份</p>                        
                            <p>打开谷歌验证器，扫描下方二维码或手动输入下述密钥添加验证令牌。</p>
                            <p>密钥用于手机更换或遗失时找回谷歌验证器，绑定前请务必将下述密钥备份保存。</p>
                            <div class="erCode">
                                <img src="./../../../../public/img/tixonexImages/code.png" alt="">
                                <div class="miyao">
                                    <div class="miyaoItem">密钥：ACB4G334ERBQI743</div>
                                    <div class="miyaoItem"><i class="iconfont iconfuzhi"></i> 复制密钥</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="step">
                    <div class="title clearfix">
                        <div class="num">2</div>   
                        <div class="content">
                            <p>输入谷歌验证器中6位验证码谷歌验证码</p>                        
                            <p>谷歌验证码</p>
                            <el-input v-model="code" />
                        </div> 
                    </div>
                    <div class="btn">
                        <button class="defaultBtn">绑定</button>
                    </div>
                    
                </div>

            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name:'googleVerify',
    data () {
        return {
            form: {
                name: '',
            },
            code:''      
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
                    name:this.$t('Personal.ggyzq'),
                }
            ]
            return navList
        }
    },
    components:{
        Breadcrumb
    },
    methods:{
        
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='less' scoped>
    .RealNameAuthentication{
        background: #fff;
        .tips{
            font-size: 14px;
            margin: 60px 0 40px 0;
            i{
                font-size: 16px;
                float: left;
                line-height: 20px;
                color: #FB8989;
            }
            p{
                margin-left: 20px;
                color: #999999;
            }
        }
        .step{
            padding: 45px 0 50px 0;
            border-bottom: 1px solid #CCCCCC;
            &:last-child{
                border: 0;
                padding-bottom: 80px;
            }
            .num{
                width: 32px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                border-radius: 100%;
                background: #DEEFFF;
                color: #2E54EB;
                font-size: 16px;
                float: left;
                
            }
            .content{
                margin-left: 50px;
                p{
                    color: #666666;
                    font-size: 16px;
                    margin-bottom: 10px;
                    &:nth-child(1){
                        color: #333333;
                        font-size: 18px;
                        line-height: 32px;
                        margin-bottom: 35px;
                    }
                   
                }
                .erCode{
                    border: 1px solid #BADEFF;
                    padding: 20px;
                    img{
                        width: 130px;
                        height: 130px;
                    }
                    .miyao{
                        margin-left: 40px;
                        display: inline-block;
                        vertical-align: top;
                        .miyaoItem{
                            font-size: 18px;
                            color: #333;
                            &:last-child{
                                color: #2E54EB;
                                margin-top: 30px;
                                font-size: 14px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
            .btn{text-align: center;margin-top: 30px;}
        }
    }
</style>