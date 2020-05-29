<template>
  <div class="layout">
      <div class="userContent">
        <!-- <transition name="fade"> -->
            <router-view></router-view>
        <!-- </transition> -->
      </div>
  </div>
</template>

<script>
export default {
    name:'layout'
}
</script>

<style lang="scss" scoped>
    .layout{
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 0;
        overflow: auto;
        background: #19398A;
        background-image: url('./../../../public/img/tixonexImages/img.png');
        background-size:cover;
        .userContent{
            width: 480px;
            height: auto;
            border-radius:10px;
            background: #fff;
            padding: 30px;
            // position:absolute;left: 50%;top: 50%;transform:translate(-50%,-50%);
            margin: 100px auto 60px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>>
