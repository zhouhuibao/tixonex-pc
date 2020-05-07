import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  
    {
      path: '/',
      name: 'Home',
      components: {
        default:() => import('@/views/Home/index'),
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
      path: '/exchangeCenter',
      name: 'exchangeCenter',
      components: {
        default:() => import('@/views/exchangeCenter/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      }
    },
    {
      path: '/MyBalance',
      name: 'MyBalance',
      components: {
        default:() => import('@/views/MyBalance/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      }
    },
    {
      path: '/OTC',
      name: 'OTC',
      components: {
        default:() => import('@/views/OTC/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      }
    },
    {
      path: '/Personal',
      name: 'Personal',
      components: {
        default:() => import('@/views/Personal/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      }
    },
    {
      path: '/user',
      name: 'layout',
      components: {
        default:() => import('@/views/user/layout'),
        mainHead:() => import('@/components/mainHeader'),
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/user/login'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/user/register'),
        },
        {
          path: 'forgetPassWorld',
          name: 'forgetPassWorld',
          component: () => import('@/views/user/forgetPassWorld'),
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
      components: {
        default:() => import('@/views/404'),
      }
    },
    { path: '*', redirect: '/404' }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  linkActiveClass: 'myactive'
})

export default router
