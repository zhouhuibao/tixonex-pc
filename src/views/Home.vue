<template>
  <div class="home">
    <router-link to="/about">about</router-link>
    <el-button @click="setVuex">设置vuex</el-button>
    <el-button @click="clickUser">用户管理</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
  user () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      test:'user/test'
    })
  },
  mounted(){
    console.log(this.$store.state.user.test)
    console.log(this.user)

},
  methods:{
    clickUser(){
      this.$router.push('/content')
    },
    setVuex(){
      this.$store.commit('user/setTest')
      console.log(this.$store.state.user.test)
    }
  }
}
</script>
