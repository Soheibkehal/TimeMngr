<template>
  <div class="container">
    <br><br><br>
    <h1><img src="../../img/avatar_2.png" height="50px" width="50px" alt=""/>&emsp; &#160;My Account</h1>
    <br>
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <div class="form-control" placeholderr="Name" style="text-align:left" >
            <p><b>Name : </b></p> <form v-for="name in submittedNames" :key="name">{{ name }}</form>
          </div>        
        </div>
        <div class="form-group">
          <div class="form-control" placeholderr="Lname" style="text-align:left" >
            <p><b>Last Name :</b> Balakichenane</p>
          </div>        
        </div>
        <div class="form-group">
          <div class="form-control" placeholderr="Email" style="text-align:left" >
            <p><b>Email :</b> epitech@epitech.eu</p>
          </div>        
        </div>
        <div class="form-group">
          <div class="form-control" placeholderr="Role" style="text-align:left" >
            <p><b>Role :</b> Nothing</p>
          </div>        
        </div>
        <div class="form-group">
          <div class="form-control" placeholderr="Team" style="text-align:left" >
            <p><b>Team :</b> Nothing</p>
          </div>        
        </div>
        <button type="submit" class="btn btn-primary">Disconnect</button>
      </form>
    <div>


    <b-button v-b-modal.modal-prevent-closing>Update</b-button>
   <b-modal id="modal-prevent-closing" ref="modal" title="Submit Your Name" @show="resetModal" @hidden="resetModal" @ok="handleOk">
     <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required">
          <b-form-input id="name-input" v-model="name" :state="nameState" required ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
   

  
    </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
      return {
        name: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
};

</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  width: 50vw;
  height: 35vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
;
}
.container h1 {
  font-size: 1vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1vw 0 2vw;
  font-family: 'Montserrat', sans-serif;
}
.overlay-container {
  top: 8vw;
  left: 10vw;
  width: 20vw;
}
button {
  border-radius: 20px;
  background-color: #dfc824;
  color: #fff;
  margin-top : 1.5vw;
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  font-family: 'Montserrat', sans-serif;
}
.form-control{
  background-color: transparent;
  color : white;
  border: 0;
  border-bottom: 2px solid #dfc824;
}
input::placeholder{
  color : #dfc824;
}
input{
  background-color:white;
}
</style>
