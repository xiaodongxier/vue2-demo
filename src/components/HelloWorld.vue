<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  async created() {
    
    // fetch("http://127.0.0.1:4523/m1/2751993-0-default/project/list")
    // .then(function (response) {
    //     // console.log("response.json()", response.json())
    //     return  response.json()
    // })
    // .then(function (json) {
    //   console.log("json", json)
    // })
    // .catch(function (err){
    //   // 错误信息，出现错误之后，后面的then不会在执行，catch抛出错误信息
    //   console.log("err", err)
    // })
    // .finally(function (other) {
    //   // Promise结束后调用，无论失败与否
    //   // 可以执行一些清理工作
    //   // - 比如加载动画
    //   console.log("other", other)
    // })

    // // 类似同步编程中的 try...catch...




    // async 标记为异步函数
    // 异步函数就是指返回值为 Promise 对象的函数
    async function test(){
      const response = await fetch('http://127.0.0.1:4523/m1/2751993-0-default/project/list');
      // response返回的已经书服务器的数据了
      console.log("response", response)
      const json = await response.json()
      console.log("json", json)
    }
    test() // 注：这个值返回值永远是 Promise 对象

    // await在等待的过程中js可以执行其他任务，这是因为 await 底层是基于 Promise 和事件循环机制实现的



    // 视频中案例
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then((response) => response. json())
    // .then((json)=> console. log(json));


    // setTimeout(() => {
    //   console.log("3秒后执行-1")
    //   setTimeout(() => {
    //     console.log("3秒里面的3秒执行-2")
    //     setTimeout(() => {
    //       console.log("3秒里面里面的3秒执行-3")
    //     }, 3000);
    //   }, 3000);
    // }, 3000);
    // console.log("3秒后面的consile")

  },
}
</script>

<style scoped>

</style>
