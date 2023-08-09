<template>
  <div class="hello">
    v1
    {{ storedata }}
    <button @click="btnClickDate">a传值</button>

    <h3>mapState获取数据： {{ maptest1 }}, {{ number }}}</h3>

    <button @click="btnClickMuti">mutations改变number值</button>
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
    },
    btnClickMuti(){
      this.$store.commit("setTest")
    }
  },
  computed: {
    ...mapState(['maptest1','number'])
  }
}
</script>

<style scoped>

</style>
