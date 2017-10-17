<template lang="pug">
  .resource
    h2 vue-resource plugin
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
    h3 list of contacts
    ul.list-group
      li.list-group-item( v-for="item in data" ) {{ item.userName }} : {{ item.userEmail }}
</template>

<script>
  export default {
    name: 'resource',
    data () {
      return {
        user: {
          userName: '',
          userEmail: ''
        },
        data: []
      }
    },
    methods: {
      onSubmit () {
        this.$http.post('https://vuejs-http-55b14.firebaseio.com/data.json', this.user).then(response => {
          this.user.userName = ''
          this.user.userEmail = ''
          console.log(response)
        }, error => {
          console.log(error)
        })
      },
      onFetch () {
        this.$http.get('https://vuejs-http-55b14.firebaseio.com/data.json').then(response => {
          return response.json()
        }).then(data => {
          const arr = []
          for (let key in data) {
            arr.push(data[key])
          }
          this.data = arr
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1, h2, h3 {
    font-weight: normal;
    text-transform: capitalize;
  }
  label, button {
    text-transform: capitalize;
  }
  .list-group {
    text-align: left;
  }
</style>
