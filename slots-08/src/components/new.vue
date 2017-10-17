<template>
  <div class="new">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-8">
          <span class="new-title">{{ newTitle }}</span>
          <div>
            <button @click="count += 1" type="button" class="btn btn-default">current count <span class="badge">{{ count }}</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTitle: 'new component',
        count: 0
      }
    },
    activated () {
      console.log('Component New Activated')
    },
    deactivated () {
      console.log('Component New Deactivated')
    }
  }
</script>
