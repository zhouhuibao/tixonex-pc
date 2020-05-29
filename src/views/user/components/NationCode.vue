<template>
    <ul class="nationBox" v-if="visible"> 
        <li class="china" @click="clickData({code:86})">
            <img src="./../../../../public/img/tixonexImages/Bitmap.png" alt="">
            <span>China</span>
            <span>(中国)</span>
            <span>+86</span>
        </li>
        <li v-for="item in codeList" :key="item.id" @click="clickData(item)">
            <img src="./../../../../public/img/tixonexImages/Bitmap.png" alt="">
            <span>{{item.nationalName}}</span>
            <span>({{item.chineseName}})</span>
            <span>+{{item.code}}</span>
        </li>
    </ul>
</template>

<script>
import {nationalCode} from '@/api/user'
import { MathRandom } from '@/utils/auth'
    export default {
    name:'NationCode',
    data () {
        return {
            codeList:[]
        }
    },
    props:{
        visible:{
            type:Boolean,
            default:false
        } 
    },
    mounted(){
        window.addEventListener("click", this.bodyClick, true);
        this.getNationalCode()
    },
    methods:{
      getNationalCode(){
        nationalCode().then(res=>{
            this.codeList = res.content || []
        })
      },
      clickData(record){
            this.$emit('close')
            this.$emit('changeCode',record)
      },
      bodyClick(e){
          const box = document.querySelector('.nationBox')
          if(box){
            if(!box.contains(event.target)){            //这句是说如果我们点击到了盒子以外的区域
                this.$emit('close')
            }
        }
      }
    },
    destroyed() {
        window.removeEventListener("click", this.bodyClick, true);
    },
}
</script>

<style lang='scss' scoped>
    ul{
        width: 100%;
        border: 1px solid #ccc;
        background: $fff;
        height: 200px;
        overflow-y: auto;
        li{
            padding: 5px 10px;
            &:hover{
                background-color:rgba($color: #000000, $alpha: .05) ;
                cursor: pointer;
            }
            span{
                margin-left: 5px;
                &:last-child{
                    color: #999;
                }
            }
        }
        .china{
            border-bottom: 1px solid #ccc;
            margin-bottom: 5px;
            padding: 10px;
        }
    }
</style>
