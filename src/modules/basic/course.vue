<template>
  <div id="card">
    <center>
      <div>
        <h1 id="kurses">Courses:</h1>
      </div>
      <hr>
      <b-card id="b-card" >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Course</th>
              <th scope="col">Year</th>
              <th scope="col">Schedule</th>
              <th scope="col">Room</th>
              <th scope="col">Teacher</th> 
              <!-- <th scope="col">Action</th>             -->
            </tr>
          </thead>
          <tbody v-for="(item, index) in this.rows" :key="index">
            <tr>
              <td>{{ item.course }}</td>
              <td>{{ item.year }}</td>
              <td>{{ item.schedule }}</td>
              <td>{{ item.room }}</td>
              <td>{{ item.teacher }}</td>
              <!-- <td><b-button variant="outline-primary" @click="remove()">Remove</b-button></td> -->
            </tr>
          </tbody>
        </table>
      </b-card>
      <hr>
      <div id="porm">
        <b-button block variant="outline-primary" v-b-toggle.collapse-2 class="m-1">Add Course</b-button>
        <b-collapse id="collapse-2">
          <b-card>
            <b-form-group>
              <label id="course">Course:</label>
              <b-form-input required v-model="info.course" id="subject"></b-form-input>
              <br>
              <label id="year">Year:</label>
              <b-form-input required v-model="info.year" id="year"></b-form-input>
              <br>
              <label id="sched">Schedule:</label>
              <b-form-input required v-model="info.schedule" id="time"></b-form-input>
              <br>
              <label id="room">Room:</label>
              <b-form-input required v-model="info.room" id="room"></b-form-input>
              <br>
              <label id="teacher">Teacher:</label>
              <b-form-input required v-model="info.teacher" id="teacher"></b-form-input>
              <br>
              <b-button variant="primary" @click="addItem">Add Subject</b-button>
            </b-form-group>
          </b-card>
        </b-collapse>
      </div>
      <div>
        <b-button block variant="outline-primary" v-b-toggle.collapse-2 class="m-1">Remove Course</b-button>
        <b-collapse id="collapse-2">
          <b-card>
            <b-form-group>
              <label id="course">Course:</label>
              <b-form-input required v-model="delInfo.delCourse" id="subject"></b-form-input>
              <br>
              <br>
              <b-button variant="primary" @click="remove">Remove</b-button>
            </b-form-group>
          </b-card>
        </b-collapse>
      </div>    
    </center>
  </div>
</template>


<style>
#card {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
.table,#b-card{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  overflow-x:auto;
}
#kurses {
  text-align: center;
}
</style>

<script>
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth: AUTH,
      rows: [],
      delInfo: {
        delCourse: "",
      },
      info: {
        course: "",
        year: "",
        schedule: "",
        room: "",
        teacher: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        course: this.info.course,
        year: this.info.year,
        schedule: this.info.schedule,
        room: this.info.room,
        teacher: this.info.teacher,
      };
      AUTH.addCourse(this.info.course,this.info.year,this.info.schedule,this.info.room,this.info.teacher)
      this.rows.push(object);
      this.info.course = "";
      this.info.year= "",
      this.info.schedule = "";
      this.info.room = "";
      this.info.teacher = "";
      
    },
    remove(){
      for(let i=0;i<this.rows.length;i++){
        if(this.rows[i].course === this.delInfo.delCourse){
          this.rows.splice(this.rows.indexOf((this.rows[i]),1))
        }

      }
    }
  }
};
</script>  