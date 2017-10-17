<template lang="pug">
  .dynamic-one
    .alert.alert-info {{ caption }}
</template>

<script>
  export default {
    name: 'dynamic-one',
    data () {
      return {
        caption: 'dynamic component one'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dynamic-one .alert {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 20px;
  }
</style>
