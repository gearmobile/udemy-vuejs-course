<template lang="pug">
  #app
    .container
      QuoteProgress( :maxElements="maxQuotes", :elemens="quotesArray.length" )
      NewQuote
      QuoteGrid( :quotesList="quotesArray" )
      QuoteInfo
</template>

<script>
  import eventBus from './main.js'
  import NewQuote from './components/NewQuote.vue'
  import QuoteGrid from './components/QuoteGrid.vue'
  import QuoteInfo from './components/QuoteInfo.vue'
  import QuoteProgress from './components/QuoteProgress.vue'
  
  export default {
    data () {
      return {
        quotesArray: [
          'Just a Quote to see something'
        ],
        maxQuotes: 10
      }
    },
    components: {
      QuoteGrid,
      NewQuote,
      QuoteInfo,
      QuoteProgress
    },
    created () {
      eventBus.$on('addQuoteEvent', (data) => {
        if (this.quotesArray.length >= this.maxQuotes) {
          alert('Error')
          return
        } else {
          this.quotesArray.push(data)
        }
      })
      eventBus.$on('deleteQuote', (index) => {
        if (this.quotesArray.length > 1) {
          this.quotesArray.splice(index, 1)
        } else {
          alert('Do not delete last Quote!')
          return
        }
      })
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
