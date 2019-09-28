<template>
  <div id="card" >
    <!-- <header  class="navbar navbar-light">
      <button class="navbar-toggler sidebar-toggler" type="button" data-toggle="sidebar-show">
        <span class="navbar-toggler-icon"></span>
      </button>
    </header> -->
    <center>
      <h1>DASHBOARD</h1>
     <hr>
      <div>
        <b-img :src="require('assets/user.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
      </div>
      <h2>Hi {{Uname}}</h2>
      <p>Welcome to the Dashboard</p>
    </center>
  </div>
</template>
<style scoped>
#card {
  margin-top: 2em;
}
#userIcon {
  width: 15%;
  height: auto;
}
</style>

<script>
import AUTH from "services/auth";
export default {
  name: "card",
  auth: AUTH,
  data() {
    return {
      Uname: sessionStorage.getItem("Username")
    };
  },
  component: {

  },
  methods: {

  }
};
</script>