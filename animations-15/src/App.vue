<template lang="pug">
  #app
    .container
      .row
        .col-md-8.col-md-offset-2
          img( src="./assets/logo.png" )
          //- appPrimo
          //- appSecondo
          //- appDynamic
          appMultiple
</template>

<script>
  import Primo from './components/primo'
  import Secondo from './components/secondo.vue'
  import Dynamic from './components/dynamic.vue'
  import Multiple from './components/multiple.vue'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo,
      appSecondo: Secondo,
      appDynamic: Dynamic,
      appMultiple: Multiple
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
