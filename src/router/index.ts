import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isSearch: true
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Resume.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/views/Article.vue'),
    meta:{
      isSearch: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/webnav',
    name: 'WebNav',
    component: () => import('@/views/WebNav.vue')
  },
  {
    path: '/resume2',
    name: 'Resume2',
    component: () => import('@/views/Resume2.vue')
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})
router.afterEach((to: any, from) => {
  window.scrollTo(0,0);
})

export default router
