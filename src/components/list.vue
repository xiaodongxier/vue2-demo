<template>
  <div>
    <button>{{ title }}</button>
    <a :href="url" target="_blank">{{ title }} go</a>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    title: String,
    url: String
  },
  data() {
    return {
    }
  }
}
</script>
<style lang='' scoped>
  
  
  
  
</style>