<template>
              

                <!-- Begin Page Content -->
                <div class="container-fluid">
  
                    <!-- Content Row -->
                    <div class="row">
                      <div class="col-lg-5">
                        
                        <!-- Pie Chart --> 
                            <div class="card shadow mb-4"> 
                                <div class="card-body row d-flex"> 

                                     <div class="col-md-9 mb-3"> 
                        <div class="input-group shadow-sm"> 
                              <div class="input-group-prepend">
                                <div class="input-group-text bg-oatas border-0"><i class="far fa-user fa-sm text-warning"></i></div>
                              </div>
                            <input type="text"  v-model="name" class="form-control bg-white border-0 small" placeholder="Member..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-white" type="button">
                                    <i class="fas fa-search fa-sm text-warning"></i>
                                </button>
                            </div>
                        </div>  
                      </div> 
                      <div class="col-md-3"></div> 
                       <div class="col-md-12 mb-2 border-0 fomt-text1">  
                     <div class="table-responsive card shadow-none mb-5 border-0">
                                   <table class="table table-borderless border-0"   id="dataTable" width="100%" cellspacing="0">
                                    <thead class="card-header py-3 bg-oatas border-0 text-biasa">
                                        <tr> 
                                        <th><label >Item</label></th>
                                        <th><label >Price</label></th>
                                        <th><label >Qty</label></th>
                                        <th><label >Disc</label></th> 
                                        <th><label >Total</label></th> 
                                        <th><label ></label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">
                                     <tr>  
                                    <td>AAaiusfhiua</td>  
                                    <td>Rp. 150.000</td>  
                                    <td>1</td>  
                                    <td>5%</td>  
                                    <td>Rp. 500.000</td>  
                                    <td>X</td>                  
                                </tr>  
                                   <tr class="border-top"> 
                                    <td>AAaiusfhiua</td>  
                                    <td>Rp. 150.000</td>  
                                    <td>1</td>  
                                    <td>5%</td>  
                                    <td>Rp. 500.000</td>  
                                    <td>X</td>                  
                                </tr>  
                                   <tr class="border-top"> 
                                    <td>AAaiusfhiua</td>  
                                    <td>Rp. 150.000</td>  
                                    <td>1</td>  
                                    <td>5%</td>  
                                    <td>Rp. 500.000</td>  
                                    <td>X</td>                  
                                </tr>  
                                   <tr class="border-top">  
                                    <td>AAaiusfhiua</td>  
                                    <td>Rp. 150.000</td>  
                                    <td>1</td>  
                                    <td>5%</td>  
                                    <td>Rp. 500.000</td>  
                                    <td>X</td>                  
                                </tr>  
                            </tbody> 
                            <!--- GET DATA NOT FIRST TIME --> 
                                </table>

                            </div>
 
                       </div>


 
                                </div>
                            </div> 

                      </div>
                      <div class="col-lg-7">
                        
                      </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

 
</template> 
 <script>    
    export default { 
    data() {
      return {
        imgProfile: this.$ownAddress+'img/prinny.png',
        msg: "Content Dashboard"
      };
    }, 

  };

 </script>
 