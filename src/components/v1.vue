<template>
  <div>
    <h1>v1</h1>
    <div>
      {{ content }}
      <button @click="handleBtnV1">给父亲值</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      content: "v1内容",
    }
  },
  methods: {
    handleBtnV1(){
      this.$emit("onV1msg", this.content)
    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>