<template>
    <div class="text-center">
      <button  class="btn btn-md btn-warning"  @click="shuffleData">Shuffle</button> &nbsp;&nbsp;&nbsp;
      <button  class="btn btn-md btn-warning"  @click="zoom">Zoom</button>
    </div>
    <LineChart v-bind="lineChartProps" /> 
</template>

<script>
import { LineChart, useLineChart } from "vue-chart-3";
import { computed, defineComponent } from "vue";
import { shuffle } from "lodash";

export default defineComponent({
  name: "App",
  components: {
    LineChart,
  },
  data() {
    const datas = [30, 40, 60, 70, 5]; 
    const imgData = null; 
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
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    }, 
    })); 

    const chartData = computed(() => ({
       labels: ["01 Mei", "02 Mei", "03 Mei", "04 Mei", "05 Mei", "06 Mei", "07 Mei", "08 Mei", "09 Mei", "10 Mei"],
       datasets: [
        {
          data: datas,
          label: "Pengunjung",
          lineTension: 0,
          backgroundColor: "linear-gradient(1deg, rgb(1, 1, 1), rgb(255, 255, 255))",
          borderColor: "rgb(237, 112, 128)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(237, 112, 128, 1)",
          pointBorderColor: "rgba(237, 112, 128, 1)",
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
    
 

    return {
     datas, 
     chartData,
     options,
     lineChartProps, 
     lineChartRef, 
     imgData 
   };
  },
  methods :{
    shuffleData() {
      this.datas = shuffle(this.datas); 
      console.log(this.imgData)
      //this.imgData = this.lineChartRef.chartInstance.toBase64Image();
     // this.lineChartRef.value.chartInstance.resetZoom();
    }
  }

});
</script>
 