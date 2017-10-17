<template lang="pug">
  .header
    h2.page-header.header__title {{ msg }}
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'quiz game'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header__title {
    font-weight: 400;
    text-transform: capitalize;
    color: forestgreen;
    font-size: 40px;
  }
</style>
