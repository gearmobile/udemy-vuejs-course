<template>
  <div id="app">
    <div class="container app-container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="page-header">communication components</h1>
          <p>{{ secondoProperty }}</p>
          <p>{{ parToTetroChild }}</p>
          <button @click="chgChild" type="button" class="btn btn-default app__button">change child property value</button>
        </div>
      </div>
    </div>
    <primo :uno="parentProp"></primo>
    <secondo @secondoToParent="secondoProperty = $event"></secondo>
    <tetro @fromTetro="parToTetroChild = $event" :tetroProp="parToTetroChild"></tetro>
  </div>
</template>

<script>
  import primo from './components/primo'
  import secondo from './components/secondo'
  import tetro from './components/tetro'

  export default {
    data () {
      return {
        parentProp: 'parent prop',
        secondoProperty: '',
        parToTetroChild: 'parent prop to tetro child'
      }
    },
    components: {
      primo,
      secondo,
      tetro
    },
    methods: {
      chgChild () {
        this.parentProp = 'changed from parent applet'
      }
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
  .app__row {
    margin-bottom: 20px;
  }
  .page-header {
    text-align: center;
    text-transform: capitalize;
  }
  .app__button {
    text-transform: capitalize;
  }
  .app-container {
    margin-bottom: 20px;
  }
</style>
