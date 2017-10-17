export default {
  toggleUserStatus (array, { id }) {
    array.find(el => {
      if (el.id === id) {
        el.status = !el.status
      }
    })
  },
  createDate () {
    const date = new Date()
    const result = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    return result
  }
}
