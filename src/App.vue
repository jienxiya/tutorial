<template>
  <div id="app">
    <Header
      v-show="$route.name==='register' || $route.name==='login' || $route.path === '/' ? true : false"
    ></Header>
    <AppBody></AppBody>
    <SidebarMenu
      v-show="$route.path==='/dashboard' || $route.path === '/personalinformation' || $route.path === '/courses' ? true : false"
    >
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <span
        class="vsm--toggle-btn"
        :class="{'vsm--toggle-btn_slot' : $slots['toggle-icon']}"
      >toggle-icon</span>
      <span class="dropdown-icon">dropdown-icon</span>
    </SidebarMenu>
  </div>
</template>

<script>
import AUTH from "services/auth";
import Header from "components/frame/Header.vue";
import AppBody from "components/frame/Body.vue";
import SidebarMenu from "components/frame/sidebar.vue";

export default {
  name: "app",
  auth: AUTH,
  data() {
    return {};
  },
  components: {
    Header,
    AppBody,
    SidebarMenu
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>