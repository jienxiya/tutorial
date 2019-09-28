<template>
  <div id="body">
    <b-container class="bv-example-row">
      <b-row id="row">
        <b-col></b-col>
        <b-col id="top" cols="8">
          <b-form @submit="onSubmit">
            <b-input-group id="input-group-1" label="Email" label-for="input-1" >
              <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
            </b-input-group>

            <b-form-group id="input-group-2" label="Password" label-for="input-2">
              <b-form-input id="input-2" v-model="form.password" required placeholder="Password" type="password"></b-form-input>
            </b-form-group>

            <b-button id="login" type="submit" block variant="primary">Log in</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AUTH from 'services/auth'
// import ROUTER from 'router'
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      AUTH.login(this.form.email, this.form.password)
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