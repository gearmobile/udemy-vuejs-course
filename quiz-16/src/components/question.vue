<template lang="pug">
  .question
    .col-md-8.col-md-offset-2
      h3.question__title
        span What is a right answer for {{ numberOne }} + {{ numberTwo }}
      .question__body
        .row.question__field
          .col-md-8.col-md-offset-2
            button.btn.btn-primary.pull-left( type="button" @click="showAnswer(btnOneValue)", :value="btnOneValue", v-text="btnOneValue" )
            button.btn.btn-primary.pull-right( type="button" @click="showAnswer(btnTwoValue)", :value="btnTwoValue", v-text="btnTwoValue" )
        .row.question__field
          .col-md-8.col-md-offset-2
            button.btn.btn-primary.pull-left( type="button" @click="showAnswer(btnThreeValue)", :value="btnThreeValue", v-text="btnThreeValue" )
            button.btn.btn-primary.pull-right( type="button" @click="showAnswer(btnFourValue)", :value="btnFourValue", v-text="btnFourValue" )
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'question',
    data () {
      return {
        title: 'question title',
        answer: false,
        numberOne: null,
        numberTwo: null,
        maxValue: 100,
        minValue: 5
      }
    },
    computed: {
      rightAnswer () {
        return this.numberOne + this.numberTwo
      },
      btnOneValue () {
        return this.rightAnswer + this.genRandomValue(this.minValue)
      },
      btnTwoValue () {
        return this.rightAnswer - this.genRandomValue(this.minValue)
      },
      btnThreeValue () {
        return this.rightAnswer
      },
      btnFourValue () {
        return this.rightAnswer - this.genRandomValue(this.minValue)
      }
    },
    methods: {
      showAnswer (value) {
        if (value === this.rightAnswer) {
          this.answer = true
          eventBus.$emit('showAnswer', this.answer)
        } else {
          alert('Your answer is wrong!')
        }
      },
      genRandomValue (max) {
        return Math.floor(Math.random() * max) + 1
      }
    },
    created () {
      this.numberOne = this.genRandomValue(this.maxValue)
      this.numberTwo = this.genRandomValue(this.maxValue)
    }
  }
</script>

<style lang="scss" scoped>
  $radius: 6px;
  $color: rgba( 0,0,0, .2 );
  $width: 1px;
  $style: solid;

  .question {

    & .btn {
      font-weight: 700;
      font-size: 18px;
    }

    &__title {
      background-color: #eee;
      padding: 14px 20px;
      margin-bottom: 0;
      border-width: $width $width 0 $width;
      border-style: $style $style none $style;
      border-color: $color $color transparent $color;
      border-radius: $radius $radius 0 0;

      & span {
        text-transform: capitalize;
      }
    }
    
    &__body {
      border: $width $style $color;
      padding: 20px;
      border-radius: 0 0 $radius $radius;
    }
    
    &__field {
      margin-bottom: 30px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
