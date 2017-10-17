<template>
  <div class="serverDetails">
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      caption: 'server details currently not updated'
    }
  }
}
</script>

<style scoped>
  .serverDetails {
    font-weight: normal;
    padding: 10px 0;
    text-align: right;
    background-color: palevioletred;
  }
  .serverDetails p {
    font-style: italic;
    color: white;
    text-transform: capitalize;
    padding: 0 20px 0 0;
  }
</style>
