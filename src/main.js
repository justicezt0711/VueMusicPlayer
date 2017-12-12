import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'

Vue.config.productionTip = false

// import VConsole from 'vconsole'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
	loading: require('common/image/default.png')
})

/* eslint-disable no-new */
// 调试用
// new VConsole()
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
