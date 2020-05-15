<template>
    <div class="bar">
        <div class="layui-container">
            <div class="BreadItem" v-for="(item,index) in list" :key="index" >
                <router-link v-if="index !== list.length-1" :to="item.path">{{item.name}}</router-link>
                <i v-if="index !== list.length-1" class="el-icon-arrow-right"></i>
                <span v-if="index === list.length-1">{{item.name}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:[],
            required:true
        }
    },
}
</script>

<style lang='scss' scoped>
    .bar{
        background:$bgColor;
        padding: 20px 0 20px 0;
        font-size: 20px;
        .BreadItem{
            display: inline-block;
        }
        a{
            color: #999999;
        }
        span{
            color: #2E54EB;
        }
  }
</style>