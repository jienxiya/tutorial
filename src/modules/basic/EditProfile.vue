<template>
    <div>
        <b-card id="card" bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Personal Information"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Username:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street" v-model="form.Uname"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Email:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city" v-model="form.Email"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Current Password:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state" v-model="form.CurrentPass"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="New Password:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country" v-model="form.ChangePass"></b-form-input>
      </b-form-group>

      
    </b-form-group>
  </b-card>
    </div>
</template>
<style scoped>
  #card{
    margin: 10%;
  }
</style>
<script>
export default {
  data(){
    return{
      form: {
        Uname: "",
        Email: "",
        CurrentPass: "",
        ChangePass: ""
      }
    }
  }
}
</script>

