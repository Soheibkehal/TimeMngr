<template>
  <div class="container">
    <div>
      <h1>
        <b> Users </b>
        <input
          type="text"
          v-model="search"
          class="search"
          placeholder="Search User"
        />
      </h1>
    </div>
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <div
            v-for="user in filterUser"
            v-bind:key="user"
            class="form-control"
          >
            <p>
              <b>{{ user.fname }} </b> {{ user.lname }}
            </p>
            <b-button v-b-modal.modal-1>Modifiy</b-button>

            <b-modal id="modal-1" title="User Profil">
              <input type="text" class="my-4" placeholder="Modify FirstName" />
              <input type="text" class="my-4" placeholder="Modify LastName" />
              <input type="text" class="my-4" placeholder="Modify Email" />
              <select v-model="Role">
                <option disabled value="">Role</option>
                <option value="1">Admin</option>
                <option value="2">Manager</option>
                <option value="3">Employee</option>
              </select>
              <span>Role : {{ Role }}</span>
            </b-modal>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import $ from "jquery";
export default {
  name: "users",
  data() {
    return {
      search: "",
      users: [],
      Role: ''
    };
  },
  computed: {
    filterUser() {
      return this.users.filter((user) => {
        return user.fname.match(this.search);
      });
    },
  },
  created() {
    axios
      .get(`http://localhost:4000/api/users`)
      .then((Response) => (this.users = Response.data.data));
  },
  methods: {
    // itemClicked(user) {
    //   $("#modal-1").modal("show");
    // },
  },
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
  width: 30vw;
  height: 35vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
}
.overlay-container {
  top: 8vw;
  left: 10vw;
  width: 20vw;
}
.container h1 {
  text-align: center;
  font-size: 1vw;
  margin-top: -5vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.container .search {
  background-color: transparent;
  color: white;
  border: 0;
  border-bottom: 2px solid #dfc824;
}
.search::placeholder {
  color: #dfc824;
}
.form-control {
  background-color: transparent;
  color: white;
  border: 0;
  border-bottom: 2px solid #dfc824;
  text-align: left;
  margin-bottom: 4vw;
}
.my-4 {
  background-color: transparent;
  color: black;
  border: 0;
  border-bottom: 2px solid #dfc824;
  text-align: left;
  margin-bottom: 4vw;
}
button {
  border-radius: 15px;
  background-color: #dfc824;
  color: #fff;
  font-size: 0.5vw;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  margin-left: 16vw;
  margin-top: -5vw;
}
input {
  background-color: white;
}
#modal-1 {
  background-color: black;
}
</style>