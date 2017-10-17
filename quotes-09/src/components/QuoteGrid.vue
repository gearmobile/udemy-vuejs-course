<template lang="pug">
  .row
    app-quote( v-for="(quote, index) in quotesList", :key="quote.id", @click.native="removeQuote(index)" ) {{ quote }}
</template>

<script>
  import Quote from './Quote.vue'
  import eventBus from '../main.js'

  export default {
    props: ['quotesList'],
    components: {
      appQuote: Quote
    },
    methods: {
      removeQuote (index) {
        eventBus.$emit('deleteQuote', index)
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
