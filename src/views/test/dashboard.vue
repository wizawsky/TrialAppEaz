<template>
	

                <!-- Begin Page Content -->
                <div class="container-fluid" style="">  
                    
                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <!-- Pie Chart -->
                        <div class="col-xl-4">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Rata-Rata Usia Customer</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-bar">
                                        <canvas id="myBarChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>



                         <div class="col-xl-4">
                            <div class=" shadow mb-4 card">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Total Customer (Per Hari)</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body row">
                                    <div class="chart-pie col-lg-5 py-1">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div class="mt-4 col-lg-5" style="text-align: left;">
                                        <span class="mr-2 text-center  font-weight-bold" style="color: #3A425E;">
                                         Total  
                                        </span><span class="mr-2 text-center  font-weight-bold" style="  font-size: xx-large;color: #3A425E;">
                                         30 
                                        </span><br><br>
                                        <span class="mr-2" style="color: #3A425E">
                                            <i class="fas fa-circle text-warning"></i> Therapist
                                        </span><br>
                                        <span class="mr-2" style="color: #3A425E;">
                                            <i class="fas fa-circle text-danger"></i> Konsultasi Dokter
                                        </span><br>
                                        <span class="mr-2" style="color: #3A425E;">
                                            <i class="fas fa-circle text-info"></i> Belum Ditangani
                                        </span>
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

      <div class="row col-6 py-1 ">
     <div class="row no-gutters">
    <div class="col-md-4 text-center">
      <img src="img/prinny.png" class="card-img rounded-circle" style="width: 4rem;height: 4rem;" alt="">
    </div>
    <div class="col-md-8  justify-content-start d-flex">
      <div class="card-body">
        <h6 class="font-weight-bold" style="text-align: left;color: #3A425E;">Drs. Pinguinos Wal Rios</h6>
        <p class="card-text"><button type="button" class="btn btn-sm btn-danger text-primary" >Offline</button></p>
      </div>
    </div>
    </div>
    </div>

    <div class="row col-6 py-1 justify-content-start">
  <div class="row no-gutters">
    <div class="col-sm-4 text-center">
      <img src="img/prinny.png" class="card-img rounded-circle" style="width: 4rem;height: 4rem;" alt="">
    </div>
    <div class="col-sm-8">
      <div class="card-body">
        <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA</h6>
        <p class="card-text"><button type="button" class="btn btn-sm btn-danger text-primary" >Offline</button></p>
      </div>
    </div>
    </div>
    </div>

     <div class="row col-6 py-1 ">
     <div class="row no-gutters">
    <div class="col-md-4 text-center">
      <img src="img/prinny.png" class="card-img rounded-circle" style="width: 4rem;height: 4rem;" alt="">
    </div>
    <div class="col-md-8  justify-content-start d-flex">
      <div class="card-body">
        <h6 class="font-weight-bold" style="text-align: left;color: #3A425E;">Drs. Pinguinos Wal Rios</h6>
        <p class="card-text"><button type="button" class="btn btn-sm btn-warning text-primary" >Busy</button></p>
      </div>
    </div>
    </div>
    </div>

    <div class="row col-6 py-1 justify-content-start">
  <div class="row no-gutters">
    <div class="col-sm-4 text-center">
      <img src="img/prinny.png" class="card-img rounded-circle" style="width: 4rem;height: 4rem;" alt="">
    </div>
    <div class="col-sm-8">
      <div class="card-body">
        <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA</h6>
        <p class="card-text"><button type="button" class="btn btn-sm btn-success text-primary" >Online</button></p>
      </div>
    </div>
    </div>
    </div>


    </div>
    </div>
</div>

 
                        <!-- Pie Chart -->
                       
                         <div class="col-xl-3">
                            <div class="shadow card mb-4">
                                <!-- Card Header - Dropdown -->
                                <div  class=" py-4 d-flex flex-row align-items-center justify-content-between" >
                                    <h6 class="m-0 font-weight-bold" style="color: #3A425E;"> &nbsp;&nbsp; &nbsp;&nbsp;Penilaian Terapis</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body ">
                                              <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-lg-2 text-center">
                                            <div class="col-xs-12" style="height:1rem"></div>
                                          <img src="img/prinny.png" class="card-img rounded-circle" style="width: 3rem;height: 3rem;" alt="">
                                        </div>
                                        <div class="col-lg-10">
                                          <div class="card-body">
                                            <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA SSD</h6>
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
                                        <div class="col-lg-2 text-center">
                                            <div class="col-xs-12" style="height:1rem"></div>
                                          <img src="img/prinny.png" class="card-img rounded-circle" style="width: 3rem;height: 3rem;" alt="">
                                        </div>
                                        <div class="col-lg-10">
                                          <div class="card-body">
                                            <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA SSD</h6>
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
                                        <div class="col-lg-2 text-center">
                                            <div class="col-xs-12" style="height:1rem"></div>
                                          <img src="img/prinny.png" class="card-img rounded-circle" style="width: 3rem;height: 3rem;" alt="">
                                        </div>
                                        <div class="col-lg-10">
                                          <div class="card-body">
                                            <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA SSD</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>


                                              <div class="row no-gutters d-flex align-items-start justify-content-start">
                                        <div class="col-lg-2 text-center">
                                            <div class="col-xs-12" style="height:1rem"></div>
                                          <img src="img/prinny.png" class="card-img rounded-circle" style="width: 3rem;height: 3rem;" alt="">
                                        </div>
                                        <div class="col-lg-10">
                                          <div class="card-body">
                                            <h6 class="card-title font-weight-bold" style="color: #3A425E;">Drs. Teraphist  MMAA SSD</h6>
                                            <p class="card-text">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            </p>
                                          </div>
                                        </div>
                                        </div>

                                </div>
                            </div>  
                        </div>

            </div> 




                    </div>

 
                </div>
                <!-- /.container-fluid -->
</template>