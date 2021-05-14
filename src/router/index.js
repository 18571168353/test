import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login/login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    // 登录页路由
    path: '/login',
    name: 'login',
    // component: Login
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    // name: 'layout',
    // 首页路由
    component: () => import('@/views/Home')
  },
  {
    // 用户列表页路由
    path: '/userlist',
    name: 'userlist',
    component: () => import('@/views/Userlist/userlist')
  }
]

const router = new VueRouter({
  routes
})

export default router
