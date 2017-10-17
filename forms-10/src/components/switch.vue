<template lang="pug">
  .switch
    .switch__on#on( :class="{ active: value }" @click="onSwitcher(true)" )
      | on
    .switch__off#off( :class="{ active: !value }" @click="onSwitcher(false)" )
      | off
</template>

<script>
  export default {
    name: 'switch',
    props: ['value'],
    methods: {
      onSwitcher (isOn) {
        this.$emit('input', isOn)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .switch__on,
  .switch__off {
    width: 40px;
    height: 20px;
    background-color: lightgrey;
    padding: 2px;
    display: inline-block;
    box-sizing: content-box;
    text-align: center;
    cursor: pointer;
  }
  .switch__on:hover,
  #on.active {
    background-color: lightgreen;
  }
  .switch__off:hover,
  #off.active {
    background-color: lightsalmon;
  }
</style>
