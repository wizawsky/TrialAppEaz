<template>
    <div class="text-center">
      <button  class="btn btn-md btn-warning"  @click="shuffleData">Shuffle</button> &nbsp;&nbsp;&nbsp;  
      <button  class="btn btn-md btn-warning"  @click="shuffleEa">EA</button> &nbsp;&nbsp;&nbsp; 
    </div>
    <LineChart v-bind="lineChartProps" /> 
</template>

<script>
import { LineChart, useLineChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "vue";
import { shuffle } from "lodash";

export default defineComponent({
  name: "App",
  components: {
    LineChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
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
          data: data.value,
          label: "Pengunjung",
          lineTension: 0,
          backgroundColor: "rgb(255,200, 100, 0.2)",
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

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
      imgData.value = lineChartRef.value.chartInstance.toBase64Image();  
    }
 

    return {data, shuffleData, lineChartProps, lineChartRef, imgData };
  },
  mounted() {
    const gradientFill = this.$refs.lineChartRef.canvasRef.getContext('2d').createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
    gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
    console.log(gradientFill)
  },
  methods: {
    shuffleEa() {
      this.data.value = shuffle(this.data.value); 
      console.log(this.$refs)
    }
  }
});
</script>
 