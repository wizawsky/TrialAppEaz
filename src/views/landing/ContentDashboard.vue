                <template>  
                <!-- Begin Page Content -->
                <div class="container-fluid" style="">  
                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                             
                                <!-- Card Body -->
                                <div class="card-body">   <!-- Card Header - Dropdown -->
                                <div
                                    class="mb-2 py-1 d-flex flex-row align-items-center justify-content-between">
                                    <span class="m-0 font-weight-bold " style="color: #3A425E;">Statistik Customer &nbsp;&nbsp;<small>(01 Mei 2021 sd 10 Mei 2021)</small></span> 
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                        <line-view :host="host"  />
                                </div>
                            </div>
                        </div>



                        <!-- Pie Chart -->
                        <div class="col-xl-4">
                            <div class="card shadow mb-4"> 
                                <div class="card-body row d-flex"> 
                                    <h6 class="ml-3  mb-2 font-weight-bold text-biasa">Rata-Rata Usia Customer</h6>

                                        <bar-view class="ml-3" :host="host"/>
                                </div>
                            </div>
                        </div>



                         <div class="col-xl-4">


                            <!-- DONAT VIEW -->
                            <div class=" shadow mb-4 card">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Total Customer (Per Hari)</h6>
                                </div> 
                                <div class="card-body row d-flex">
                                    <donat-view :host="host" /> 
                                </div>
                            </div> 
                            <!-- DONAT VIEW -->



                            <div class=" shadow mb-4 card">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Total Customer (Per Tahun)</h6>
                                </div> 
                                <div class="card-body row d-flex"> 
                                        
                        <!-- Earnings (Monthly) Card Example -->
                        <div class=" col-md-6 mb-4">
                            <div class="card border-right-secondary h-100 py-2 shadow-sm">
                                <div class="card-body">
                                   <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="fomt-value mb-0 font-weight-bold text-biasa">250</div>
                                            <div class="fomt-text  text-gray-800 mb-1">
                                                Total</div>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn fea-bg shadow "><i class="fas fa-th-large  fa-1.5x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                     
                        <!-- Earnings (Monthly) Card Example -->
                        <div class=" col-md-6 mb-4">
                            <div class="card border-right-secondary h-100 py-2 shadow-sm">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="fomt-value mb-0 font-weight-bold text-biasa">51</div>
                                            <div class="fomt-text text-gray-800 mb-1">
                                                Bulan Ini</div>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn fea-bg shadow "><i class="fas fa-th-large  fa-1.5x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                         
                        <!-- Earnings (Monthly) Card Example -->
                        <div class=" col-md-6 mb-4">
                            <div class="card border-right-secondary h-100 py-2 shadow-sm">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="fomt-value mb-0 font-weight-bold text-biasa">51</div>
                                            <div class="fomt-text  text-gray-800 mb-1">
                                                Bulan Ini</div>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn fea-bg shadow "><i class="fas fa-th-large  fa-1.5x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                         
                        <!-- Earnings (Monthly) Card Example -->
                        <div class=" col-md-6 mb-4">
                            <div class="card border-right-secondary h-100 py-2 shadow-sm">
                                <div class="card-body">
                                   <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="fomt-value mb-0 font-weight-bold text-biasa">51</div>
                                            <div class="fomt-text  text-gray-800 mb-1">
                                                Bulan Ini</div>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn fea-bg shadow "><i class="fas fa-th-large  fa-1.5x text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    



                                </div>
                            </div>   

                        </div> 



                <div class="col-xl-5">
                            <div class=" shadow mb-4 card">
                            <div  class=" py-4 d-flex flex-row justify-content-start" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Konsultasi Dokter</h6>
                                </div>  
                    <div class="row justify-content-center d-flex mb-4">
                      <div class="row col-md-6 py-1 justify-content-start d-flex">

                     <div class="row no-gutters">
                          <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                    <div class="col-md-9  justify-content-start d-flex">
                      <div class="card-body">
                        <h6 class="text-biasa">Drs. Pinguinos Jal Jumados</h6>
                        <p class="card-text"><span class="rounded-pill bg-success text-biasa fomt" >&nbsp;&nbsp;&nbsp;Available&nbsp;&nbsp;&nbsp;</span></p>
                      </div>
                    </div>
                    </div>
                
                     <div class="row no-gutters">
                            <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                    <div class="col-md-9  justify-content-start d-flex">
                      <div class="card-body">
                        <h6 class="text-biasa">Drs. Pinguinos Ral Rala Fulia</h6>
                        <p class="card-text"><span class="rounded-pill bg-oatas text-biasa fomt" >&nbsp;&nbsp;&nbsp;Busy&nbsp;&nbsp;&nbsp;</span></p>
                      </div>
                    </div>
                    </div> 
                    </div> 

                  <div class="row col-md-6 py-1 justify-content-start d-flex">
                     <div class="row no-gutters">
                         <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                    <div class="col-md-9  justify-content-start d-flex">
                      <div class="card-body">
                        <h6 class="text-biasa">Drs. Pengunea La Sagna</h6>
                        <p class="card-text"><span class="rounded-pill bg-danger text-biasa fomt" >&nbsp;&nbsp;&nbsp;Offline&nbsp;&nbsp;&nbsp;</span></p>
                      </div>
                    </div>
                    </div>
                
                     <div class="row no-gutters">
                         <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                    <div class="col-md-9  justify-content-start d-flex">
                      <div class="card-body">
                        <h6 class="text-biasa">Drs. Pinguinos Wal Rios Afu</h6>
                        <p class="card-text"><span class="rounded-pill bg-oatas text-biasa fomt" >&nbsp;&nbsp;&nbsp;Busy&nbsp;&nbsp;&nbsp;</span></p>
                      </div>
                    </div>
                    </div> 
                    </div> 



                    </div>
                    </div>



                            <div class=" shadow mb-4 card">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Total Customer (Per Tahun)</h6>
                                </div> 
                                <div class="card-body row d-flex"> 
                                        
                        <!-- Earnings (Monthly) Card Example -->
                        <div class=" col-md-6 mb-4">

               
                        <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 1  <small  class="rounded-pill bg-oatas">&nbsp;&nbsp;&nbsp;&nbsp;Busy&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                            </div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                        </div>     

                        <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 2 <small  class="rounded-pill bg-success">&nbsp;&nbsp;Available&nbsp;&nbsp;</small>
                                            </div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                        </div> 

                    
                        <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 3 <small  class="rounded-pill bg-danger text-right">&nbsp;&nbsp;Offline&nbsp;&nbsp;</small></div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                        </div> 
                    </div>
                                  

                                                 <div class=" col-md-6 mb-4">

               
                        <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 1  <small  class="rounded-pill bg-oatas">&nbsp;&nbsp;&nbsp;&nbsp;Busy&nbsp;&nbsp;&nbsp;&nbsp;</small>
                                            </div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                        </div>     

                        <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 2 <small  class="rounded-pill bg-success">&nbsp;&nbsp;Available&nbsp;&nbsp;</small>
                                            </div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                        </div> 

                    
                                <div class=" col-md-12 mb-3 "> 
                                    <div class="row ">
                                        <div class="col-md-3 justify-content-start d-flex">
                                            <a class=" btn fea-bg btn"><i class="fas fa-th-large fa-1x  text-white"></i></a>
                                        </div>
                                        <div class="col-md-9 text-biasa fomt">
                                            <div class=" mb-0 font-weight-bold">Ruang 3 <small  class="rounded-pill bg-danger text-right">&nbsp;&nbsp;Offline&nbsp;&nbsp;</small></div>
                                            <div class="">Lolita - Therapist 1</div>
                                        </div>
                                    </div> 
                                </div> 

                    </div>


                            </div>
                        </div> 
                </div>

 
                       
                         <div class="col-xl-3">
                            <div class="shadow card mb-4">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Penilaian Terapis</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body ">
                                              <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                                        <div class="col-md-9">
                                          <div class="card-body">
                                            <h6 class="card-title text-biasa " >Drs. Teraphist Handal</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>


                                             <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                                        <div class="col-md-9">
                                          <div class="card-body">
                                            <h6 class="card-title text-biasa " >Drs. Teraphist Handal</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>

                                                    <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                                        <div class="col-md-9">
                                          <div class="card-body">
                                            <h6 class="card-title text-biasa " >Drs. Teraphist Handal</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star "></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>

                                                    <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-md-3 d-flex align-items-center text-center">
                                          <img :src="imgProfile" class="card-img mx-auto rounded-circle" style="width: 4rem;" alt="">
                                        </div>
                                        <div class="col-md-9">
                                          <div class="card-body">
                                            <h6 class="card-title text-biasa " >Drs. Teraphist Handal</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>

                                </div>
                            </div>  
                        </div>





            </div> 

                    <div class="row">
                        


                    </div>




                    </div>                 


</template>

 <script>     
import DonatView from '@/views/landing/chart/DonatView.vue'
import LineView from '@/views/landing/chart/LineView.vue'
import BarView from '@/views/landing/chart/BarView.vue'

    export default {
  name: 'Home',
  data() {
    let host = this.$laravel
    return {
               sections: [{ value: 25 }, { value: 25 }],
        msg: "Content Customer",
        imgProfile:  require('@/assets/'+'img/'+'prinny.png'),
        url:  this.$ownAddress,
        host,
      }
  },
  components:
  {
    DonatView, BarView, LineView
  }

}

 </script>
 