<template lang="pug">
  #app
    .columns
      .column.is-12
        .nav
          .nav-left
            router-link.nav-item( :to="{ path: '/' }", tag="a", exact ) primo
            router-link.nav-item( :to="{ path: '/second/part1' }", tag="a" ) secondo
            router-link.nav-item( :to="{ path: '/third' }", tag="a" ) tetro
        transition( name="slide", mode="out-in" )
          router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 60px 20px 0;

    & .slide-enter {
      //
    }
    & .slide-enter-active {
      animation: slideIn 1s ease-in-out forwards
    }
    & .slide-leave {
      opacity: 1;
      transform: translateX(0)
    }
    & .slide-leave-active {
      animation: slideOut 1s ease-in-out forwards;
      opacity: 0;
      transition: opacity 1s ease-out;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(-30px)
    }
  }
  @keyframes slideIn {
    from {
      transform: translateY(-30px)
    }
    to {
      transform: translateY(0)
    }
  }
</style>
