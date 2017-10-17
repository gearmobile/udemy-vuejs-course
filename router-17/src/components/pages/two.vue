<template lang="pug">
  #two.two
    .notification.is-primary
      h1.title.is-5.has-text-centered.two__title {{ title }}
      p {{ text }}
      p $route.params.id is : {{ $route.params.id }}
      hr
      p query parameter locale is : {{ $route.query.locale }}
      p query parameter analitics is : {{ $route.query.analitics }}
      .field
        router-link.button.is-outlined( tag="a", :to="{ name: 'PageOne' }" ) go to page one
        router-link.button.is-outlined( tag="a", :to="'/third/' + $route.params.id + '/three'" ) go to page three
    .notification.is-info.two__section
    .notification.is-success.two__subsection#subsection
      p.has-text-centered {{ subsection }}
</template>

<script>
  export default {
    name: 'two',
    data () {
      return {
        title: 'component two',
        text: 'content of component two',
        subsection: 'it is subsection with scroll'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .two {

    &__title {
      color: white;
      text-transform: capitalize;
    }

    &__section {
      height: 700px;
    }

    &__subsection {
      height: 200px;

      & p {
        font-size: 30px;
      }
    }
  }
</style>
