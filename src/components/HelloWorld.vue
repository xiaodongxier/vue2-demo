<!--
 * @Date: 2023-08-30 13:22:02
 * @LastEditTime: 2023-08-30 13:26:15
 * @Author: bytz_user
 * @Note:  
-->
<template>
  <div class="hello">
    {{ msg }}
    <button @clic="btnClick1">v1</button>
    <button @clic="btnClick2">v2</button>
  </div>
</template>

<script>
import v1 from './v1'
import v2 from './v2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    v1,v2
  },
  methods: {
    btnClick1() {
      this.$route.push({
        name: "v1"
      })
    },
    btnClick2() {
      this.$route.push({
        name: "v2"
      })
    }
  }
}
</script>

<style scoped>

</style>
