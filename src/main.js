import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'assets/styles/reset.css'
import 'assets/styles/border.css'

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('assets/img/lazy.png'),
  error: require('assets/img/lazy.png')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
