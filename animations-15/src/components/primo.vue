<template lang="pug">
  .primo
    h2.page-header.primo__title {{ msg }}
    button.btn.btn-primary.primo__button( @click="onAnmateUno" ) animate block uno
    button.btn.btn-primary.primo__button( @click="onAnmateDuo" ) animate block duo
    button.btn.btn-primary.primo__button( @click="onAnmateQuattro" ) animate block quattro
    select.form-control.primo__select( v-model="selectEffect" )
      option( value="fade" ) fade
      option( value="slide" ) slide
    .row.primo__selectable
      h2.page-header.primo__title {{ msg2 }}
      .col-md-6
        h3.primo__subtitle select enter class animation
        select.form-control( v-model="enterClass" )
          option( value="animated rotateIn" ) animated rotateIn
          option( value="animated zoomIn" ) animated zoomIn
          option( value="animated slideInLeft" ) animated slideInLeft
          option( value="animated fadeInRight" ) animated fadeInRight
      .col-md-6
        h3.primo__subtitle select leave class animation
        select.form-control( v-model="leaveClass" )
          option( value="animated rotateOut" ) animated rotateOut
          option( value="animated zoomOut" ) animated zoomOut
          option( value="animated slideOutLeft" ) animated slideOutLeft
          option( value="animated fadeOutRight" ) animated fadeOutRight
    transition( :name="selectEffect" )
      .alert.alert-info.primo__block( v-show="show" ) some animated block uno
    transition( name="slide" type="animation" )
      .alert.alert-success.primo__block( v-if="status" ) some animated block duo
    transition( name="fade" appear )
      .alert.alert-warning.primo__block( v-if="status" ) some animated block tre
    transition( :enter-active-class="enterClass", :leave-active-class="leaveClass" )
      .alert.alert-danger.primo__block( v-show="quattroState" ) some animated block quattro
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        msg: 'Animate Vue.js',
        msg2: 'Dynamycally change class animation',
        show: true,
        status: true,
        quattroState: true,
        selectEffect: 'fade',
        enterClass: 'animated rotateIn',
        leaveClass: 'animated rotateOut'
      }
    },
    methods: {
      onAnmateUno () {
        this.show = !this.show
      },
      onAnmateDuo () {
        this.status = !this.status
      },
      onAnmateQuattro () {
        this.quattroState = !this.quattroState
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
  .primo__title {
    font-size: 36px;
    color: forestgreen
  }
  .primo__button {
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    text-transform: capitalize;
    font-weight: 700;
  }
  .primo__block {
    text-transform: capitalize;
    font-size: 30px;
  }
  .primo__select {
    margin-bottom: 40px;
    text-transform: capitalize;
    cursor: pointer;
  }
  .primo__selectable {
    margin-bottom: 40px;
  }
  .primo__subtitle {
    text-transform: capitalize;
  }
  .fade-enter {
    opacity: 0
  }
  .fade-enter-active {
    transition: opacity 1s
  }
  .fade-leave {}
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slideIn 1s ease-out forwards;
    transition: opacity 3s;
  }
  .slide-leave {}
  .slide-leave-active {
    animation: slideOut 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
  }
  @keyframes slideIn {
    from {
      transform: translateY(30px)
    }
    to {
      transform: translateY(0)
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(30px)
    }
  }
</style>
