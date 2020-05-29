import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style


//是否螺旋加载,就是右上角那个圈圈
NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 不登录可以进的页面
const whiteList = ['/','/exchangeCenter','/OTC/OTC-list','/user/register','/user/forgetPassWorld'] 

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // 确定用户是否已经登录
  const hasToken = store.state.user.token

  if (hasToken) {
    try {
      // get user info
      await store.dispatch('user/tokenValid')
      next()
    } catch (error) {
      // remove token and go to login page to re-login
      // await store.dispatch('user/resetToken')
      Message.error(error || 'Has Error')
      // next(`/user/login`)
      //防止页面死循环
      if (to.path === '/user/login') {
        next()
      } else {
        next(`/user/login`)
      }
      NProgress.done()
    }
  } else {
    /* has no token*/
  
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中，直接进入
      next()
    } else {
      // 没有访问权限的其他页将重定向到登录页。
      
      //防止页面死循环
      if (to.path === '/user/login') {
          next()
      } else {
        next(`/user/login`)
      }
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
