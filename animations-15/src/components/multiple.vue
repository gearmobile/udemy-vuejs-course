<template lang="pug">
  .multiple
    h2.page-header.multiple__caption {{ caption }}
    .btn-group
      button.btn.btn-primary( type="button" @click="addItem" ) {{ buttonCaption }}
    ul.list-group
      transition-group( tag="div", :enter-active-class="enterClass", :leave-active-class="leaveClass" )
        li.list-group-item( v-for="(point, index) in points" @click="onTouch(index)",  :key="index" ) {{ point }}
</template>

<script>
  export default {
    name: 'multiple',
    data () {
      return {
        caption: 'multiple items animation vue',
        points: [1, 2, 3, 4, 5, 6],
        enterClass: 'animated fadeInRight',
        leaveClass: 'animated fadeOutRight',
        buttonCaption: 'add item in list'
      }
    },
    methods: {
      onTouch (index) {
        this.points.splice(index, 1)
      },
      addItem () {
        const pos = Math.floor(Math.random() * this.points.length)
        this.points.splice(pos, 0, this.points.length + 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .multiple {
    &__caption {
      text-transform: capitalize;
      color: forestgreen;
      font-weight: 700;
    }
    .list-group-item {
      color: white;
      font-size: 20px;
      font-weight: 700;
      background-color: palevioletred;
      cursor: pointer;
      
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    .btn-group {
      margin-bottom: 20px;
      
      & .btn {
        text-transform: capitalize;
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
</style>
