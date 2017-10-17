<template lang="pug">
  .secondo
    h2.page-header.secondo__caption {{ caption }}
    button.btn.btn-primary( type="button" @click="onShow" ) {{ btnCaption }}
    .row
      transition( :css="false", @beforeEnter="beforeEnter", @enter="enter", @afterEnter="afterEnter", @enterCancelled="enterCancelled" @before-leave="beforeLeave", @leave="leave", @after-leave="afterLeave", @leave-cancelled="leaveCancelled" )
        .block( v-show="isShow" )
</template>

<script>
  import { TweenMax, Power2, Bounce } from 'gsap'
  
  export default {
    name: 'secondo',
    data () {
      return {
        caption: 'javascript animation vue',
        btnCaption: 'toggle block',
        isShow: true
      }
    },
    methods: {
      onShow () {
        this.isShow = !this.isShow
      },
      beforeEnter (el) {
        console.log('before enter hook')
      },
      enter (el, done) {
        TweenMax.to(el, 2, { width: '100%', autoAlpha: 1, ease: Bounce.easeOut, onComplete: done })
        console.log('enter hook')
      },
      afterEnter (el) {
        console.log('after enter hook')
      },
      beforeLeave (el) {
        console.log('before leave hook')
      },
      leave (el, done) {
        TweenMax.to(el, 2, { width: '0%', autoAlpha: 0, ease: Power2.easeOut, onComplete: done })
        console.log('leave hook')
      },
      afterLeave (el) {
        console.log('after leave hook')
      },
      enterCancelled (el) {
        console.log('enter cancelled hook')
      },
      leaveCancelled (el) {
        console.log('leave cancelled hook')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $width: 120px;
  .secondo__caption {
    color: forestgreen;
    text-transform: capitalize;
    font-size: 30px;
  }
  .block {
    width: $width;
    height: $width;
    border-radius: 10px;
    background-color: palegreen;
    border: 2px solid forestgreen;
    margin-top: 20px;
  }
  .btn {
    text-transform: capitalize;
  }
</style>
