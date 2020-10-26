<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <form>
            <div class="form-group">
              <input
                type="text"
                placeholder="Current User"
                class="form-control"
                id="CurrentUser"
              />
            </div>
            <div>
              <p class="UserName">
                Employé :
              </p>
              <p class="UserRole">
                Role :
              </p>
               <p class="UserTeam">
                 Team :
               </p>
            </div>
          </form>
        </div>
        <div class="col-md-6">milieu</div>
        <div class="col-md-3">droite</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
#CurrentUser {
  border: 10px;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
}
p{
  color : white;
}
.UserName{
  width: 50px;
}
</style>