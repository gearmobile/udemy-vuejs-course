<template>
  <div class="header">
    {{ caption }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      caption: 'header of applet'
    }
  }
}
</script>

<style scoped>
  .header {
    color: firebrick;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    background-color: palegoldenrod;
    padding: 20px 0;
  }
</style>
