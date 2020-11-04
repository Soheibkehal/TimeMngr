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
          v-model="teamSelected.team_name"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="btn-modal">
        <button v-on:click="setUpdateTeam()">UPDATE</button>
      </div>
    </b-modal>

    <b-modal id="modal-user-add" title="Add team" hide-footer class="modal">
      <div class="form-group">
        <input
          v-model="teamSelected.team_name"
          type="text"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="btn-modal">
        <button v-on:click="setNewUser()">CREATE</button>
      </div>
    </b-modal>

    <b-modal id="modal-team-add" title="Add team" hide-footer class="modal">
      <div class="form-group">
        <input
          v-model="teamSelected.team_name"
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
        <button v-on:click="selectTeam({})" v-b-modal.modal-team-add>
          ADD
        </button>
      </div>
      <div class="list-container">
        <div class="team-element" v-for="team in teams" :key="team.id">
          <p class="team" v-on:click="fetchUsers(team.team_id)">
            {{ team.team_name }}
          </p>
          <p
            class="p-btn"
            v-b-modal.modal-team-update
            v-on:click="selectTeam(team)"
          >
            Update
          </p>
          <p class="p-btn" v-on:click="setDeleteTeam(team.team_id)">Delete</p>
        </div>
      </div>
    </div>
    <div id="user-container">
      <div class="upper-container">
        <h2>USERS</h2>
        <button>ADD</button>
      </div>
      <div class="list-container">
        <div class="team-element" v-for="user in users" :key="user.id">
          <p class="team">{{ user.user_email }}</p>
          <p class="p-btn" v-on:click="deleteUser(user.id)">Delete</p>
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

export default {
  name: "Teams",
  data() {
    return {
      teams: [],
      users: [],
      teamSelected: {},
    };
  },
  methods: {
    async fetchTeams() {
      const teams = await getTeams();
      this.teams = teams;
    },
    async fetchUsers(team_id) {
      const users = await getUsers(team_id);
      this.users = users;
    },
    async deleteUser(id) {
      await deleteTeamUser(id);
      await this.fetchTeams();
    },
    selectTeam(team) {
      this.teamSelected = team;
    },
    async setUpdateTeam() {
      changeTeamName(
        this.teamSelected.team_name,
        this.teamSelected.team_id
      ).then(async () => {
        await this.fetchTeams();
        this.$bvModal.hide("modal-team-update");
      });
    },
    async setDeleteTeam(id) {
      await deleteTeam(id);
      await this.fetchTeams();
    },
    async setNewTeam() {
      createTeam(this.teamSelected.team_name).then(async (team) => {
        await changeTeamUser(team.id);
        await this.fetchTeams();
        this.$bvModal.hide("modal-team-update");
      });
    },
  },
  created() {
    this.fetchTeams();
  },
};
</script>

<style lang="scss">
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
      }
    }
  }
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
    }
    p.team:hover {
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
}
</style>
