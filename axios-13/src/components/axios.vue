<template lang="pug">
  .axios
    h2.axios__title axios plugin
    .form-group
      label(for="name") username
      input.form-control(type="text" name="name" id="name" v-model.trim="user.userName")
    .form-group
      label(for="email") email
      input.form-control(type="text" name="email" id="email" v-model.trim="user.userEmail")
    .form-group
      .btn-toolbar( role="toolbar" )
        .btn-group( role="group" )
          button.btn.btn-primary( @click="onSubmit" type="button" ) submit data
        .btn-group( role="group" )
          button.btn.btn-primary( @click="onFetch" type="button" ) fetch data
        .btn-group( role="group" )
          button.btn.btn-primary( @click="onShow" type="button" ) show data
    ul.list-group
      li.list-group-item( v-for="item in usersArray" ) {{ item.userName }} - {{ item.userEmail }}
</template>

<script>
  export default {
    name: 'axios',
    data () {
      return {
        user: {
          userName: '',
          userEmail: ''
        },
        data: {},
        usersArray: []
      }
    },
    methods: {
      onSubmit () {
        this.axios.post('https://vuejs-http-55b14.firebaseio.com/data.json', this.user)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onFetch () {
        this.axios.get('https://vuejs-http-55b14.firebaseio.com/data.json')
          .then(response => {
            this.data = response.data
            console.log(this.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onShow () {
        const arr = []
        for (let key in this.data) {
          arr.push(this.data[key])
        }
        this.usersArray = arr
      }
    }
  }
</script>

<style lang="scss" scoped>
  label, button {
    text-transform: capitalize;
  }
  button {
    font-weight: 700;
  }
  .axios {
    margin-top: 40px;

    &__title {
      text-transform: capitalize;
      margin-bottom: 40px;
    }
  }
  .list-group {
    text-align: left;
  }
</style>
