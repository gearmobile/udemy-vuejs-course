<template lang="pug">
  #tetro.tetro
    .message.is-warning
      .message-header
        h1.title.is-5.has-text-centered.tetro__title {{ title }}
      .message-body
        p {{ text }}
        .nav
          .nav-center
            router-link.nav-item( to="/third", tag="a" ) page one
            router-link.nav-item( to="/third/1", tag="a" ) page two
            router-link.nav-item( to="/third/2/3", tag="a" ) page three
        router-view
</template>

<script>
  export default {
    name: 'tetro',
    data () {
      return {
        title: 'component tetro',
        text: 'content of component tetro'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tetro {

    &__title {
      color: white;
      text-transform: capitalize;
    }
  }
</style>
