<template>
  <div class="bg">
    <div class="layui-container">
      <div class="bar">
        <router-link to="/MyBalance/MyBalance-container/MyAssets">我的资产</router-link>
          <i class="el-icon-arrow-right"></i>
        <span>提币地址管理</span>
      </div>
      <div class="addAddress">
          <el-form ref="form" :rules="rules" :model="form" label-width="auto">
            <div class="layui-row">
              <div class="layui-col-md2 layui-col-xs4">
                
                <div class="name">币种名称</div>
                <el-form-item prop="coinname">
                    <el-select style="width:90px" class="coinWrap" v-model="form.coinname" placeholder="请选择">
                      <el-option
                      v-for="item in coinList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name" 
                      />
                  </el-select>
                </el-form-item>
                

              </div>
              <div class="layui-col-md5 layui-col-xs4" style="padding-right:10px">
                <div class="name">提币地址</div>
                <el-form-item prop="addr">
                  <el-input v-model="form.addr" />
                </el-form-item>

              </div>
              <div class="layui-col-md5 layui-col-xs4">
                <div class="name">标识</div>
                <el-form-item prop="name">
                  <el-input v-model="form.name" />
                </el-form-item>
                
              </div>
            </div>

            <div class="addbtn">
              <span @click="onSubmit">添加新地址</span>
            </div>
          </el-form>

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
            <template slot-scope="{row}">
                <div v-if="row.isEdit" class="editBtn">
                  <el-select style="width:90px" class="coinWrap" v-model="row.coinName" placeholder="请选择">
                      <el-option
                      v-for="item in coinList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name" 
                      />
                  </el-select>
                </div>
                <div v-else class="editBtn">
                  {{row.coinName}}
                </div>
                
              </template>
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
                  <span @click="save(row)" style="color:#2E54EB">保存</span>
                  <span @click="clickEdit(row,false)" style="color:#2E54EB">取消</span>
                </div>
                <div v-else class="editBtn">
                  <span @click="clickEdit(row,true)">编辑</span>
                  <span @click="clickDelete(row)">删除</span>
                </div>
                
              </template>
            </el-table-column>
          </el-table>
      </div>
      <AskModal :visible="visible" @close="close" @confirm="deleteFun" :title="$t('MyBalance.scdz')"  />
    </div>
  </div>
</template>

<script>
import { MathRandom, isEmpty } from '@/utils/auth';
import AskModal from '@/components/AskModal';
import {walletCoins,addAddress,updateAddress,deleteAddress,addressList} from '@/api/withdrawalAddress';
let currentObject = {}
export default {
  name:'WithdrawalAddress',
  data () {
    return {
      tableData:[],
      form:{
        coinname:'',
        name:'',
        addr:'' 
      },
      rules:{
          coinname:[
              { required: true, message: '请选择币种', trigger: 'change' }
          ],
          name: [
              { required: true, message: '请输入备注', trigger: 'blur' }
          ],
          addr: [
              { required: true, message: '请输入提币地址', trigger: 'blur' }
          ]
      },
      id:'',
      currentObj:{},
      coinList:[],
      visible:false
    }
  },
  components:{
    AskModal
  },
  mounted(){
    this.getCoinList()
    this.getAddressList()
  },
  methods:{
    getCoinList(){
      walletCoins().then(res=>{
        const {content,statusCode} = res;
        if(res.statusCode === 0){
          this.coinList =content || []
        }
      })
    },
    getAddressList(){
      addressList({pageNo:1,pageSize:50}).then(res=>{
        const {content,statusCode} = res;
        if(res.statusCode === 0){
          content.forEach(item=>{
            item.isEdit = false
          })
          this.tableData =content || []
        }
      })
    },
    clickDelete(row){
      this.id = row.id;
      this.visible =true
    },
    deleteFun(){
      deleteAddress({id:this.id}).then(res=>{
        const {statusCode} = res;
        if(res.statusCode === 0){
          this.$message({
              type:'success',
              message:'删除成功'
          })
          this.getAddressList()
          this.visible =false
        }

      })
    },
    save(row){
      const {coinName,address,name,id} = row
      console.log()
      if(isEmpty(coinName) && isEmpty(address) && isEmpty(name)){
        const params={
          addr:address,
          coinname:coinName,
          id,
          name 
        }
        updateAddress(params).then(res=>{
            if(res.statusCode === 0){
              this.$message({
                  type:'success',
                  message:'修改成功'
              })
              this.getAddressList()
            }
        })

      }else{
        this.$message({
            type:'error',
            message:'必填项不能为空'
        })
      }
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
          if (valid) {
              console.log(this.form)
              const submitData={
                  ...this.form,
                  bankType:0,
                  name:this.$store.state.user.userInfo.realName,
                  legalName:'CNY'
              }
              addAddress(this.form).then(res=>{
                console.log(res)
                if(res.statusCode === 0){
                      this.$message({
                          type:'success',
                          message:'添加成功'
                      })
                      this.getAddressList()
                  }
              })


          }else {
              console.log('error submit!!');
              return false;
          }
      })
    },
    clickEdit(row,type){
      if(type){
        this.currentObj = row
        currentObject = {...row}
      }
      this.tableData.forEach(item=>{
        if(item.id === row.id){
          if(!type){
            const {coinName,name,addr} = currentObject;
            item.coinName =coinName
            item.name =name
            item.addr =addr
          }
          item.isEdit =type
        }
      })

      console.log(this.tableData)

    },
    close(){
      this.visible=false
    }
  }
}
</script>



<style lang='scss' scoped>
  .bg{
    background: $bgColor;
    padding:50px 0 60px 0;
  }
  .bar{
    background: #fff;
    padding: 20px 0 20px 20px;
    margin-bottom:27px;
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

<style scoped>
  .coinWrap /deep/ .el-select-dropdown__item{
    color: #606266;
    font-weight: 400;
  }
</style>