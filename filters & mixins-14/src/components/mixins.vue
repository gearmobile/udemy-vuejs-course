<template lang="pug">
  .filters
    h2.page-header {{ title }}
    input.form-control( type="text" v-model="value" ) 
    ul.list-unstyled.filters-list
      li.filters-list__item( v-for="item in filteredValue" ) {{ item | onLowercase }}
</template>

<script>
  import mixinOne from '../mixinOne'

  export default {
    name: 'filters',
    mixins: [mixinOne],
    data () {
      return {
        title: 'mixins chapter'
      }
    },
    created () {
      console.log('Mixin Instance Hook Created')
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .filters-list {
    margin-top: 30px;
  }
  .filters-list__item {
    display: inline;
    margin: 0 10px;
  }
</style>

