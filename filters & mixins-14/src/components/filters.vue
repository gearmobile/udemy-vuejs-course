<template lang="pug">
  .filters
    h2.page-header {{ title }}
    p {{ msg | onUpperCase | onLowercase }}
    hr
    input.form-control( type="text" v-model="value" ) 
    ul.list-unstyled.filters-list
      li.filters-list__item( v-for="item in filteredValue" ) {{ item | onUpperCase }}
</template>

<script>
  import mixinOne from '../mixinOne'

  export default {
    name: 'filters',
    mixins: [mixinOne],
    data () {
      return {
        msg: 'welcome to your vue app',
        title: 'filters chapter'
      }
    },
    filters: {
      onUpperCase (value) { // filter always get value
        return value.toUpperCase() // filters always return value
      }
    },
    created () {
      console.log('Filter Instance Hook Created')
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
