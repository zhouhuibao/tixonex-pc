import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css';
import '@/style/element-var.scss';
import '@/style/index.scss'
import '@/permission' // permission control
import i18n from './i18n/i18n'

import App from './App.vue'
import router from './router'
import store from './store'

const bitsharesjs = require('bitsharesjs')

const {PrivateKey,key} = bitsharesjs
let seed = "THIS IS A TERRIBLE BRAINKEY SEED WORD SEQUENCE";
let pkey = PrivateKey.fromSeed( key.normalize_brainKey(seed) );

console.log("Private key:", pkey.toWif());
console.log("Public key :", pkey.toPublicKey().toString());

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
