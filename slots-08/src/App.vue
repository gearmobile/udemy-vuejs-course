<template>
  <div id="app">
    <primo>
      <h2 slot="uno">{{ quoteTitle }}</h2>
      <p slot="duo">{{ quoteContent }}</p>
    </primo>
    <div class="container controls">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="btn-group" role="group" aria-label="...">
            <button @click="currentView = 'Tetro'" type="button" class="btn btn-default">tetro</button>
            <button @click="currentView = 'Author'" type="button" class="btn btn-default">author</button>
            <button @click="currentView = 'New'" type="button" class="btn btn-default">new</button>
          </div>
          <div class="wrapper">
            <keep-alive>
              <component :is="currentView"></component>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Primo from './components/primo.vue'
  import Author from './components/author.vue'
  import New from './components/new.vue'
  import Tetro from './components/tetro.vue'

  export default {
    data () {
      return {
        quoteTitle: 'applet quote title',
        quoteContent: 'quote content here',
        currentView: 'Tetro'
      }
    },
    components: {
      Primo,
      Author,
      New,
      Tetro
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
  h2 {
    color: forestgreen;
  }
  .controls {
    margin-top: 20px;
  }
  .wrapper {
    border: 4px solid rgba( 0,0,0, .4 );
    padding: 40px 0;
    background-color: papayawhip;
    text-align: center;
    text-transform: capitalize;
    font-size: 30px;
    border-radius: 4px;
  }
  .btn-default {
    text-transform: capitalize;
  }
</style>
