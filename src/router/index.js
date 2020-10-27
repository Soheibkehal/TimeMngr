import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/meteo',
    name: 'meteo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/Meteo.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/Logger.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/components/SignIn.vue')
  },
  {
    path: '/private',
    name: 'private',
    component: () => import('@/components/private.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
