// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueBlu from 'vue-blu'
import '../node_modules/vue-blu/dist/css/vue-blu.min.css'
import router from './router/router'

Vue.config.productionTip = false

Vue.use(VueBlu)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
