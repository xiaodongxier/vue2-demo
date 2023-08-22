<template>
  <div>
    <ul>
      <li>
        <router-link to="/List/page1">page1</router-link>
        <router-link to="/List/page2">page2</router-link>
        <!-- <router-link to=$route.params.id>page1</router-link> -->
        <!-- <router-link to="/List/page2">page2</router-link> -->
      </li>
    </ul>
    <h1>
      List
      {{ $route.params.id }}
      <hr>
      <!-- <router-view></router-view> -->
    </h1>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {




    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>