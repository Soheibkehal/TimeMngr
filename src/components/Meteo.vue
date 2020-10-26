<template>
<div>
    <div class=location>
        <h1> Ou ?</h1>  
    </div>
    <div class=city>
        <br>
        <input type="text" v-model="ville" placeholder="Write city" @keypress="refreshCityTemperature">
    </div>
    <div class=button>
        <button @click="refreshCityTemperature"  type="button" id="SearchButton"> Météo Actuelle </button>
    </div>
    <div class="meteo">
        <h1 id="MeteoActuelle"> Météo actuelle à {{ ville }} </h1>
        <p> Temperature : {{ temp }} °c </p>
        
        <p>date : {{ today }} </p>
        <p id="carre">
        </p>
    </div>
</div>
</template>


<script>
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
  name: 'Meteo',
  data() { 
    return {
      temp: '', /*Math.floor(Math.random() * (30 - 10) ) + 10,*/
      today: moment().format('Do MMMM  YYYY'),
      ville: '',
      url_api: 'https://api.openweathermap.org/data/2.5/',
      city: {},
      cities: [
            {
                id: "PAR", nameID: "Paris"
            },
            {
                id: "MAR", nameID: "Marseille"
            },
            {
                id: "LYO", nameID: "Lyon"
            }            
      ]  
    }
  },
  created() {
    this.city = this.cities[0];
    this.displayedCity = this.city;
  },
  methods: {
      refreshCityTemperature(e){
            //this.displayedCity = this.city;
            //${this.url_api}weather?q=${this.ville}&mode=json&units=metric&APPID=efa3a6455c9b0c8d4265877f5b2474c2
            if (e.key  == "Enter"){
                axios.get(`http://10.41.170.91:4000/api/users/${this.ville}`)
                .then(Response => this.temp = Response.data.data.fname);
            }
        }
  }

  
}
</script>

<style>
    #carre{
        width: 900px; 
        height: 200px; 
        background-color:#F0F0F0;
        margin-left: auto;
        margin-right: auto;
        margin-top: -150px;
    }
    #MeteoActuelle{
        margin-top:200px;
    }
    #SearchButton{
        margin-top: 20px;
        margin-left:-100px;
        color : black;
        /*background-color : #0EBFE9;*/
    }
    #select{
        width:600px;
        height: 20px;
    }
</style>