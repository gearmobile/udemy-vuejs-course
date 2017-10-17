<template>
  <div class="tetro">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-8">
          <span class="tetro-title">{{ tetroTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tetroTitle: 'tetro component'
      }
    },
    activated () {
      console.log('Component Tetro Activated')
    },
    deactivated () {
      console.log('Component Tetro Deactivated')
    }
  }
</script>
