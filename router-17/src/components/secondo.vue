<template lang="pug">
  #secondo.secondo
    .message.is-info
      .message-header
        h1.title.is-5.has-text-centered.secondo__title {{ title }}
      .message-body
        p {{ text }}
        p current dynamic path of component secondo is : {{ $route.params.part }}
        .field
          a.button.is-primary( @click="onClick" ) go home
</template>

<script>
  export default {
    name: 'secondo',
    data () {
      return {
        title: 'component secondo',
        text: 'content of component secondo'
      }
    },
    methods: {
      onClick () {
        this.$router.push({ name: 'PagePrimo' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .secondo {

    &__title {
      color: white;
      text-transform: capitalize;
    }
  }
</style>
