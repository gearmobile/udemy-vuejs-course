<template>
  <div class="author">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-8">
          <span class="author-title">{{ authorTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        authorTitle: 'author component'
      }
    },
    activated () {
      console.log('Component Author Activated')
    },
    deactivated () {
      console.log('Component Author Deactivated')
    }
  }
</script>
