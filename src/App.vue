<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div id="nav">
      <router-link to="/teams" v-if="isAuth">Teams</router-link>
      <router-link to="/myaccount" v-if="isAuth">Profile</router-link>
      <router-link to="/" v-if="isAuth">Dashboard</router-link>
      <router-link to="/users" v-if="isAdmin && isAuth">Users</router-link>
      <router-link to="/login" v-if="!isAuth">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { user_id } from "./config/constants";
import { role_id } from "./config/constants";
export default {
  data() {
    return {
      isAuth: false,
      isAdmin: role_id == 3,
    };
  },
  created() {
    this.isAuth = user_id;
  },
};
</script>

<style>
html,
body {
  background-color: #161617;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
body {
  margin: 0;
}
p,
input::placeholder {
  font-family: "Lato", sans-serif;
}
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfc824;
}

#nav {
  padding: 2vw;
  width: 20%;
}

#nav a {
  left: 25%;
  font-weight: bold;
  font-family: Montserrat;
  color: white;
}
#nav a::after {
  content: "|";
  margin: 1vw;
}

#nav a.router-link-exact-active {
  color: #dfc824;
}
</style>
