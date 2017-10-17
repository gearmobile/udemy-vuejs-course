<template lang="pug">
  .message.is-info
    .message-header
      h2.title.is-5.has-text-centered {{ title }}
    .message-body
      p.title.is-5 {{ state }}
      p.subtitle.is-6 {{ substate }}
    .notification.is-success
      .field
       .control
        a.button.is-danger( @click="decrease(config)" ) decrease with delay
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../store/type.js'

  export default {
    name: 'tetro',
    data () {
      return {
        title: 'Vuex - Async Example - Time Module',
        config: {
          count: 10,
          delay: 1000
        }
      }
    },
    computed: {
      ...mapGetters({
        state: types.GETTER_TIME
      }),
      substate () {
        return this.$store.state.timeModule.time + ' - custom computed property'
      }
    },
    methods: {
      ...mapActions({
        decrease: types.ACTION_TIME
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
