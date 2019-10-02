<template>
  <div id="card">
      <center>
    <h1>Are you sure you want to log out?</h1>
    <b-button @click="logOut" variant="outline-primary">Yes</b-button>
    </center>
  </div>
</template>
<style scoped>
#card {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
</style>

<script>
import AUTH from "services/auth";
// import ROUTER from "router";
export default {
  auth: AUTH,
  methods: {
    logOut(e) {
      e.preventDefault();
      AUTH.logout();
      // ROUTER.push("/login");
    }
  }
};
</script>

