<template>
  <div id="app">
      <router-view name='mainHead'></router-view>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <router-view name='mainFooter'></router-view>
    
  </div>
</template>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #333;
    background: #fff;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
