<template lang="pug">
  #app
    .container
      .row
        .col-md-8.col-md-offset-2
          img.app__logo( src="./assets/logo.png", @click="newGame" )
          appHeader
          transition( :enter-active-class="enterClass", mode="out-in" )
            component( :is="currView" )
</template>

<script>
  import eventBus from './main.js'
  import Header from './components/header'
  import Question from './components/question'
  import Answer from './components/answer'

  export default {
    name: 'app',
    data () {
      return {
        currView: 'appQuestion',
        enterClass: 'animated flipInY'
      }
    },
    components: {
      appHeader: Header,
      appQuestion: Question,
      appAnswer: Answer
    },
    methods: {
      newGame () {
        if (this.currView === 'appAnswer') {
          this.currView = 'appQuestion'
        }
      }
    },
    created () {
      eventBus.$on('showAnswer', (data) => {
        data ? this.currView = 'appAnswer' : this.currView = 'appQuestion'
      })
      eventBus.$on('newGame', (data) => {
        this.currView = 'appQuestion'
      })
    }
  }
</script>

<style lang="scss">
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .app__logo {
    cursor: pointer;
    opacity: .6;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
    }
  }
</style>
