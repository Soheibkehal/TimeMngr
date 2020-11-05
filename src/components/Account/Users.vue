<template>
  <div class="container">
    <b-modal id="modal-1" title="User Profile" hide-footer>
      <input
        type="text"
        class="my-4"
        placeholder="First name"
        v-model="userSelected.fname"
      />
      <input
        type="text"
        class="my-4"
        placeholder="Last name"
        v-model="userSelected.lname"
      />
      <input
        type="text"
        class="my-4"
        placeholder="Email"
        v-model="userSelected.email"
      />
      <select v-model="userSelected.role_id">
        <option disabled value="">Role</option>
        <option value="3">Admin</option>
        <option value="2">Manager</option>
        <option value="1">Employee</option>
      </select>
      <div class="btn-modal">
        <button v-on:click="setUpdateUser()">UDPATE</button>
      </div>
    </b-modal>
    <div>
      <b> Users </b>
      <input
        type="text"
        v-model="search"
        class="search"
        placeholder="Search User"
      />
    </div>
    <div v-for="user in filterUser" :key="user.id" class="user-wrapper">
      <p>
        <b>{{ user.fname }} </b> {{ user.lname }}
      </p>
      <button v-b-modal.modal-1 v-on:click="selectUser(user)">Modify</button>
    </div>
  </div>
</template>

<script>
import { getUsers, modifyUserAdmin } from "../../api/account";
export default {
  name: "users",
  data() {
    return {
      search: "",
      users: [],
      userSelected: {},
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
    this.fetchUsers();
  },
  methods: {
    selectUser(user) {
      this.userSelected = user;
    },
    async fetchUsers() {
      this.users = await getUsers();
    },
    async setUpdateUser() {
      modifyUserAdmin(this.userSelected).then(async () => {
        this.$bvModal.hide("modal-1");
        this.fetchUsers();
      });
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  width: 60vw;
  height: 35vw;
  border-radius: 2vw;
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
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
.search {
  margin: 3vw;
}
.search::placeholder {
  color: #dfc824;
}
.user-wrapper {
  background-color: transparent;
  color: white;
  border: 0;
  text-align: left;
  margin-bottom: 4vw;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
p {
  margin: 0;
}
.my-4 {
  background-color: transparent;
  color: black;
  border: 0;
  border-bottom: 2px solid #dfc824;
  text-align: left;
  margin-bottom: 4vw;
}

input {
  background-color: white;
}
#modal-1 {
  background-color: black;
}
</style>
