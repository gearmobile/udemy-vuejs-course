<template>
  <div id="app" v-on:mousemove="getCoords">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <section class="well well-lg">
            <h1 v-once>{{ msg }}</h1>
            <h2>{{ onChange() }} - <a v-bind:href="link" target="_blank">Google</a></h2>
            <h3 v-html="fullLink"></h3>
          </section>
          <section class="well well-lg">
            <button class="btn btn-primary" type="button" v-on:click="chgCount(2, $event)">click me</button>
            <div class="count">{{ count }}</div>
            <div class="coords">Coordinates: {{ x }} / {{ y }}</div>
          </section>
          <section class="well well-lg">
            <input type="text" class="form-control" v-on:keyup.enter.tab="onKeyUp">
          </section>
          <section class="well well-lg">
            <h3>two-way binding data</h3>
            <input type="text" class="form-control" v-model="message">
            <p class="page-header">{{ message }}</p>
          </section>
          <section class="well well-lg">
            <button v-on:click="onIncrease(1)" type="button" class="btn btn-secondary">Increase</button>
            <button v-on:click="onDecrease(1)" type="button" class="btn btn-secondary">Decrease</button>
            <p>{{ counter }}</p>
            <p>{{ result }}</p>
          </section>
          <section class="well well-lg clearfix">
            <div class="col-md-12">
              <div class="demo" @click="checkedOne = !checkedOne" :class="classRed"></div>
              <div class="demo" @click="checkedTwo = !checkedTwo" :class="classGreen"></div>
              <div class="demo" @click="checkedThree = !checkedThree" :class="classBlue"></div>
            </div>
            <div class="col-md-12">
              <div class="demo pull-left" :class="[ color ]"></div>
              <input type="text" class="pull-right form-control" v-model="color">
            </div>
          </section>
          <section class="well well-lg clearfix">
            <div class="col-md-12">
              <div class="demo" v-bind:style="styleBG"></div>
              <div class="demo" v-bind:style="styleWidth"></div>
              <div class="demo" v-bind:style="styleHeight"></div>
              <div class="demo" v-bind:style="styleSize"></div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="bgcolor">set background color:</label>
                <input id="bgcolor" type="text" class="pull-right form-control" v-model="bgColor">
              </div>
              <div class="form-group">
                <label for="width">set width:</label>
                <input id="width" type="number" min="0" max="100" step="2" class="form-control" v-model="boxWidth">
              </div>
              <div class="form-group">
                <label for="height">set height:</label>
                <input id="height" type="number" min="0" max="100" step="2" class="form-control" v-model="boxHeight">
              </div>
              <div class="form-group">
                <label for="size">set size:</label>
                <input id="size" type="number" min="0" max="100" step="2" class="form-control" v-model="boxSize">
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Vue.js',
        link: 'http://www.google.com',
        fullLink: '<a href="http://yandex.ru/" target="_blank">Yandex</a>',
        count: 0,
        x: 0,
        y: 0,
        message: 'Hello from Vue',
        counter: 0,
        checkedOne: false,
        checkedTwo: false,
        checkedThree: false,
        color: 'green',
        bgColor: '',
        boxWidth: 50,
        boxHeight: 50,
        boxSize: 50
      }
    },
    computed: {
      result() {
        return this.counter > 6 ? 'Greater 6' : 'Smaller 6';
      },
      classRed() {
        return {
          red : this.checkedOne,
          blue : !this.checkedOne
        }
      },
      classGreen() {
        return {
          green : this.checkedTwo
        }
      },
      classBlue() {
        return {
          blue : this.checkedThree
        }
      },
      styleBG() {
        return {
          backgroundColor: this.bgColor
        }
      },
      styleWidth() {
        return {
          width: this.boxWidth + 'px'
        }
      },
      styleHeight() {
        return {
          height: this.boxHeight + 'px'
        }
      },
      styleSize() {
        return {
          width: this.boxSize + 'px',
          height: this.boxSize + 'px'
        }
      }
    },
    methods: {
      onChange() {
        this.msg = 'Welcome to Vue';
        return this.msg;
      },
      chgCount( step, event ) {
        this.count += step;
        console.log( event.target.tagName );
      },
      getCoords( event ) {
        this.x = event.clientX,
        this.y = event.clientY
      },
      onKeyUp() {
        console.log( 'key pressed' );
      },
      onIncrease( step ) {
        this.counter += step;
      },
      onDecrease( step ) {
        if ( this.counter > 0 ) {
          this.counter -= step;
        }
      }
    },
    watch: {
      counter: function( value ) {
        const vm = this;
        setTimeout( function() {
          vm.counter = 0;
          console.log( value );
        }, 4000 );
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
    border: 1px solid rgba( 0,0,0, .6 );
    padding: 20px;
    background-color: rgba( 0,0,0, .2 );
  }
  button {
    cursor: pointer;
  }
  .demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }
  .red {
    background-color: rgba( 255,0,0, .6 );
  }
  .green {
    background-color: rgba( 0,255,0, .6 );
  }
  .blue {
    background-color: rgba( 0,0,255, .6 );
  }
</style>
