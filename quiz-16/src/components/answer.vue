<template lang="pug">
  .answer
    .col-md-8.col-md-offset-2
      .answer__body( @click="newGame" )
        h3.answer__title {{ msg }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'answer',
    data () {
      return {
        msg: 'right answer! click to next question',
        start: true
      }
    },
    methods: {
      newGame () {
        eventBus.$emit('newGame', this.start)
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .answer {

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: palegreen;
      border: 2px solid forestgreen;
      border-radius: 4px;
      height: 220px;
      cursor: pointer;
      transition: background-color .2s;

      &:hover {
        background-color: lighten(palegreen, 10%);
      }
    }

    &__title {
      text-transform: capitalize;
      color: forestgreen;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 30px;
    }
  }
</style>
