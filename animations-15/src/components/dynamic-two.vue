<template lang="pug">
  .dynamic-two
    .alert.alert-info {{ caption }}
</template>

<script>
  export default {
    name: 'dynamic-two',
    data () {
      return {
        caption: 'dynamic component two'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dynamic-two .alert {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 20px;
  }
</style>
