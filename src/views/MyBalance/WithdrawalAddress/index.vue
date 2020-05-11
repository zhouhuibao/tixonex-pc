<template>
  <div class="layui-container">
    <div class="bar">
      <router-link to="/MyBalance/MyAssets">我的资产</router-link>
        <i class="el-icon-arrow-right"></i>
      <span>提币地址管理</span>
    </div>
    <div class="addAddress">
        <div class="layui-row">
          <div class="layui-col-md2 layui-col-xs4">
            <div class="name">币种名称</div>
            
            <el-select style="width:90px" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in 6"
                :key="item"
                :value="item">
                </el-option>
            </el-select>

          </div>
          <div class="layui-col-md5 layui-col-xs4" style="padding-right:10px">
            <div class="name">提币地址</div>
            
            <el-input />
          </div>
          <div class="layui-col-md5 layui-col-xs4">
            <div class="name">备注</div>
            
            <el-input />
          </div>
        </div>
        <div class="addbtn">
          <span>添加新地址</span>
        </div>
    </div>

    <div class="addressList">
        <div class="title">地址列表</div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="币种名称"
            align="center"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="钱包标识"
            align="center"
          >
          <template slot-scope="{row}">
              <div v-if="row.isEdit" class="editBtn">
                <el-input v-model="row.name" />
              </div>
              <div v-else class="editBtn">
                {{row.name}}
              </div>
              
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="钱包地址">
            <template slot-scope="{row}">
              <div v-if="row.isEdit" class="editBtn">
                <el-input v-model="row.address" />
              </div>
              <div v-else class="editBtn">
                {{row.address}}
              </div>
              
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="120"
            align="center"
          >
            <template slot-scope="{row}">
              <div v-if="row.isEdit" class="editBtn">
                <span>保存</span>
                <span @click="clickEdit(row,false)">取消</span>
              </div>
              <div v-else class="editBtn">
                <span @click="clickEdit(row,true)">编辑</span>
                <span @click="visible=true">删除</span>
              </div>
              
            </template>
          </el-table-column>
        </el-table>
    </div>
    <AskModal :visible="visible" @close="close" :title="$t('MyBalance.scdz')" />
  </div>
</template>

<script>
import { MathRandom } from '@/utils/auth';
import AskModal from '@/components/AskModal';
export default {
  name:'WithdrawalAddress',
  data () {
    return {
      value:'',
      tableData:[{}],
      currentObj:{},
      visible:false
    }
  },
  components:{
    AskModal
  },
  mounted(){
    const arr = [];
    for(let i=0;i<10;i+=1){
      const obj ={};
      obj.date = 'TSH';
      obj.name = '小张';
      obj.address = 'NDIEHSFINES;F;DSLFML';
      obj.id = MathRandom()
      obj.isEdit=false;
      arr.push(obj)
    }
    this.tableData = arr

  },
  methods:{
    clickEdit(row,type){
      if(type){
        this.currentObj = row
      }
      this.tableData.forEach(item=>{
        if(item.id === row.id){
          item.isEdit =type
        }
      })

      if(type){
        this.currentObj = row
      }
    },
    close(){
      this.visible=false
    }
  }
}
</script>

<style lang='less' scoped>
  .bar{
    background: #fff;
    padding: 20px 0 20px 20px;
    margin: 50px 0 27px 0;
      font-size: 20px;
      a{
        color: #999999;
      }
      span{
        color: #2E54EB;
      }
  }
  .addAddress{
    background: #fff;
    padding: 40px 30px 33px 20px;
    margin-bottom: 30px;
    .name{
      margin-bottom: 15px;
      color: #999999;
    }
    .addbtn{
      text-align: right;
      padding-top: 20px;
      span{
        color: #fff;
        background: #2E54EB;
        padding: 15px 45px;
        border-radius:4px;
        cursor: pointer;
        display: inline-block;
      }
      
    }
  }
  .addressList{
    background: #fff;
    font-size: 20px;
    color: #333;
    margin-bottom: 60px;
    padding-bottom: 100px;
    .title{
      padding: 20px 0 20px 20px;
    }
    .editBtn{
      span{
        color: #333333;
        margin-right: 30px;
        cursor: pointer;
        &:last-child{
          margin: 0;
        }
      }
    }
  }
</style>