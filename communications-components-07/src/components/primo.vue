<template>
  <div class="primo">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h2>{{ caption }}</h2>
          <p class="title">{{ title }}</p>
          <p class="props">{{ uno }}</p>
          <button type="button" class="btn btn-primary primo__button">{{ btnTitle }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        caption: 'primo applet',
        title: 'primo applet content',
        btnTitle: 'primo button'
      }
    },
    props: {
      uno: {
        type: String,
        default: 'primo property'
      }
    }
  }
</script>

<style scoped>
  .primo {
    font-weight: normal;
    background-color: palegoldenrod;
    padding: 40px 0;
    border: 1px solid rgba( 0,0,0, .6 );
    margin: 0 0 20px;
    text-transform: capitalize;
  }
  .primo__button {
    text-transform: uppercase;
  }
  .props {
    font-weight: bold;
  }
</style>
