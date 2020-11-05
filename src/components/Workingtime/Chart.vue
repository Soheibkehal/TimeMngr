// <script>
// import { Line } from 'vue-chartjs'
// import {
//   getWorkingtimes,
// } from "../../api/workingtimes";

// export default {
//     name: "Chart",
//     extends: Line,
//     data() {
//         return {
//             chartdata: {
//                 labels: ['Monday', 'Tuesday', 'Wednesday'],
//                 datasets: [
//                     {
//                     label: 'Worked time',
//                     backgroundColor: '#f87979',
//                     data: [40, 60, 50]
//                     },
//                     {
//                     label: 'Working times',
//                     backgroundColor: '#0099ff',
//                     data: [50, 60, 50]
//                     },
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         }
//     },
//   mounted () {
//     this.renderChart(this.chartdata, this.options);
//     console.log("mounted")
//   }
// }
// </script>
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>