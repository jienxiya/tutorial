<template>
  <div id="card">
    <center>
      <h1>COURSES</h1>
    </center>
    <hr>
    <div>
      <b-card-group deck>
        <b-card
          bg-variant="primary"
          text-variant="white"
          header="Web Development III"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card
          bg-variant="secondary"
          text-variant="white"
          header="Java II"
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
          header="Big Data & NoSQL"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card
          bg-variant="warning"
          text-variant="white"
          header="SD Elective II"
          class="text-center"
          id="b-card"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <br>
    <br>
    <div>
      <b-button block variant="outline-primary" v-b-toggle.collapse-2 class="m-1">Add Course</b-button>
      <b-collapse visible id="collapse-2">
        <b-card>
          <b-form @submit="onAdd">
            <b-form-group id="input-group-4" label="Course" label-for="input-4">
              <b-form-input id="input-4" v-model="form.course" placeholder="Course"></b-form-input>
            </b-form-group>
            <br>
            <b-form-group id="input-group-5" label="Year" label-for="input-5">
              <b-form-input id="input-5" v-model="form.year" placeholder="Year"></b-form-input>
            </b-form-group>
            <br>
            <center>
              <b-button type="submit" variant="outline-primary">Add</b-button>
            </center>
          </b-form>
        </b-card>
      </b-collapse>
    </div>
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
import AUTH from "services/auth";
export default {
  data() {
    return {
      form: {
        course: "",
        year: ""
      }
    };
  },
  methods: {
    onAdd(e) {
      e.preventDefault();
      AUTH.addCourse(this.form.course, this.form.year);
    }
  }
};
</script>


