import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
