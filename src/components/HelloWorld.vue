<template>
  <div class="hello">
    {{ msg }}
    <hr>
    <v1 @onv1msgClick="v1msg"></v1>
    <hr>
    <v2 :v1data="v1data"></v2>
    <hr>
  </div>
</template>

<script>
import v1 from './v1'
import v2 from './v2'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      v1data: ''
    }
  },
  components: {
    v1,v2
  },
  methods: {
    v1msg(data){
      this.v1data = data
    }
  }
}
</script>

<style scoped>

</style>
