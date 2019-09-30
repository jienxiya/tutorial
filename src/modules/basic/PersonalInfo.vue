<template>
  <div>
    <br>
    <br>
    <div class="mt-3">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img :src="require('assets/user.png')" class="rounded-0" id="userIcon"></b-card-img>
          </b-col>
          <b-col md="7">
            <b-card-body title="Personal Information">
              <b-card-text>Name: {{Uname}}</b-card-text>
              <b-card-text>Email: {{Email}}</b-card-text>
              <b-card-text>Password: ******</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/colors.scss";
#userIcon {
  padding: 2em;
  width: 110%;
  height: auto;
}
b-card-text {
  text-align: left;
}
.mt-3 {
  margin: 30%;
  box-shadow: 5px 10px 18px #888888;
  //   background-color: $bckg_color !important;
}

</style>

<script>
// import ROUTER from 'router'
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth: AUTH,
      Uname: sessionStorage.getItem("Username"),
      Email: sessionStorage.getItem("Email"),
      Pass: sessionStorage.getItem("Password")
    };
  },
};
</script>

