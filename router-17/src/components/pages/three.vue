<template lang="pug">
  #three.three
    .notification.is-success
      h1.title.is-5.has-text-centered.three__title {{ title }}
      p {{ text }}
      p $route.params.id is : {{ $route.params.id }}
      p $route.params.level is : {{ $route.params.level }}
      .field
        router-link.button.is-outlined( tag="a", :to="linkOne" ) go to page one
        router-link.button.is-outlined( tag="a", :to="linkTwo" ) go to page two
</template>

<script>
  export default {
    name: 'three',
    data () {
      return {
        title: 'component three',
        text: 'content of component three',
        linkOne: { name: 'PageOne' },
        linkTwo: {
          name: 'PageTwo',
          params: { id: 2 }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .three {

    &__title {
      color: white;
      text-transform: capitalize;
    }
  }
</style>
