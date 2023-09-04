<template>
  <div class="hello">
   <h1>首页</h1>
   <br>
    <router-link to="/PageOne/111">PageOne</router-link> |
    <router-link :to="{name: 'PageOne'}">PageOne - name</router-link> |

    <router-link :to="{name: 'PageOne', params: {id1: 123,age: 18}}">PageOne - name + params</router-link> |
    <router-link :to="{name: 'PageOne', query: {id: 456, age: 28}}">PageOne - name + query</router-link> ｜

    <router-link :to="{path: 'PageOne', params: {id1: 123,age: 18}}">PageOne - path + params</router-link> |
    <router-link :to="{path: 'PageOne', query: {id: 456, age: 28}}">PageOne - path + query</router-link> ｜
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
