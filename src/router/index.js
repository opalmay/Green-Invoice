import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.cmp.vue'
import userWelcome from '../views/user-welcome.cmp.vue'
import userInfo from '../views/user-info.cmp.vue'
import store from '../store/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: login,
  },
  {
    path: '/user',
    redirect: '/user/welcome'
  },
  {
    path: '/user/welcome',
    component: userWelcome,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/info',
    component: userInfo,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({ routes });

router.beforeEach((to, _from, next) => {
  const user = store.getters.loggedInUser;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) next('/login');
  } else if (to.matched.some(record => record.name === 'login')) {
    if (user) next('/user/welcome');
  }
  next();
});

export default router
