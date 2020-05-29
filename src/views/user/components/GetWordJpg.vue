<template>
    <div class="codeWrap" @click="updateCode" title="看不清,换一张">
        <img :src="imgPath" alt="">
    </div>
</template>

<script>
import { MathRandom, isEmpty } from '@/utils/auth';
export default {
    name:'GetWordJpg',
    data () {
        return {
            imgPath:`http://192.168.0.109:8088/user/word.jpg?mobile=11223344&areaCode=${this.code}`
        }
    },
    props:['code','phone'],
    methods:{
        updateCode(){
            if(isEmpty(this.phone)){
                this.imgPath = `http://192.168.0.109:8088/user/word.jpg?mobile=${this.phone}&areaCode=${this.code}&time=${MathRandom()}`
            }else{
                this.$message({
                    type:'warning',
                    message:'手机号不能为空'
                })
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .codeWrap{
        cursor: pointer;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 48px;
            vertical-align:top;
        
        }
    }
</style>
