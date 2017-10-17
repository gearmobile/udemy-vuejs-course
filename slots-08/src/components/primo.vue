<template>
  <div class="primo">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-8 primo-cite">
          <slot name="uno"></slot>
          <span class="subtitle"><slot name="small">{{ subtitleContent }}</slot></span>
        </div>
        <div class="col-md-8 col-md-offset-8 primo-cite">
          <slot name="duo"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cite: 'lorem ipsum dolor',
        subtitleContent: 'subtitle content here'
      }
    }
  }
</script>

<style scoped>
  .primo {
    border: 2px solid rgba( 0,0,0, .5 );
    padding: 20px 0;
    background-color: paleturquoise;
  }
  .primo-cite {
    padding: 30px 20px;
    background-color: palegoldenrod;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    border-radius: 1rem;
    box-shadow: 1px 1px 2px rgba( 0,0,0, .5 );
    color: rgba( 0,0,0, .5 );
  }
  .primo-cite:not(:last-child) {
    margin: 0 0 20px;
  }
  h2 {
    color: firebrick;
  }
  p {
    margin-bottom: 0;
  }
  .subtitle {
    font-style: italic;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 18px;
  }
</style>
