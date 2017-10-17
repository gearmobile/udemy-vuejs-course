<template lang="pug">
  .dynamic
    h2.page-header.dynamic__caption {{ caption }}
    .btn-group( role="group" )
      button.btn.btn-default( type="button" @click="onShow('appOne')" ) appOne
      button.btn.btn-default( type="button" @click="onShow('appTwo')" ) appTwo
    transition( :enter-active-class="enterClass", :leave-active-class="leaveClass", mode="out-in" )
      component( :is="currView" )
</template>

<script>
  import dynOne from './dynamic-one.vue'
  import dynTwo from './dynamic-two.vue'
  export default {
    name: 'dynamic',
    data () {
      return {
        caption: 'dynamic component animation vue',
        currView: 'appOne',
        enterClass: 'animated fadeInUp',
        leaveClass: 'animated fadeOutDown'
      }
    },
    methods: {
      onShow (value) {
        this.currView = value
      }
    },
    components: {
      appOne: dynOne,
      appTwo: dynTwo
    }
  }
</script>

<style lang="scss" scoped>
  .dynamic {
    &__caption {
      text-transform: capitalize;
      color: forestgreen;
      font-weight: 700;
    }
  }
  .btn-group {
    margin-bottom: 20px;
  }
</style>
