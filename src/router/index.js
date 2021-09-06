import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Vacation from '@/components/vacation/vacation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vacation/:id',
    name: 'Vacation',
    component: Vacation,
  }
]

const router = new VueRouter({
  routes
})

export default router
