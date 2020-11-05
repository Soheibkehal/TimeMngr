<template>
  <div class="container">
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Change names"
      hide-footer
    >
      <input v-model="user.fname" placeholder="First name" class="my-4" />
      <input v-model="user.lname" placeholder="Last name" class="my-4" />
      <div class="btn-modal">
        <button v-on:click="setUpdateUser()">UDPATE</button>
      </div>
    </b-modal>
    <h1>
      <img
        src="../../assets/avatar_2.png"
        height="50px"
        width="50px"
        alt=""
      />&emsp; &#160;My Account
    </h1>
    <br />
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <div class="form-control" placeholderr="Name" style="text-align:left">
            <p><b>Name : </b>{{ user.fname }}</p>
          </div>
        </div>
        <div class="form-group">
          <div
            class="form-control"
            placeholderr="Lname"
            style="text-align:left"
          >
            <p><b>Last Name :</b> {{ user.lname }}</p>
          </div>
        </div>
        <div class="form-group">
          <div
            class="form-control"
            placeholderr="Email"
            style="text-align:left"
          >
            <p><b>Email :</b> {{ user.email }}</p>
          </div>
        </div>
        <div class="form-group">
          <div class="form-control" placeholderr="Role" style="text-align:left">
            <p><b>Role :</b> {{ user.role_name }}</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="disconnect">
          Disconnect
        </button>
      </form>
      <div>
        <b-button v-b-modal.modal-prevent-closing>Update</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, modifyUser } from "../../api/account";

export default {
  name: "MyAccount",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async fetchUser() {
      const user = await getUser();
      this.user = user;
    },
    async setUpdateUser() {
      modifyUser({ user: this.user }).then(async () => {
        await this.fetchUser();
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    disconnect() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.my-4 {
  background-color: transparent;
  color: black;
  border: 0;
  border-bottom: 2px solid #dfc824;
  text-align: left;
  margin-bottom: 4vw;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  width: 50vw;
  height: 40vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
}
.container h1 {
  font-size: 1vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1vw 0 2vw;
  font-family: "Montserrat", sans-serif;
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
  margin-top: 1.5vw;
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  font-family: "Montserrat", sans-serif;
}
.form-control {
  background-color: transparent;
  color: white;
  border: 0;
  border-bottom: 2px solid #dfc824;
}
input::placeholder {
  color: #dfc824;
}
input {
  background-color: white;
}
</style>
