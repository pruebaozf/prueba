import Vue from 'vue'
import Router from 'vue-router'
import Begin from '@/components/Begin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Begin',
      component: Begin
    }
  ]
})
