import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../home.vue')
  },
  {
    path:'/new-list',
    name:'new-list',
    component:() => import ('../client/home/new-list.vue')
  },
  {
    path:'/new-list-details/:newsid',
    name:'new-list-details',
    component:() =>import ('../client/details/news-details.vue')
  },
  {
    path:'/photo-list',
    name:'photo-list',
    component:() => import ('../client/home/photo-list.vue')
  },
  {
    path:'/goods-list',
    name:'goods-list',
    component:() => import ('../client/home/goods-list.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
