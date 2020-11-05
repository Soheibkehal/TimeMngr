<template>
  <div class="container-teams">
    <b-modal
      id="modal-team-update"
      title="Update team"
      hide-footer
      class="modal"
    >
      <div class="form-group">
        <input
          v-model="teamName"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="btn-modal">
        <button v-on:click="setUpdateTeam()">UPDATE</button>
      </div>
    </b-modal>

    <b-modal id="modal-user-add" title="Add user" hide-footer class="modal">
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Email"
          v-on:change="setUserByEmail"
        />
        <div class="list-container">
          <div class="team-element" v-for="user in emailUsers" :key="user.id">
            <p class="team">{{ user.email }}</p>
            <p class="p-btn" v-on:click="setNewUser(user.id)">ADD</p>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-team-add" title="Add team" hide-footer class="modal">
      <div class="form-group">
        <input
          v-model="teamName"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="btn-modal">
        <button v-on:click="setNewTeam()">CREATE</button>
      </div>
    </b-modal>

    <div id="team-container">
      <div class="upper-container">
        <h2>TEAMS</h2>
        <button
          v-on:click="selectTeam({})"
          v-b-modal.modal-team-add
          v-if="isManager"
        >
          ADD
        </button>
      </div>
      <div class="list-container">
        <div class="team-element" v-for="team in teams" :key="team.id">
          <p class="team" v-on:click="fetchUsers(team)">
            {{ team.team_name }}
          </p>
          <p
            class="p-btn"
            v-b-modal.modal-team-update
            v-on:click="selectTeam(team)"
            v-if="isManager"
          >
            Update
          </p>
          <p
            class="p-btn"
            v-on:click="setDeleteTeam(team.team_id)"
            v-if="isManager"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
    <div id="user-container">
      <div class="upper-container">
        <h2>USERS</h2>
        <button
          v-b-modal.modal-user-add
          v-if="this.teamSelected.team_id && isManager"
        >
          ADD
        </button>
      </div>
      <div class="list-container">
        <div class="team-element" v-for="user in users" :key="user.id">
          <p class="team">{{ user.user_email }}</p>
          <p class="p-btn" v-on:click="deleteUser(user.id)" v-if="isManager">
            Delete
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTeams,
  getUsers,
  deleteTeamUser,
  deleteTeam,
  changeTeamName,
  createTeam,
  changeTeamUser,
} from "../../api/teams";

import { getUsersByEmail } from "../../api/account";
import { role_id } from "../../config/constants";
export default {
  name: "Teams",
  data() {
    return {
      teams: [],
      users: [],
      teamSelected: {},
      email: "",
      emailUsers: [],
      teamName: "",
      isManager: role_id == 2,
    };
  },
  methods: {
    selectTeam(team) {
      this.teamSelected = team;
      this.teamName = team.team_name;
    },
    async setUserByEmail() {
      const users = await getUsersByEmail(this.email);
      this.emailUsers = users;
    },
    async fetchTeams() {
      const teams = await getTeams();
      this.teams = teams;
    },
    async fetchUsers(team) {
      this.selectTeam(team);
      const users = await getUsers(team.team_id);
      this.users = users;
    },
    async setUpdateTeam() {
      changeTeamName(this.teamName, this.teamSelected.team_id).then(
        async () => {
          await this.fetchTeams();
          this.$bvModal.hide("modal-team-update");
        }
      );
    },
    async setDeleteTeam(id) {
      await deleteTeam(id);
      await this.fetchTeams();
    },
    async deleteUser(id) {
      await deleteTeamUser(id);
      await this.fetchUsers(this.teamSelected);
    },
    async setNewTeam() {
      createTeam(this.teamName).then(async (team) => {
        await changeTeamUser(team.id);
        await this.fetchTeams();
        this.$bvModal.hide("modal-team-add");
      });
    },
    async setNewUser(id) {
      changeTeamUser(this.teamSelected.team_id, id).then(async () => {
        await this.fetchUsers(this.teamSelected);
      });
    },
  },
  created() {
    this.fetchTeams();
  },
};
</script>

<style lang="scss">
.team-element {
  display: flex;
  min-height: 3vw;
  border-bottom: 1px solid #161617;
  align-items: center;
  &:last-child {
    border: 0;
  }
  p.team {
    margin: 0;
    font-size: 1.2vw;
    font-weight: 700;
    cursor: pointer;
    color: white;
    width: 50%;
    color: #dfc824;
  }
  p.p-btn {
    color: #dfc824;
    font-size: 1vw;
    font-weight: 700;
    cursor: pointer;
    width: auto;
    margin: 0 1vw;
  }
}
h2 {
  text-align: left;
  color: white;
  width: 85%;
  margin: 1vw auto 0.3vw;
  font-size: 1vw;
  font-weight: 700;
}
.container-teams {
  display: flex;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-between;

  .upper-container {
    display: flex;
    align-items: center;
    margin-bottom: 1vw;
  }

  #team-container {
    width: 35%;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
      0px 10px 10px rgba(0, 0, 0, 0.2);
    background-color: #1f2224;
    border-radius: 2vw;
    padding: 1vw 1vw;
    .team-element {
      p.team {
        width: 60%;
        color: white;
      }
    }
  }

  #user-container {
    width: 60%;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
      0px 10px 10px rgba(0, 0, 0, 0.2);
    background-color: #1f2224;
    border-radius: 2vw;
    padding: 1vw 1vw;
    .team-element {
      p.team {
        width: 80%;
        color: white;
      }
    }
  }
}
</style>
