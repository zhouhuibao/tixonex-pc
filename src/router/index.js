import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  
    {
    path: '/',
    name: 'Home',
    components: {
      default:() => import('@/views/Home'),
      mainHead:() => import('@/components/mainHeader'),
      mainFooter:() => import('@/components/mainFooter')
    },
    children: [
      {
        path: 'content',
        name: 'content',
        component: () => import('@/views/Content'),
        meta: { title: '用户管理'}
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default:() => import('@/views/About'),
      mainHead:() => import('@/components/mainHeader'),
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  { path: '*', redirect: '/404' }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
