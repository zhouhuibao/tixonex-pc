<template>
  <div class="home">
    <router-link to="/about">about</router-link>
    <el-button @click="clickUser">用户管理</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    clickUser(){
      this.$router.push('/content')
    }
  }
}
</script>
