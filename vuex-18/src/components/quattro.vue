<template lang="pug">
  .message.is-info
    .message-header
      h1.title.is-5.has-text-centered {{ title }}
    .message-body
      .field
        p.control
          input.input.is-danger.is-medium( type="text", placeholder="Enter value here ...", v-model="value" )
    .message-body
      p.is-large {{ value }}
</template>

<script>
  import * as types from '../store/type.js'
  
  export default {
    name: 'quattro',
    data () {
      return {
        title: 'Vuex - v-model binding - Module Input'
      }
    },
    computed: {
      value: {
        get () {
          return this.$store.getters[types.GETTER_INPUT]
        },
        set (value) {
          this.$store.dispatch(types.ACTION_INPUT, value)
        }
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
