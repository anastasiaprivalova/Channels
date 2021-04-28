<template>
  <div id="app">
    <channel-manager />
  </div>
</template>

<script>
  import ChannelManager from './components/ChannelManager.vue'

  export default {
    name: 'App',

    components: {
      ChannelManager
    }
  }
</script>

<style>
  html {
    font-size: 18px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    margin-top: 60px;
  }
</style>
