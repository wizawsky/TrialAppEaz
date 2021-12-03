<template><!--
    <div class="">
      <button  class="btn btn-sm btn-secondary"  @click="shuffleEa"> <i class="fa fa-sync-alt" aria-hidden="true"></i></button>&nbsp;
      <button  class="btn btn-sm btn-secondary"  @click="shuffleData">Shuffle</button> &nbsp;
    </div>-->
    <LineChart v-bind="lineChartProps" /> 
</template>

<script>
import { LineChart, useLineChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "vue";
import { shuffle } from "lodash";
import axios from 'axios' 

export default defineComponent({
  name: "App",
  components: {
    LineChart,
  },
  setup() {
    const data = ref([30]);
    const labelz = ref( ["01 Mei"]);
    const legendTop = ref(true);
    const imgData = ref(null);

    const options = computed(() => ({
       legend: {
            display: false
         },
       maintainAspectRatio: false,
     layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    }, 
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
          color: "#FF7A00",
          zeroLineColor: "#FF7A00",
          drawBorder: false,
          borderDash: [1],
          zeroLineBorderDash: [1900]
        }
      }],
    },

    }));

    const chartData = computed(() => ({
       labels: labelz.value,
       datasets: [
        {
          data: data.value,
          label: "Pengunjung",
          tension: 0.5, 
          borderWidth: 0.5,
          backgroundColor: "rgb(255,200, 100, 0)",
          borderColor: "#FF7A00",
          pointRadius: 3,
          pointBackgroundColor: "#FF7A00",
          pointBorderColor: "#FF7A00",
          pointHoverRadius: 3, 
          pointHitRadius: 10,
          pointBorderWidth: 2,
        },
      ], 
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData,
      options,
    }); 
     axios.post('http://localhost:8000/api/chart/line')
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
      imgData.value = lineChartRef.value.chartInstance.toBase64Image();  
    }

    function setdata($data1,$data2) {
      data.value =  $data1
      labelz.value =  $data2 
    }

    function shuffleEa() {
      let data1 = [0];
      let data2 = ["01 Mei"] 
     axios.post('http://localhost:8000/api/chart/line')
            .then(response => {   
             data1 = response.data.data.customer
             data2 = response.data.data.date
             setdata(data1,data2)

            }).catch(error => {
                console.log(error.response.data)
            })

      legendTop.value = !legendTop.value; 
    }
    return {data,shuffleEa,setdata, labelz,shuffleData, lineChartProps, lineChartRef, imgData };
  }, 

});
</script>
 