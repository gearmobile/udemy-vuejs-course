// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
