<template lang="pug">
  #app
    .container
      .row
        .col-md-8.col-md-offset-2
          img( src="./assets/logo.png" )
          appAxios
</template>

<script>
  import Axios from './components/axios'

  export default {
    name: 'app',
    components: {
      appAxios: Axios
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
