<template lang="pug">
  .col-sm-6.col-md-4.col-lg-3
    .panel.panel-default
      .panel-body.quote
        slot
</template>

<script>
  export default {
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/quoteStyles.scss'
</style>
