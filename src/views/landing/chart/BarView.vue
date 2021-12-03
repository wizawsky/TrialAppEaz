<template>
    <!-- <div class="">
      <button  class="btn btn-sm btn-secondary"  @click="freshData"> <i class="fa fa-sync-alt" aria-hidden="true"></i></button>&nbsp;
      <button  class="btn btn-sm btn-secondary"  @click="shuffleData">Shuffle</button> &nbsp;
    </div><br><br> -->
    <BarChart v-bind="barChartProps" /> 
</template>

<script>
import { BarChart, useBarChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "vue";
import { shuffle } from "lodash"; 
import axios from 'axios' 
export default defineComponent({
  name: "App",
  components: {
    BarChart,
  },
  props: {
    host: String
  },
  setup(props) { 
    const data = ref();
    const lable = ref();
    const legendTop = ref(true);
    const imgData = ref(null);

    const options = computed(() => ({
       legend: {
            display: false
         },
      responsive: true, 
      scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value) {
            return ''+value;
          }
        },
        gridLines: {
          color: "rgb(204, 206, 204)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    }));

    const chartData = computed(() => ({
      labels: lable.value,
      datasets: [
        {
          data: data.value,
          backgroundColor:"#FDC07C" ,

        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
      options,
    });

    axios.post(props.host+'chart/line')
            .then(response => {   
             let data1 = response.data.data.customer
             let data2 = response.data.data.date
             setdata(data1,data2)

            }).catch(error => {
                console.log(error.response.data)
            })
    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value; 
    }

    function setdata(a,b) {
      data.value = a;
      lable.value = b;
      legendTop.value = !legendTop.value; 
    }
 
 

    return { shuffleData,setdata, barChartProps, barChartRef, imgData };
  },
});
</script>
 