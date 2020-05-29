<template>
    <div class="clearfix message tixonex-container">
        <div class="messageIcon">
            <img src="./../../public/img/tixonexImages/gonggao.png" alt="">
        </div>
        <div class="messageContent">
            <el-carousel height="60px" direction="vertical" :interval="2000">
                <el-carousel-item v-for="item in 3" :key="item">
                {{`TIXON交易所正式上线${item}`}}
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name:'Message'
}
</script>

<style lang="scss" scoped>
    .message{
        width: 100%;
        height: 60px;
        .messageIcon{
            float: left;
            text-align: center;
            padding-top: 10px;
            width: 60px;
        }
        .messageContent{
            padding-left: 60px;
            .el-carousel__item{
                text-align: left;
                line-height: 60px;
                color: #666666;
                font-size: 16px;
                padding-left: 80px;

            }
        }
        
    }
</style>>
