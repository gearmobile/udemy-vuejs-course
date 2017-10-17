<template lang="pug">
  #primo.primo
    .message.is-success
      .message-header
        h1.title.is-5.has-text-centered.primo__title {{ title }}
      .message-body
        p {{ text }}
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        title: 'component primo',
        text: 'content of component primo'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .primo {

    &__title {
      color: white;
      text-transform: capitalize;
    }
  }
</style>
