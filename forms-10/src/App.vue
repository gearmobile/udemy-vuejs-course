<template lang="pug">
  #app
    img( src="./assets/logo.png" )
    app-switch( v-model="dataSwitch" )
    hr
    p {{ dataSwitch }}
    appCheckboxes
    appRadioboxes
</template>

<script>
  import Switch from './components/switch.vue'
  import Checkboxes from './components/checkboxes.vue'
  import Radioboxes from './components/radioboxes.vue'

  export default {
    components: {
      appSwitch: Switch,
      appCheckboxes: Checkboxes,
      appRadioboxes: Radioboxes
    },
    data () {
      return {
        dataSwitch: true
      }
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
