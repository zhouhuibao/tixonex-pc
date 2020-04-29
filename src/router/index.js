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
        name: '用户管理',
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
