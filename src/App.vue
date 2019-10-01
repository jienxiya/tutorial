<template>
  <div id="app">
    <Header></Header>
    <!-- v-show="$route.name==='register' || $route.name==='login' || $route.name === 'home' ? true : false"? -->
    <AppBody></AppBody>
    <!-- <SidebarMenu
      v-show="$route.name==='dashboard' || $route.name === 'personalinformation' || $route.name === 'courses' || $route.name === 'edit' ? true : false"
    >
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <span
        class="vsm--toggle-btn"
        :class="{'vsm--toggle-btn_slot' : $slots['toggle-icon']}"
      >toggle-icon</span>
      <span class="dropdown-icon">dropdown-icon</span>
    </SidebarMenu> -->
  </div>
</template>

<script>
import Header from "components/frame/Header.vue";
import AppBody from "components/frame/Body.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody
  },
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

 