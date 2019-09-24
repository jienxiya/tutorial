<template>
  <div id="body">
    <b-container class="bv-example-row">
      <b-row id="row">
        <b-col></b-col>
        <b-col id="top" cols="8">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="Username" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="email"
                required
                placeholder="Username"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Password"
                type="password"
              ></b-form-input>
            </b-form-group>

            <b-button id="login" type="submit" block variant="primary">Log in</b-button>
            <br />
            <b-button id="reset" type="reset" block variant="danger">Reset</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert("Username: " + this.form.username);
      //   console.log("Username: " + this.form.username);
      //   console.log("Password: " + this.form.password);
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.username = "";
      this.form.password = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/colors.scss";
#top {
  background-color: $bckg_color !important;
  padding: 3vw 4vw 5vw;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);
  text-align: center;
  margin-top: 60px;
}
/* #login {length: 20px; } */
</style>