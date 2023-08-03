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
      msg: '插槽'
    }
  },
  components: {
    List
  }
}
</script>

<style scoped>

</style>
