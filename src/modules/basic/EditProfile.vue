<template>
  <div id="container">
    <center>
      <div>
        <h1>Update Information</h1>
      </div>
      <hr>
      <div class="card">
        <div class="card-header">Edit Information</div>
        <div class="card-body">
          <div class="form-group">
            <label for="username">Username</label>
            <b-form-input
              required
              type="text"
              class="form-control"
              id="username"
              v-model="username"
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="email" class="bmd-label-floating">Email</label>
            <b-form-input required type="email" class="form-control" id="email" v-model="email"></b-form-input>
          </div>
          <div class="form-group">
            <label for="pwd" class="bmd-label-floating">Password</label>
            <b-form-input
              required
              type="password"
              class="form-control"
              id="passw"
              v-model="password"
            ></b-form-input>
          </div>

          <button
            type="button"
            class="btn btn-outline-primary login-btn"
            id="btnLogin"
            @click="save"
          >Save changes</button>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),
        AUTH.save(this.username, this.email, this.password);
      (this.username = ""), (this.email = ""), (this.password = "");
    }
  }
};
</script>

<style scoped>
#container {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 2em;
}
</style>