<template>
  <div>
      <el-table
        :data="tableData"
        ref="refTable"
        style="width: 100%">
        <el-table-column
        prop="address1"
        label="币种"
        width="180">
        <template slot-scope="scope"> 
            {{scope.row.address1}}
        </template>
        </el-table-column>
        <el-table-column
        prop="address2"
        label="可用"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address3"
        label="冻结">
        </el-table-column>
        <el-table-column
        prop="address4"
        label="锁仓">
        </el-table-column>
        <el-table-column
        prop="address5"
        label="总计"
        >
        
        </el-table-column>
        <el-table-column
        prop="address"
        label="操作"
        width="200"
        align="center"
        >
        <template  slot-scope="scope">
            <div class="btnWrap">
                <span @click="clickButton(scope.row,'cb')">充币</span>
                <span @click="clickButton(scope.row,'tb')">提币</span>
                <span>交易</span>
            </div>
            
        </template>
        </el-table-column>
        <el-table-column type="expand" width="1">
        <template slot-scope="props">
            <div v-if="expandType === 'cb'" class="layui-row expandContent">
                    <i class="iconfont iconjiantou jiantou"></i>
                <div class="layui-col-xs8">
                    <div class="title">充币地址</div>
                    <div class="address">GSDU56q5w1as4asdqw4d <span><i class="iconfont iconfuzhi"></i>复制</span></div>
                    <div class="lock">查看<span  @click="goRouter('/MyBalance/cb-histoty')">充币记录</span>跟踪状态</div>
                </div>
                <div class="layui-col-xs4">
                    <div class="title">二维码</div>
                    <img src="./../../../../public/img/tixonexImages/code.png" alt=""  />
                </div>
            </div>
            <div v-else class="tbContent">
                <i class="iconfont iconjiantou jiantou"></i>
                
                <el-form ref="form" :model="form" label-width="auto">

                    <div class="title">提币地址</div>
                    <el-select style="width:100%" v-model="form.name" filterable placeholder="请选择或输入提币地址">
                        <el-option
                        v-for="item in 10"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>

                    <div class="title clearfix">
                        <div class="left">数量</div>
                        <div class="right">可用：<span>192739.3764</span>  限额：<span>100000</span></div>
                    </div>
                    <el-input v-model="form.name"><template slot="append">TSH</template></el-input>
                    
                    <!-- <div class="layui-row layui-col-space30">
                        <div class="layui-col-xs6">
                            <div class="title"></div>
                        </div>
                        <div class="layui-col-xs6"></div>
                    </div> -->
                    
                    <el-row>
                        <el-col :span="11">
                            <div class="title">
                                外部手续费
                            </div>
                            <el-input v-model="form.name" disabled><template slot="append">TSH</template></el-input>
                        </el-col>
                        <el-col :span="2"><div style="width:1px;height:1px"></div></el-col>
                        <el-col :span="11">
                            <div class="title">
                                到账数量
                            </div>
                            <el-input v-model="form.name" disabled><template slot="append">TSH</template></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="11">
                            <div class="title">
                                内部手续费
                            </div>
                            <el-input v-model="form.name" disabled><template slot="append">TSH</template></el-input>
                        </el-col>
                        <el-col :span="2"><div style="width:1px;height:1px"></div></el-col>
                        <el-col :span="11">
                            <div class="title">
                                到账数量
                            </div>
                            <el-input v-model="form.name" disabled><template slot="append">TSH</template></el-input>
                        </el-col>
                    </el-row>


                    
                    <div class="labelForm clearfix">
                        <el-col :span="15">

                            <el-form-item label="图形验证码" class="itemwrap">
                                <el-input v-model="form.name"></el-input>
                                <div class="box">2537</div>
                            </el-form-item>
                            <el-form-item label="验证码" class="itemwrap">
                                <el-input v-model="form.name"></el-input>
                                <div class="box border">发送验证码</div>
                            </el-form-item>
                            <el-form-item label="交易密码" class="itemwrap">
                                <el-input v-model="form.name"></el-input>
                                <div class="box wj"><span>忘记密码？</span></div>
                            </el-form-item>
                            <el-form-item label="备注" >
                                <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 4, maxRows: 10}"></el-input>
                            </el-form-item>
                            
                        </el-col>

                        
                    </div>
                    <div style="text-align:center">
                            <div class="defaultBtn">提币</div>
                            <p style="margin-top:10px">查看 <span @click="goRouter('/MyBalance/tb-histoty')" style="color:#2E54EB;cursor:pointer">提币记录</span> 跟踪状态</p>
                        </div>
                </el-form>
            </div>
        </template>
        </el-table-column>
        <template slot="empty">
            <TableEmpty></TableEmpty>
        </template>
    </el-table>
  </div>
</template>

<script>
import TableEmpty from '@/components/TableEmpty.vue'
import { MathRandom } from '@/utils/auth';
export default {
    name:'MyAssets',
    data () {
        return {
            tableData:[{}],
            expandType:'',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    components: {
      TableEmpty
    },
    mounted(){
      const arr = [];
      for(let i=0;i<10;i+=1){
        const obj ={};
        obj.address1 = 'TSH'+i;
        obj.address2 = '17368.389';
        obj.address3 = '0.000000';
        obj.address4 = '0.000000';
        obj.address5 = '836868.8675';
        obj.address6 = '183****1283';
        obj.id=MathRandom()
        arr.push(obj)
      }
      this.tableData = arr

    },
    methods:{
        clickButton(row,type){
            console.log(type)
            this.expandType = type
            this.tableData.map((item) => {
                this.$refs.refTable.toggleRowExpansion(item, false)
            })
            this.$refs.refTable.toggleRowExpansion(row)
        },
        goRouter(path){
            console.log(path)
            this.$router.push(path)
        },
        onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang='less' scoped>
    .btnWrap{
        span{
            color: #2E54EB;
            font-size: 16px;
            margin-right: 30px;
            cursor: pointer;
            &:last-child{
                margin: 0;
            }
        }
    }
    .expandContent{
        position: relative;
        .jiantou{
            position: absolute;
            top: -33px;
            right: 106px;
            background: #fff;
            color: #EBEEF5;
        }
        .title{
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
        }
        .address{
            font-size: 18px;
            color: #000;
            margin-bottom: 30px;
            span{
                margin-left: 20px;
                cursor: pointer;
                padding: 6px 10px;
                border: 1px solid #E2E8FF;
                color: #2E54EB;
                font-size: 16px;
                border-radius: 4px;
                i{
                    margin-right: 5px;
                }
            }
        }
        .lock{
            font-size: 16px;
            span{
                cursor: pointer;
                margin: 0 5px;
                color: #2E54EB;
            }
        }
        img{
            width: 100px;
            height: 100px;
        }
    }

    .tbContent{
        position: relative;
        .jiantou{
            position: absolute;
            top: -53px;
            right: 42px;
            background: #fff;
            color: #EBEEF5;
        }
        .title{
            color: #999999;
            font-size: 16px;
            margin: 20px 0 10px 0;
            .left{
                float: left;
            }
            .right{
                float: right;
                span{
                    color: #2E54EB;
                    &:first-child{
                        margin-right: 20px;
                    }
                }
            }
        }

        .labelForm{
            margin-top: 40px;
            .itemwrap{
                position: relative;
                .box{
                    position: absolute;
                    top: 0;
                    right: -170px;
                    width: 150px;
                    
                    cursor: pointer;
                }
                .border {
                    height: 38px;
                    text-align: center;
                    line-height: 38px;
                    border: 1px solid #2E54EB;
                    color: #2E54EB;
                }
                .wj{
                    &:hover{
                        color: #2E54EB;
                    }
                }
            }
        }
    }
</style>