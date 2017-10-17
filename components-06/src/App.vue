<template>
  <div id="app">
    <app-header></app-header>
    <app-servers></app-servers>
    <app-server-details></app-server-details>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './components/header'
  import footer from './components/footer'
  import servers from './components/servers'
  import serverDetails from './components/serverDetails'

  export default {
    components: {
      appHeader: header,
      appFooter: footer,
      appServers: servers,
      appServerDetails: serverDetails
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
