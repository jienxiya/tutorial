<template>
  <div id="app">
   <Header></Header>
   <AppBody></AppBody>
   <SidebarMenu v-show="false" >
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <span  class="vsm--toggle-btn" :class="{'vsm--toggle-btn_slot' : $slots['toggle-icon']}"
      @click="onToggleClick">toggle-icon</span>
      <span class="dropdown-icon">dropdown-icon</span>
   </SidebarMenu>
    <dashBoard  v-show="false"> </dashBoard>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
import  SidebarMenu from 'components/frame/sidebar.vue'
import  dashBoard from 'modules/basic/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody,
    SidebarMenu,
    dashBoard
  },
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