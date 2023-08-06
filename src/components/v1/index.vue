<template>
  <div class="hello">
    v1
    {{ storedata }}
    <button @click="btnClickDate">a传值</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "v1 data",
      storedata: this.$store.state.test
    }
  },
  methods: {
    btnClickDate(){
      this.$emit("onv1msgClick",this.msg)
    }
  }
}
</script>

<style scoped>

</style>
