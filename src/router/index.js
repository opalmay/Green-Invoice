import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.cmp.vue'
import userWelcome from '../views/user-welcome.cmp.vue'
import userInfo from '../views/user-info.cmp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/user/welcome',
    component: userWelcome
  },
  {
    path: '/user/info',
    component: userInfo
  }
  // {
  //   path: '/user/welcome',
  //   component: userWelcome,
  // },
]

const router = new VueRouter({
  routes
})

export default router
