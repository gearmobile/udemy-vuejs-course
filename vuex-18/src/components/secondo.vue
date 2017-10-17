<template lang="pug">
  .message.is-danger
    .message-header
      h2.title.is-5.has-text-centered {{ title }}
    .message-body
      p.title.is-5 {{ state }}
      .notification.is-primary
        .field.is-grouped
          .control
            a.button.is-outlined( @click="up(2)" ) to large by 2
          .control
            a.button.is-outlined( @click="down(4)" ) to small by 4
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../store/type.js'

  export default {
    name: 'secondo',
    data () {
      return {
        title: 'Vuex - Complex Start - Module Step'
      }
    },
    computed: {
      ...mapGetters({
        state: types.GETTER_STEP
      })
    },
    methods: {
      ...mapActions({
        up: types.ACTION_STEP_LARGE,
        down: types.ACTION_STEP_SMALL
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
