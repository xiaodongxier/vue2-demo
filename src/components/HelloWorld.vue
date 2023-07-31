<template>
  <div class="todo">
    <h2>todo</h2>
    <ol>
      <todo-item v-for="item in itemList" :key="item.id" :itemprop="item"></todo-item>
    </ol>
  </div>
</template>

<script>
import TodoItem from './demo/demo1-todoitem.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      itemList: [
        {
          id: '0',
          title: '事件1'
        },
        {
          id: '1',
          title: '事件2'
        },
        {
          id: '3',
          title: '事件3'
        },
        {
          id: '1',
          title: '事件3'
        }
      ]
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>

</style>


