<template>
  <div class="container-teams">
    <div id="team-container">
      <div class="upper-container">
        <h2>TEAMS</h2>
        <button>ADD</button>
      </div>
      <div class="list-container">
        <div class="team-element">
          <p class="team">Equipe administative</p>
          <p class="p-btn">Update</p>
          <p class="p-btn">Delete</p>
        </div>
        <div class="team-element">
          <p class="team">Equipe administative</p>
          <p class="p-btn">Update</p>
          <p class="p-btn">Delete</p>
        </div>
      </div>
    </div>
    <div id="user-container">
      <div class="upper-container">
        <h2>USERS</h2>
        <button>ADD</button>
      </div>
      <div class="list-container">
        <div class="team-element">
          <p class="team">Hugo DEL PIA</p>
          <p class="p-btn">Delete</p>
        </div>
        <div class="team-element">
          <p class="team">William SAURHIN</p>
          <p class="p-btn">Delete</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",
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
