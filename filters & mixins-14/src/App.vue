<template lang="pug">
  #app
    .container
      .row
        .col-md-8.col-md-offset-2
          img( src="./assets/logo.png" )
          appFilters
          appMixins
</template>

<script>
  import Filters from './components/filters'
  import Mixins from './components/mixins'

  export default {
    name: 'app',
    components: {
      appFilters: Filters,
      appMixins: Mixins
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .page-header {
    text-transform: uppercase;
    color: forestgreen;
  }
</style>
