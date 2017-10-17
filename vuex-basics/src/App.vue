<template lang="pug">
  #app.container
    .row
      .col-md-6
        app-primo
      .col-md-6
        app-secondo
</template>

<script>
  import Primo from './components/primo.vue'
  import Secondo from './components/secondo.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo,
      appSecondo: Secondo
    },
    methods: {
      ...mapActions({
        initUsers: 'setUsers'
      })
    },
    created () {
      this.initUsers()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
