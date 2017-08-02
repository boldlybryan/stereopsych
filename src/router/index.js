import Vue from 'vue'
import VueRouter from 'vue-router'
import episode from '@/components/episode'
import about from '@/components/about'
import subscribe from '@/components/subscribe'
import contact from '@/components/contact'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/episodes'
    },
    {
      path: '/episodes',
      component: episode
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/subscribe',
      component: subscribe
    },
    {
      path: '/contact',
      component: contact
    }
  ]
})
