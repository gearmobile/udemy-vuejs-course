<template>
  <div class="footer">
    {{ caption }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      caption: 'footer of applet'
    }
  }
}
</script>

<style scoped>
  .footer {
    font-weight: normal;
    font-size: 20px;
    text-transform: capitalize;
    text-align: center;
    padding: 20px 0;
    background-color: paleturquoise;
    padding: 40px 0;
  }
</style>
