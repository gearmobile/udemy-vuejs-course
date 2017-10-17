<template lang="pug">
  .directives
    .container
      .row
        .col-md-8.col-md-offset-2
          h2.page-header.directives__title {{ title }}
          p.custom( v-highlight:background.delayed="'palegoldenrod'" ) some example of text
          p.custom( v-local-highlight:background.timer.blink="{ primaryColor: 'palegreen', secondaryColor: 'palegoldenrod', delay: 1000, timer: 3000 }" ) another some example of text
</template>

<script>
  export default {
    name: 'directives',
    data () {
      return {
        title: 'custom directives'
      }
    },
    directives: { // local directives
      'local-highlight': {
        bind (el, binding, vnode) {
          // timer modifier
          let timer = 0
          if (binding.modifiers['timer']) {
            timer = binding.value.timer
            setTimeout(function () {
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value
              } else {
                el.style.color = binding.value
              }
            }, timer)
          }
          // blink modifier
          if (binding.modifiers['blink']) {
            const primaryColor = binding.value.primaryColor
            const secondaryColor = binding.value.secondaryColor
            const delay = binding.value.delay
            let currentColor = primaryColor
            setTimeout(function () {
              setInterval(function () {
                currentColor === secondaryColor ? currentColor = primaryColor : currentColor = secondaryColor
                if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor
                } else {
                  el.style.color = currentColor
                }
              }, delay)
            }, timer)
          } else {
            setTimeout(function () {
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value.primaryColor
              } else {
                el.style.color = binding.value.primaryColor
              }
            }, timer)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .directives {
    margin-top: 40px;

    &__title {
      font-size: 40px;
      text-transform: capitalize;
    }
  }
  .custom {
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 20px;
    padding: 10px;
  }
</style>
