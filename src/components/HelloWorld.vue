<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <list title="传递文字" url="https://www.baidu.com"></list>
  </div>
</template>

<script>
import  List from './list.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    List
  }
}
</script>

<style scoped>

</style>
