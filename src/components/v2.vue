<template>
  <div>
    <h1>v2</h1>
    <div>
      {{ content }}
    </div>
    <div>
      v1内容: {{ v1data }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    v1data: {
      type: String,
      default: "默认值"
    }
  },
  data() {
    return {
      content: "v2内容",
    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>