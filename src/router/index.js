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
      redirect: '/MyBalance/MyBalance-container/MyAssets',
      components: {
        default:() => import('@/views/MyBalance/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      },
      children: [
        {
          path: 'MyBalance-container',
          name: 'MyBalanceContainer',
          component: () => import('@/views/MyBalance/Container'),
          children: [
            {
              
              path: 'MyAssets',
              name: 'MyAssets',
              component: () => import('@/views/MyBalance/MyAssets/index'),
            },
            {
              path: 'TradingAssets',
              name: 'TradingAssets',
              component: () => import('@/views/MyBalance/TradingAssets/index'),
            }
            
          ]
        },
        {
          path: 'withdrawal-address',
          name: 'WithdrawalAddress',
          component: () => import('@/views/MyBalance/WithdrawalAddress/index'),
        },
        {
          path: 'cb-histoty',
          name: 'CbHistory',
          component: () => import('@/views/MyBalance/CbHistory/index'),
        },
        {
          path: 'tb-histoty',
          name: 'TbHistory',
          component: () => import('@/views/MyBalance/TbHistory/index'),
        }
        
      ]
    },
    
    {
      path: '/Order-Manage',
      name: 'Order-Manage',
      components: {
        default:() => import('@/views/MyBalance/WithdrawalAddress/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      },
    },
    {
      path: '/OTC',
      name: 'OTC',
      redirect: '/OTC/OTC-list',
      components: {
        default:() => import('@/views/OTC/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      },
      children: [
        {
          path: 'OTC-list',
          name: 'OTCList',
          component: () => import('@/views/OTC/OTCList/index'),
        },
        {
          path: 'OTC-order-list',
          name: 'OTCOrderList',
          component: () => import('@/views/OTC/OrderList/index'),
        },
        {
          path: 'OTC-posters-list',
          name: 'OTCPostersList',
          component: () => import('@/views/OTC/PostersList/index'),
        },
        {
          path: 'OTC-order-detail',
          name: 'OTCOrderDetail',
          component: () => import('@/views/OTC/OTCOrderDetail/index'),
        },
      ]
      
    },
    {
      path: '/Personal',
      name: 'Personal',
      redirect: '/Personal/Personal-center',
      components: {
        default:() => import('@/views/Personal/index'),
        mainHead:() => import('@/components/mainHeader'),
        mainFooter:() => import('@/components/mainFooter')
      },
      children: [
        {
          path: 'Personal-center',
          name: 'PersonalCenter',
          component: () => import('@/views/Personal/PersonalCenter/index'),
        },
        {
          path: 'Real-Name-authentication',
          name: 'RealNameAuthentication',
          component: () => import('@/views/Personal/RealNameAuthentication/index'),
        },
        {
          path: 'google-verify',
          name: 'googleVerify',
          component: () => import('@/views/Personal/googleVerify/index'),
        },
        {
          path: 'pay-type',
          name: 'payType',
          component: () => import('@/views/Personal/payType/index'),
        },
        {
          path: 'login-log',
          name: 'LoginLog',
          component: () => import('@/views/Personal/LoginLog/index'),
        }
      ]
      

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
