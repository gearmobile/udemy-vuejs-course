<template lang="pug">
  .row
    .col-sm-12
      h3.progress-title
        | quotes added
      .progress
        .progress-bar.progress-bar-info.progress-bar-striped.active( role="progressbar", aria-valuenow="10", aria-valuemin="0", aria-valuemax="100", :style="innerStyle" )
          | {{ elemens }} / {{ maxElements }}
</template>

<script>
  export default {
    props: {
      maxElements: {
        type: Number,
        required: true
      },
      elemens: {
        type: Number,
        required: true
      }
    },
    computed: {
      innerStyle () {
        return {
          width: this.elemens * 100 / this.maxElements + '%'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .progress-title {
    text-transform: capitalize;
    font-size: 30px;
  }
  .progress {
    height: 40px;
  }
  .progress-bar {
    line-height: 40px;
    font-size: 15px;
    font-weight: 700;
  }
</style>
