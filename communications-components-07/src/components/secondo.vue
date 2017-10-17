<template>
  <div class="secondo">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h2>{{ caption }}</h2>
          <p class="title">{{ title }}</p>
          <p class="title">{{ fromTetro }}</p>
          <button @click="toParent" type="button" class="btn btn-primary secondo__button">push prop from child to parent</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../main'

  export default {
    data () {
      return {
        caption: 'secondo applet',
        title: 'secondo applet content',
        fromTetro: ''
      }
    },
    props: {
      secondoProp: {
        type: String,
        default: 'secondo prop'
      }
    },
    methods: {
      toParent () {
        this.$emit('secondoToParent', this.secondoProp)
      }
    },
    created () {
      eventBus.$on('fromTetro', (data) => {
        this.fromTetro = data
      })
    }
  }
</script>

<style scoped>
  .secondo {
    font-weight: normal;
    padding: 30px 0;
    background-color: paleturquoise;
    border: 1px solid rgba( 0,0,0, .6 );
    text-transform: capitalize;
    margin: 0 0 20px;
  }
  .secondo__button {
    text-transform: uppercase;
  }
</style>
