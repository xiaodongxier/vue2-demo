<template>
  <div class="hello">
    v1
    {{ storedata }}
    <button @click="btnClickDate">a传值</button>

    <h3>mapState获取数据： {{ maptest1 }} , {{ test }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
  },
  computed: {
    ...mapState(['maptest1'])
  }
}
</script>

<style scoped>

</style>
