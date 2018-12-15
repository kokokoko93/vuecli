import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test2', // url path 顯示
      name: 'Test2', // App.vue 裡面 router-link 使用的name
      component: HelloWorld2 // 所對應的檔案
    }
  ]
})
