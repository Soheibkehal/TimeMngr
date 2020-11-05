<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <h1>SignIn</h1>
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            v-model="fname"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            v-model="lname"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            v-model="pwd"
          />
          <input
            type="password"
            placeholder="Confirm password"
            class="form-control"
            v-model="confirmPwd"
          />
        </div>
        <button v-on:click="signIn" type="button" class="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { register } from "../../api/account";

export default {
  name: "Signin",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      pwd: "",
      confirmPwd: "",
    };
  },
  methods: {
    async signIn() {
      if (this.pwd !== this.confirmPwd) {
        alert("Password and Confirm password are not the same !");
        return;
      }

      const user = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.pwd,
      };

      register
        .then((user) => {
          alert(`${user.fname} votre compte a été crée avec succès`);
        })
        .catch(() => alert("Un champ doit etre incorrect"));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1vw;
  width: 30vw;
  height: 30vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
}
.container h1 {
  display: flex;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1vw 0 2vw;
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
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
}
.form-group {
  border: 10px;
  overflow: hidden;
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
