<template lang="pug">
  .container
    .row
      .col-md-8.col-md-offset-2
        h3.page-header
          | radiobox binding
        <label class="radio-inline">
          <input type="radio" name="valueUno" id="valueUno" value="valueUno" v-model="radioboxValue"> valueUno
        </label>
        <label class="radio-inline">
          <input type="radio" name="valueDuo" id="valueDuo" value="valueDuo" v-model="radioboxValue"> valueDuo
        </label>
        <label class="radio-inline">
          <input type="radio" name="valueTre" id="valueTre" value="valueTre" v-model="radioboxValue"> valueTre
        </label>
        hr 
        p {{ radioboxValue }}
</template>

<script>
  export default {
    name: 'radiobox',
    data () {
      return {
        radioboxValue: 'valueUno'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-unstyled li {
    display: inline-block;
  }
</style>
