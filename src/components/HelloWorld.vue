  <template>
  <div class="container-dashboard">
    <div id="clock-container">
      <div id="clock">
        <button class="btn">START SESSION</button>
        <p>Session finished at 17:00:00</p>
      </div>
    </div>
    <div id="calendar">
      <h2>Working times</h2>
      <ul>
        <li>
          <div class="date">
            <h3 class="day">26</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 17:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">25</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">24</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">23</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">22</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">21</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">20</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>14:30 → 18:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
        <li>
          <div class="date">
            <h3 class="day">19</h3>
            <h3 class="month">Oct</h3>
          </div>
          <div class="session">
            <p>8:30 → 12:30</p>
            <p>14:30 → 18:30</p>
            <p>18:30 → 21:30</p>
            <p class="add-link">Ajouter une session</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss">
.container-dashboard {
  display: flex;
  width: 70%;
  margin: 0 auto;
  #clock-container {
    width: 30%;
    #clock {
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
        0px 10px 10px rgba(0, 0, 0, 0.2);
      background-color: #1f2224;
      border-radius: 2vw;
      padding: 3vw 1vw;
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
      p {
        color: white;
        font-size: 1vw;
        margin-top: 1vw;
      }
    }
  }
  #calendar {
    width: 68%;
    margin-left: 2%;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
      0px 10px 10px rgba(0, 0, 0, 0.2);
    background-color: #1f2224;
    border-radius: 2vw;
    h2 {
      text-align: left;
      color: white;
      width: 85%;
      margin: 1vw auto 0.3vw;
      font-size: 1vw;
      font-weight: 700;
    }
    ul {
      padding: 0;
      width: 90%;
      margin: 0 auto 2vw;
      border-radius: 1vw;
      li {
        display: flex;
        min-height: 6vw;
        justify-content: center;
        border-bottom: 1px solid #161617;
        align-items: center;
        &:last-child {
          border: 0;
        }
        .date {
          width: 20%;
          h3.day {
            color: #dfc824;
            font-size: 1.9vw;
            margin: 0;
            font-weight: 700;
          }
          h3.month {
            color: white;
            font-size: 1vw;
            margin: 0;
          }
        }
        .session {
          width: 80%;
          display: flex;
          flex-direction: column;
          p {
            text-align: center;
            margin: 0;
            color: white;
            font-size: 1vw;
            cursor: pointer;
          }
          p:hover {
            color: #dfc824;
          }
          p.add-link {
            color: #dfc824;
            font-size: 0.8vw;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>