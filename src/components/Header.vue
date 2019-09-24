<template>
  <div id = "Header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">UGrab</b-navbar-brand>
      </b-navbar>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <center id="top"> 
                    <h1>Login Form </h1>
                    <img id="userIcon" src="./assets/user.png">
                </center>
    
    <tutorialForm></tutorialForm>
  </div>
</template>

<script>
import tutorialForm from './form/Form.vue'
export default {
  name: 'Header',
  components: {
    tutorialForm
  },
  data() {
      return {
      }
    }
}
</script>


<style scoped>
#userIcon{
	width:100px; 
	height: auto;
}

</style>
