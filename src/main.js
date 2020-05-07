import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import '@/style/index.less'
import i18n from './i18n/i18n'

import App from './App.vue'
import router from './router'
import store from './store'



Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
