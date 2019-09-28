<template>
  <div id="app">
   <Header v-show="$route.path==='/register' || $route.path==='/login' ? true : false"></Header>
   <AppBody></AppBody>
   <SidebarMenu v-show="$route.path==='/dashboard' ? true : false" >
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <span  class="vsm--toggle-btn" :class="{'vsm--toggle-btn_slot' : $slots['toggle-icon']}">toggle-icon</span>
      <span class="dropdown-icon">dropdown-icon</span>
   </SidebarMenu>
    <dashBoard v-show="$route.path==='/dashboard' ? true : false"> </dashBoard>
  </div>
</template>

<script>
import AUTH from 'services/auth'
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
import  SidebarMenu from 'components/frame/sidebar.vue'
import  dashBoard from 'modules/basic/Dashboard.vue'

export default {
  name: 'app',
  auth: AUTH,
  data(){
    return{
    }
  },
  components: {
    Header,
    AppBody,
    SidebarMenu,
    dashBoard
  },
  methods:{
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