<template>
  <div id="app">
    路由匹配
    <home-nav></home-nav>
    <router-view/>
  </div>
</template>

<script>
import HomeNav from './pages/home.vue'
export default {
  name: 'App',
  components: {
    HomeNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
