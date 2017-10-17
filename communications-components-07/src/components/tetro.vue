<template>
  <div class="tetro">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h2>{{ caption }}</h2>
          <p class="tetro__props">{{ tetroProp }}</p>
          <button @click="changeProp" type="button" class="btn btn-primary tetro__button">{{ btnTitle }}</button>
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
        caption: 'tetro applet',
        title: 'tetro applet content',
        btnTitle: 'tetro button'
      }
    },
    props: {
      tetroProp: {
        type: String,
        default: 'tetro applet property'
      },
      tetroPropToParent: {
        type: String,
        default: 'tetro prop from applet tetro'
      }
    },
    methods: {
      changeProp () {
        eventBus.$emit('fromTetro', this.tetroPropToParent)
      }
    }
  }
</script>

<style scoped>
  .tetro {
    font-weight: normal;
    background-color: palegreen;
    padding: 40px 0;
    border: 1px solid rgba( 0,0,0, .6 );
    margin: 0 0 20px;
    text-transform: capitalize;
  }
  .tetro__button {
    text-transform: uppercase;
  }
  .tetro__props {
    font-weight: bold;
  }
</style>
