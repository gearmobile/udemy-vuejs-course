<template>
  <div class="servers">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in servers">
        <span class="badge">item.number</span>
        {{ item.caption }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      caption: 'server section of applet',
      servers: [
        { caption: 'server uno', number: 1 },
        { caption: 'server duo', number: 2 },
        { caption: 'server tre', number: 3 },
        { caption: 'server quattro', number: 4 },
        { caption: 'server cinque', number: 5 }
      ]
    }
  }
}
</script>

<style scoped>
  .servers {
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    padding: 40px 0;
    background-color: palegreen;
  }
  .servers .list-group {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  .servers .list-group-item {
    margin: 0 0 10px 0;
    padding: 0 0 0 20px;
    border-bottom: 1px solid #000;
  }
</style>
