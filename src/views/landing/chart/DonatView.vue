<template>  
                                    <div class="col-5 "> 
                              <DoughnutChart :chartData="testData" :options="options" />
                                    </div>
                                    <div class="col-7 align-items-start">  
                                     <span class="mr-2   font-weight-bold" style="color: #3A425E;">
                                         Total  
                                        </span>
                                        <span class="mr-2 text-center  font-weight-bold" style="  font-size: xx-large;color: #3A425E;">
                                        {{val1total}} 
                                        </span>
                                        <h6 class="mr-2 " style="color: #3A425E;"><i class="fas fa-fw fa-square" style="color: #28587B"></i>{{ val1[0] +" "+ val2[0] }}</h6>
                                        <h6 class="mr-2 " style="color: #3A425E;"><i class="fas fa-fw fa-square" style="color: #FFC700"></i>{{ val1[1] +" "+ val2[1] }}</h6>
                                        <h6 class="mr-2 " style="color: #3A425E;"><i class="fas fa-fw fa-square" style="color: #FD7E86"></i>{{ val1[2] +" "+ val2[2] }}</h6> 

                                       <!-- <button class="btn btn-md btn-warning" @click="shuffleData">Shuffle</button> --> 
                                    </div>
</template>
 <script>     
import { shuffle } from 'lodash';
import { defineComponent,ref,computed } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
    import axios from 'axios' 

    export default  defineComponent({
  name: 'Home',
  data() {  return {
               sections: [{ value: 25 }, { value: 25 }],
        msg: "Content Customer", 
      }
  },
  components: { DoughnutChart },
  props: {
    host: String
  },
  setup(props) { 
    const val1 = ref([1,1,1]); // Belum Ditangani
    const val2 =  ref(['Belum Ditangani', 'Therapist', 'Konsultasi Dokter']);
    const val3 =  ref(['#28587B', '#FFC700', '#FD7E86']);

    let val1total =ref(0);

   /* const testData = {
      labels: ['Belum Ditangani', 'Therapist', 'Konsultasi Dokter' ],
      datasets: [
        {
          data: [val1[0], val1[1], [2] ],
          backgroundColor: ['#28587b', '#ffc700', '#fd7e86' ],
        },
      ], 
    };*/
 
    const doughnutRef = ref();

    const options = ref({
     legend: {
            display: false
         },
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    });

    const testData = computed(() => ({
      labels: val2.value,
      datasets: [
        {
          data: val1.value,
          backgroundColor: val3.value,
        },
      ],
    }));
    let datas = props.host+'chart/donut';
  axios.post(datas)
              .then(response => {   
               let data1 = response.data.data.value
               let data2 = response.data.data.type
               setdata(data1,data2)
               val1total.value = data1[0] + data1[2] + data1[1] 
              }).catch(error => {
                  console.log(error.response.data)
              })

    function setdata($data1,$data2) {
      val1.value =  $data1
      val2.value =  $data2 
    }

    function shuffleData() {
      val1.value = shuffle(val1.value);
    }

    return { testData, shuffleData, doughnutRef, options,val1,val2,val3,val1total };
  },
});

 </script>
 