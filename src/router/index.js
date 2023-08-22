import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloHome from '@/components/HelloHome'
import HelloList from '@/components/HelloList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloHome',
      component: HelloHome
    },
    {
      path: '/list/:id',
      name: 'HelloList',
      component: HelloList
    }
  ]
})
