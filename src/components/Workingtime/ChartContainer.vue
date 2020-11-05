<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import {
    WorkedtimesforChart
} from "../../api/workingtimes";

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null
  }),
  async mounted () {
    this.loaded = false
    try {
      const workedtimesforChart = await WorkedtimesforChart();
      console.log(workedtimesforChart);
      this.chartdata = workedtimesforChart
      this.loaded = true
      this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  max: 24
              }
          }]
      },
      animateScale: true,
  }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>