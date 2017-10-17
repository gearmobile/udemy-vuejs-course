<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="btn-group" role="group">
            <button v-on:click="togShow" type="button" class="btn btn-default">v-show</button>
            <button v-on:click="togRemove" type="button" class="btn btn-default">v-if</button>
          </div>
          <hr>
          <ul class="list-group">
            <li v-show="show" class="list-group-item"><span class="badge">1</span>v-show directive</li>
            <li v-if="remove" class="list-group-item"><span class="badge">2</span>v-if directive</li>
            <li v-else class="list-group-item"><span class="badge">3</span>v-else directive</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h3 class="page-header">loop through simple array</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="fruit in fruits">{{ fruit }}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h3 class="page-header">loop through array of objects</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="item in users">
              <ul>
                <li v-for="( value, key ) in item">{{ key }} : {{ value }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h3 class="page-header">loop through array of simple numbers</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="number in 8">{{ number }}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2"></div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      remove: false,
      fruits: [ 'apple', 'lemon', 'strawberry', 'avocado', 'banana', 'mango' ],
      users: [
        { name: 'Anna', age: 18, color: 'brown' },
        { name: 'John', age: 30, color: 'white' },
        { name: 'Mary', age: 28, color: 'black' },
        { name: 'Peter', age: 12, color: 'brune' },
        { name: 'Ivan', age: 34, color: 'white' }
      ]
    }
  },
  methods: {
    togShow() {
      this.show = !this.show
    },
    togRemove() {
      this.remove = !this.remove
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
