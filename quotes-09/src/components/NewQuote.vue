<template lang="pug">
  .row
    form.form-group
      .col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
        label( for="quote" ) Quote
        textarea.form-control( id="quote" rows="4" v-model.trim="newQuote" @keyup.enter="addQuote" )
      .col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.form-group
        button.btn.btn-primary( type="button" @click.prevent="addQuote" ) add quote
</template>

<script>
  import eventBus from '../main.js'

  export default {
    data () {
      return {
        newQuote: ''
      }
    },
    methods: {
      addQuote () {
        eventBus.$emit('addQuoteEvent', this.newQuote)
        this.newQuote = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    text-transform: capitalize;
    font-size: 18px;
  }
</style>
