<template>
    <div id = "body">
    <b-container class="bv-example-row">
      <b-row id = "row">
        <b-col>

        </b-col>
        <b-col id="top" cols = "8">

        <b-form @submit="onSubmit">
          <b-form-group id="input-group-0" label="Username" label-for="input-0">
            <b-form-input id="input-0" v-model="form.username" type="text" required placeholder="Username"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input id="input-2" v-model="form.password" required placeholder="Password" type="password"></b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-3" label="ConfirmPassword" label-for="input-3">
            <b-form-input id="input-3" v-model="form.confirmPassword" required placeholder="Confirm Password" type="password"></b-form-input>
          </b-form-group>

          <b-button id="login" block variant="primary" type="submit">Sign Up</b-button><br>
        </b-form>
        
        </b-col>
        <b-col>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AUTH from 'services/auth'
import $ from 'jquery'
// import ROUTER from 'router'
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      sessionStorage.setItem("Password", this.form.password)
      sessionStorage.setItem("Username", this.form.username)
      sessionStorage.setItem("Email", this.form.email)
      AUTH.register(this.form.email, this.form.password)
      // let link= `http://localhost:3000/db/create/${this.form.username}/${this.form.email}/${this.form.password}`
      // let link= `http://localhost:3000/db/update/${this.form.username}/${this.form.email}/${this.form.password}`
      let link= `http://localhost:3000/db/delete`
      $.ajax({
        url: link,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(response =>{
        alert(response.username)
      })
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/colors.scss";
#top{
  background-color: $bckg_color !important;
	padding: 3vw 4vw 5vw;
  border-radius: 4px;
  box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);
  text-align: center;
  margin-top: 60px;
}
/* #login {length: 20px; } */

</style>