// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    let delay = 0
    if (binding.modifiers['delayed']) {
      delay = 5000
      setTimeout(function () {
        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value
          el.style.color = 'white'
          el.style.textAlign = 'left'
        } else {
          el.style.color = binding.value
          el.style.backgroundColor = 'palegreen'
          el.style.textAlign = 'right'
        }
      }, delay)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
