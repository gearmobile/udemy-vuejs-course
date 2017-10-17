<template lang="pug">
  .container
    .row
      .col-md-8.col-md-offset-2
        h3.page-header
          | checkbox binding
        <label class="checkbox-inline">
          <input type="checkbox" id="valueUno" value="valueUno" v-model="checkboxValue"> valueUno
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" id="valueDuo" value="valueDuo" v-model="checkboxValue"> valueDuo
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" id="valueTre" value="valueTre" v-model="checkboxValue"> valueTre
        </label>
        hr
        ul.list-unstyled
          li( v-for="item in checkboxValue" ) {{ item }}
</template>

<script>
  export default {
    name: 'checkbox',
    data () {
      return {
        checkboxValue: []
      }
    }
  }
</script>
