<template lang="pug">
  #one.one
    .notification.is-info
      h1.title.is-5.has-text-centered.one__title {{ title }}
      p {{ text }}
      p {{ $route.params.id }}
      .field
        .control
          router-link.button.is-outlined( tag="a", :to="linkOne" ) go to page two
          router-link.button.is-outlined( tag="a", :to="linkHash" ) go to page two with hash
          router-link.button.is-outlined( tag="a", :to="linkTwo" ) go to page three
</template> 

<script>
  export default {
    name: 'one',
    data () {
      return {
        title: 'component one',
        text: 'content of component one',
        linkOne: {
          name: 'PageTwo',
          params: { id: 2 },
          query: { locale: 'en', analitics: 100 }
        },
        linkHash: {
          name: 'PageTwo',
          params: { id: 2 },
          hash: '#subsection'
        },
        linkTwo: {
          name: 'PageThree',
          params: { id: 2, level: 3 }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .one {

    &__title {
      color: white;
      text-transform: capitalize;
    }

    & .field {
      margin-top: 20px;
    }

    & .button {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
</style>
