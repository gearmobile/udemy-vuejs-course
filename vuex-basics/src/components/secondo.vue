<template lang="pug">
  .secondo
    h3.secondo__title.page-header registered users
    h4.secondo__subtitle.page-header total registrations: <span class="secondo__accent">{{ total }}</span>
    .secondo__row( v-for="(user, index) in users", :key="index" )
      h4.secondo__caption {{ user.name }} <span class="secondo__date">{{ user.date }}</span>
      button.btn.btn-primary.secondo__button( type="button", @click="unRegister(user)" ) unregister
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'secondo',
    computed: {
      ...mapGetters({
        users: 'getUsersRegistered',
        total: 'getRegistration'
      })
    },
    methods: {
      ...mapActions({
        remove: 'unsetRegistartion'
      }),
      unRegister (user) {
        this.remove(user)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .secondo {
    box-shadow: 0px 0px 2px rgba( 0,0,0, .6 );
    border-radius: .4rem;
    padding: 2rem 3rem 4rem;

    &__row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      background-color: lightsalmon;
      padding-left: 2rem;
      border-radius: .4rem;
      box-shadow: 1px 1px 1px rgba( 0,0,0, .5 );

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__title {
      text-transform: capitalize;
    }

    &__subtitle {
      text-transform: capitalize;
      margin-bottom: 20px;
    }

    &__caption {
      text-transform: capitalize;
      color: #fff;
      text-shadow: 1px 1px 1px rgba( 0,0,0, .5 )
    }

    &__date {
      color: grey;
      font-size: 14px;
      margin-left: 2rem;
    }

    &__accent {
      color: firebrick;
      font-size: 20px;
    }

    &__button {
      text-transform: uppercase;
      font-size: 14px;
      text-shadow: 1px 1px 1px rgba( 0,0,0, .7 )
    }

  }

</style>
