<template>
  <div class="hello">
    <h1>vuex- v1传给父 - 父传给v2 - 完成v1到v2兄弟组件的传值</h1>
    <div>父v1值：{{ v1msg }}</div>
    <hr>
    <v1 @onV1msg="v1msgClick"></v1>
    <hr>
    <v2 :v1data="v1msg"></v2>
  </div>
</template>

<script>
import v1 from './v1.vue'
import v2 from './v2.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      v1msg: ''
    }
  },
  components: {
    v1,
    v2
  },
  methods: {
    v1msgClick(content){
      this.v1msg = content
    }
  }
}
</script>

<style scoped>

</style>

