import Vue from 'vue'
import Home from './views/Home.vue'
import Memory from './views/Memory.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/memory',
      name: 'memory',
      component: Memory
    }
  ]
})
