<template>
  <div class="container">
    <h1>LogIn</h1>
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">LogIn</button>
        <button v-on:click="Destroy" type="submit" class="btn btn-primary">Disconnect</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",


  methods:{
    Destroy(){
    localStorage.clear();
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
  margin-top: 5vw;
  width: 30vw;
  height: 30vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
;
}
.container h1 {
  text-align: center;
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