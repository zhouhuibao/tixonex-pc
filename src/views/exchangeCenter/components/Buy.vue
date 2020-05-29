<template>
  <div class="buyBox">
      <div class="title clearfix">
          <div v-for="(item,index) in titleList" :key="index" :class="`titleItem ${currentActive === index ? 'active' : ''}`" @click="changeTitle(index)">
                {{item}} 
                <div class="border" :style="`background:${currentActive === index ? viewBg :'#E9E9E9' }`"></div>
            </div>
      </div>
      <div class="content">
          <div class="kyong clearfix">
              <div class="pull-left">买入TSH</div>
              <div class="pull-right">可用：384792 USDT</div>
          </div>
            <el-form ref="form" :model="form" label-width="auto" label-position="left">
                <el-form-item label="价格 :">
                    <el-input v-model="form.name">
                        <template slot="append">USDT</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="数量 :">
                    <el-input v-model="form.name">
                        <template slot="append">TSH</template>
                    </el-input>
                </el-form-item>

                <div class="jye">交易额：0 USDT</div>
                
                <div class="step">
                    <div v-for="(item,index) in StepList" :key="index" :class="`stepItem ${ index <= currentStep ? 'active' : ''}`" >
                        <span class="stepTitle">{{item}}</span>
                        <div class="line" :style="`border-color:${getColor(index)}`"></div>
                        <div class="content" @click="changeStep(index)" :style="`border-color: ${ index <= currentStep ? viewBg : '#E9E9E9'}`"></div>
                        <div class="activeContent" @click="changeStep(index)" :style="`background: ${ index <= currentStep ? viewBg : '#E9E9E9'}`"></div>
                    </div>
                </div>

                <div class="btn" :style="`background:${viewBg}`">买入TSH</div>
            
            </el-form>
      </div>
  </div>
</template>

<script>
import Steps from './Step'
export default {
  name:'Buy',
  data () {
    return {
        form:{
            name:0
        },
        titleList:['限价','市价'],
        currentActive:1,
        currentStep:3,
        StepList:["0", "1/4", "1/2", "3/4", "全仓"]
    }
  },
  props:{
      viewBg:String
  },
  components:{
      Steps
  },
  methods:{
      changeTitle(index){
          this.currentActive = index
      },
      changeStep(index){
          this.currentStep = index
      },
      getColor(index){
        if(this.currentStep === 0){
            return '#E9E9E9'
        }

        if(this.currentStep>index){
            return this.viewBg
        }

        return '#E9E9E9'
          
      }
      
  }
}
</script>

<style lang='scss' scoped>
    .buyBox{
        border: 1px solid #ccc;
        background: $fff;
        height: 572px;
        .title{
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            padding-left: 35px;
            border-bottom:1px solid #ccc;
            .titleItem{
                float: left;
                margin-right: 70px;
                cursor: pointer;
                position: relative;
                
            }
            .active{
                .border{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    
                }
            }
        }
        .content{
            padding: 10px 30px 0;
            .kyong{
                font-size: 16px;
                margin-bottom: 50px;
            }
            .jye{
                height: 60px;
                font-size: 16px;
            }
            
        }
        .btn{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: $fff;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
</style>

<style lang="scss" scoped>
    .step{
        height: 100px;
        position: relative;
        .stepItem{
            position: absolute;
            width: 25%;
            &:nth-child(1){
                left: 0;
            }
            &:nth-child(2){
                left: 25%;
            }
            &:nth-child(3){
                left: 50%;
            }
            &:nth-child(4){
                left: 75%;
            }
            &:nth-child(5){
                right: 0;
                width: 0px;
                .content{
                    right: 0;
                }
                .stepTitle{
                    right: 0;
                    width: 30px;
                }
                .activeContent{
                    left: -22px;
                }

                
            }
            .content{
                box-sizing: border-box;
                width: 27px;
                height: 27px;
                border-radius: 100%;
                background: #E9E9E9;
                padding: 5px;
                position: absolute;
                top: 0;
                border: 2px solid #E9E9E9;
                cursor: pointer;
            }
            .line{
                width: 100%;
                border-top: 1px solid #E9E9E9;
                position: absolute;
                top: 13px;
                left: 0;
            }
            .stepTitle{
                position: absolute;
                top: 30px;
                display: block;
                width: 27px;
                text-align: center;
            }
        }

        .active{
           
            .content{
                background: #fff;
            }
            .activeContent{
                width: 17px;
                height: 17px;
                position: absolute;
                top: 5px;
                left: 5px;
                z-index: 111;
                border-radius: 100%;
                cursor: pointer;
            }

            
        }

    }
</style>


<style scoped>
    .buyBox /deep/ .el-input-group__append{
        padding: 0;
        width: 60px;
        text-align: center;
        background: #fff;
        border-left-color: #fff;
        color: #333;
    }
    .buyBox /deep/ .el-form-item{
        margin-bottom: 30px;
    }
    .buyBox /deep/ .el-form-item__label{
        color: #333;
    }
    .buyBox /deep/ .el-input__inner:focus{
        border-color: #DCDFE6;
    }
    .buyBox /deep/ .el-input__inner:hover{
        border-color: #DCDFE6;
    }
    .buyBox /deep/ .el-input-group--append .el-input__inner{
        border-right: 0;
        outline: none;
    }

    
</style>