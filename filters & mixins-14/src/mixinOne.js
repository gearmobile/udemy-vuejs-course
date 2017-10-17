const mixinOne = {
  data () {
    return {
      arr: ['apple', 'lemon', 'melon', 'banana', 'mango', 'cherry'],
      value: ''
    }
  },
  computed: {
    filteredValue () {
      return this.arr.filter((el) => {
        return el.match(this.value)
      })
    }
  },
  created () {
    console.log('Mixin Hook Created')
  }
}

export default mixinOne
