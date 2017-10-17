import Vue from 'vue'

Vue.config.productionTip = false

Vue.component('hello', {
  template: '<h2 class="page-header">hello component</h2>'
})

/* eslint-disable no-new */
const app1 = new Vue({
  data: {
    title: 'Primo Applet',
    showParagraph: false
  },
  methods: {
    onShow () {
      this.showParagraph = !this.showParagraph
      this.onUpdateTitle('Primo Applet ( Updated )')
    },
    onUpdateTitle (value) {
      this.title = value
    }
  },
  watch: {
    title (value) {
      console.log('The title value was changed. A new value is ' + value)
    }
  },
  computed: {
    lowerCaseTitle () {
      return this.title.toLowerCase()
    }
  }
})

const app2 = new Vue({
  data: {
    title: 'Secondo Applet'
  },
  methods: {
    onChange () {
      app1.title = 'Changed from Applet Second'
      this.$refs.paragraphSecondo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet nulla, vel est corrupti ratione veniam culpa iste magni, blanditiis saepe minima necessitatibus quas rerum ab nostrum adipisci repellat dicta.'
    }
  }
})

const app3 = new Vue({
  data: {
    title: 'Tetro Applet'
  },
  methods: {
    onChange () {
      this.$refs.linkTetro.innerHTML = 'Link Changed Direct'
    }
  }
})

const app4 = new Vue({
  data: {
    title: 'Quattro Applet'
  },
  beforeCreate () {
    console.log('Before Create Vue Instance')
  },
  created () {
    console.log('Vue Instance Created')
  },
  beforeMount () {
    console.log('Vue Instance Before Mount')
  },
  mounted () {
    console.log('Vue Instance Mounted')
  }
})

app1.$mount('#app1')
app2.$mount('#app2')
app3.$mount('#app3')
app4.$mount('#app4')

setTimeout(function () {
  app1.title = 'Changed by Timer'
}, 3000)

document.querySelector('#colOne').addEventListener('click', function () {
  console.log(app1.$refs)
})

document.querySelector('#colTwo').addEventListener('click', function () {
  console.log(app2.$refs)
})

document.querySelector('#colThree').addEventListener('click', function () {
  console.log(app3.$refs)
})

setTimeout(function () {
  app2.$refs.paragraphSecondo.innerHTML = 'Text Paragraph Changed Direct'
}, 3000)
