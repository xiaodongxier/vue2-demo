<template>
  <div>
    <h1>PageOne</h1>
    <router-link to="/">首页</router-link>
  </div>
</template>
<script>
export default {
  name: 'PageOne',
  data() {
    return {

    }
  },
  mounted(){
    console.log("this.$route", this.$route)
    console.log("this.$route.params", this.$route.params)
    console.log("this.$route.query", this.$route.query)
  }
}
</script>
<style lang="" scoped>
  
</style>