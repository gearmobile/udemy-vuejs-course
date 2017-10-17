<template lang="pug">
  .primo
    h3.primo__title.page-header register here
    .primo__row( v-for="(user, index) in users", :key="index" )
      h4.primo__subtitle {{ user.name }}
      button.btn.btn-primary.primo__button( type="button", @click="onRegister(user)" ) register
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'primo',
    computed: {
      ...mapGetters({
        users: 'getUsers'
      })
    },
    methods: {
      ...mapActions({
        register: 'setRegistration'
      }),
      onRegister (user) {
        this.register(user)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .primo {
    box-shadow: 0px 0px 2px rgba( 0,0,0, .6 );
    border-radius: .4rem;
    padding: 2rem 3rem 4rem;

    &__row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      background-color: burlywood;
      padding-left: 2rem;
      border-radius: .4rem;
      box-shadow: 1px 1px 2px rgba( 0,0,0, .6 );

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__title {
      text-transform: capitalize;
    }

    &__subtitle {
      text-transform: capitalize;
      color: #fff;
      text-shadow: 1px 1px 1px rgba( 0,0,0, .5 )
    }

    &__button {
      text-transform: uppercase;
      font-size: 14px;
      text-shadow: 1px 1px 1px rgba( 0,0,0, .7 )
    }

  }

</style>
