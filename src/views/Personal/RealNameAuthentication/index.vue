<template>
  <div class="RealNameAuthentication">
      <div class="layui-container">
        <Breadcrumb :list="routerList" />
        <div class="realNameContainer">
            <div class="title">
                <img src="./../../../../public/img/tixonexImages/baozhang.png" alt="">
                填写身份信息
            </div>
            <div class="layui-row ">
                <div class="layui-col-md6 layui-col-md-offset3 layui-col-xs12">
                    <el-form ref="form" :model="form" label-width="auto">
                        <el-form-item label="真实姓名">
                            <el-input v-model="form.name" placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="证件类型">
                            <el-select v-model="form.region" placeholder="请选择证件类型" style="width:100%">
                            <el-option label="居民身份证" value="shanghai"></el-option>
                            <el-option label="护照" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="证件号码">
                            <el-input v-model="form.name" placeholder="请输入证件号码"></el-input>
                        </el-form-item>

                        <div class="line"></div>
                        <div class="tips clearfix">
                            <i class="el-message__icon el-icon-warning"></i>
                            <p>请上传身份证正面照，身份证反面照，手持身份证半身照，完善认证资料。1-3个工作日审核，仅支持 png、jpg格式，且单张大小不超过2M。</p>
                        </div>
                        <div class="layui-row layui-col-space5">
                            <div class="layui-col-xs4">
                                <div class="imgContent">
                                    <div class="imgWrapper">
                                        <img src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                    </div>
                                    <p>身份证正面</p>
                                </div>
                            </div>
                            <div class="layui-col-xs4 ">
                                <div class="imgContent zj">
                                    <div class="imgWrapper">
                                        <img src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                    </div>
                                    <p>身份证反面</p>
                                </div>
                            </div>
                            <div class="layui-col-xs4">
                                <div class="imgContent" style="float:right">
                                    <div class="imgWrapper">
                                        <img src="./../../../../public/img/tixonexImages/xiangji.png" alt="">
                                    </div>
                                    <p>手持身份证照片</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="btn">
                            <button class="defaultBtn" type="primary" @click="onSubmit">提交</button>
                        </div>


                        
                        </el-form>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name:'RealNameAuthentication',
    data () {
        return {
            routerList:[],
            form: {
                name: '',
            }      
        }
    },
    components:{
        Breadcrumb
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
    },
    methods:{
        setnavList(){
            const navList=[
                {
                    name:this.$t('Personal.zhzx'),
                    path:'/Personal/Personal-center'
                },
                {
                    name:this.$t('Personal.smrz'),
                }
            ]
            this.routerList = navList
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='less' scoped>
    .RealNameAuthentication{
        background: #fff;
        .realNameContainer{
            .title{
                text-align: center;
                color: #333333;
                font-size: 20px;
                padding: 60px 0;
            }
            .line{
                margin: 40px 0;
                border-bottom: 1px solid #CCCCCC;
                width: 100%;
            }
            .tips{
                font-size: 14px;
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
            .imgContent{
                width: 130px;
                max-width: 100%;
                text-align: center;
                margin:40px 0 30px;
                .imgWrapper{
                    width: 130px;
                    max-width: 100%;
                    height: auto;
                    line-height: 160px;
                    cursor: pointer;
                }
                p{
                    text-align: center;
                    color: #333333;
                    font-size: 14px;
                    margin-top: 20px;
                }
            }
            .zj{
                margin: 40px auto 30px;

            }
            .btn{
                text-align: center;
                margin:60px 0 140px 0;
            }
        }
    }
</style>