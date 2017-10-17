import Vue from 'vue'
import VueRouter from 'vue-router'

import Primo from '../components/primo.vue'
import Secondo from '../components/secondo.vue'
import Tetro from '../components/tetro.vue'

import One from '../components/pages/one.vue'
import Two from '../components/pages/two.vue'
import Three from '../components/pages/three.vue'

Vue.use(VueRouter)

const routes = [
  { path: '', component: Primo, name: 'PagePrimo' },
  { path: '/second/:part', component: Secondo, name: 'PageSecondo' },
  {
    path: '/third',
    component: Tetro,
    children: [
      { path: '', component: One, name: 'PageOne' },
      { path: ':id', component: Two, name: 'PageTwo' },
      { path: ':id/:level', component: Three, name: 'PageThree' }
    ] },
  { path: '/wrong', redirect: { name: 'PagePrimo' } },
  { path: '*', redirect: { name: 'PagePrimo' } }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  routes
})

export default router
