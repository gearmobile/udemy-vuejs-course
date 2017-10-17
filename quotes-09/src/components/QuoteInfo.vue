<template lang="pug">
  .row
    .col-sm-12.text-center
      .alert.alert-info {{ infoText }}
</template>

<script>
  export default {
    data () {
      return {
        infoText: 'Info: Click on a Quote to delete it!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .alert {
    font-size: 20px;
    font-weight: 700;
  }
</style>
