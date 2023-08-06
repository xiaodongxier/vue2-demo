<template>
  <div class="hello">
    v2
    {{ v1data }}
    <!-- <p>store数据： {{ store.state.test }}}</p> -->
    <!-- <p>store数据： {{ store.state.test }}}</p> -->
    {{ storedata() }}
    <button @click="btnClickUpStore">更新store值</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    v1data: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    btnClickUpStore(){
      this.storedata = '2222'
    },
    storedata(){
      return this.$store.state.test
    }
  },
  
}
</script>

<style scoped>

</style>
