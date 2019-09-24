<template>
  <div id="app">
   <Header></Header>
   <AppBody></AppBody>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
export default {
  name: 'app',
  components: {
    Header,
    AppBody
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
