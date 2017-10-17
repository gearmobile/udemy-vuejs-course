// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('onLowercase', function (value) {
  return value.toLowerCase()
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
