<template>
  <div id="card">
    <center>
      <h1>DASHBOARD</h1>
    </center>
    <hr>
    <div>
      <b-card-group deck>
        <b-card
          bg-variant="primary"
          text-variant="white"
          header="Add Course & Subject"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card
          bg-variant="secondary"
          text-variant="white"
          header="Edit Personal Info"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card
          bg-variant="info"
          text-variant="white"
          header="Info"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card
          bg-variant="warning"
          text-variant="white"
          header="Warning"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <sideBar></sideBar>
  </div>
</template>
<style scoped>
#card {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 2em;
}
#b-card {
  box-shadow: 5px 10px 8px #888888;
}
</style>

<script>
import sideBar from 'components/frame/sidebar.vue'
export default {
  name: 'card',
  component: {
      sideBar
  },
  methods: {}
};
</script>