<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1 class="areaTitle">Average workging times</h1>
          <area-chart
            id="area_2"
            data='[
                  { "key": "2013", "value": 30 },
                  { "key": "2014", "value": 25 },
                  { "key": "2015", "value": 29 },
                  { "key": "2016", "value": 50 }
                ]'
            resize="true"
            line-colors='[ "#FF6384", "#36A2EB" ]'
            grid="true"
            grid-text-weight="bold"
          >
          </area-chart>
        </div>
        <div class="col-md-5">
        <h1 class="barTitle"> Average workings time</h1>
          <bar-chart
            id="bar"
            :data="barData"
            xkey="year"
            :ykeys="ykeys"
            resize="true"
            labels='[ "soheib", "jacques", "phillipe" ]'
            bar-colorssss='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
            :bar-colors="osColors"
            grid="true"
            grid-text-weight="bold"
          >
          </bar-chart>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Raphael from "raphael/raphael";
global.Raphael = Raphael;
import { BarChart, AreaChart } from "vue-morris";
export default {
  name: "app",
  data() {
    return {
      barData: [
        { year: "lundi", soheib: 10, jacques: 5, phillipe: 2 },
        { year: "mardi", soheib: 10, jacques: 15, phillipe: 3 },
        { year: "mercredi", soheib: 20, jacques: 25, phillipe: 2 },
        { year: "jeudi", soheib: 30, jacques: 20, phillipe: 1 },
      ],
      ykeys: ["soheib", "jacques", "phillipe"],
      lineData: [] /*[
        { year: '2013', a: 10, b: 5 },
        { year: '2014', a: 40, b: 15 },
        { year: '2015', a: 20, b: 25 },
        { year: '2016', a: 30, b: 20 },
      ],*/,
      donutData: [
        { label: "Red", value: 300 },
        { label: "Blue", value: 50 },
        { label: "Yellow", value: 100 },
      ],
      areaData: [
        { year: "2013", a: 30, b: 5 },
        { year: "2014", a: 25, b: 15 },
        { year: "2015", a: 29, b: 25 },
        { year: "2016", a: 50, b: 20 },
      ],
    };
  },
  components: {
    BarChart,
    AreaChart,
  },
};
</script>

