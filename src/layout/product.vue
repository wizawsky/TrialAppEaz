<template> 

    <!-- Page Wrapper -->
    <div id="wrapper" class=" d-flex flex-column">        <!-- Content Wrapper -->
        <div id="content-wrapper" style="min-height: 100vh;">

            <!-- 

  <div class="sideatr1" v-if="!show"></div>
  <div class="sideatr2" v-if="show"></div>
Main Content --> 


 <nav class="navbar bg-gradientz-secondary navbar-expand navbar-light bg-white topbar mb-5 static-top shadow" style="height: 7.5rem;">

                   
                   <img :src="logos" class="ml-5" style="width: 14rem" >  
                    <ul class="navbar-nav ml-auto">  
                        <router-link :to="{name: 'home'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">HOME</router-link>   
                        <router-link :to="{name: 'about'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">ABOUT</router-link>   
                        <router-link :to="{name: 'product'}" class="text-warning  btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">PRODUCT</router-link>   
                          <router-link :to="{name: 'contact'}" class="btn btn-sm nav-item fnavli mx-2 mr-5 d-flex align-items-center fomt-value2">CONTACT</router-link> 
                        <div class="nav-item mx-5"></div> 
                         <div class="nav-item mx-3"></div>                              
                    </ul>  
                </nav> 

        <!-- Sidebar -->
        <ul class="" > 
        </ul>

  <div class="content-wrapper container-fluid">
    <div class="row">
      
             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>


             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>


             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>


             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>


             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>


             <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomtea">Rp. 150.000</p>
            <p class="card-text text-biasa fomt text-abang">&nbsp;</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div>
        </div>
      </div>

              <div class="col-lg-2 mb-5">
             <div class="card shadow-sm border rounded">
          <img class="card-img-top" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas">
            <h5 class="card-title font-weight-bold text-biasa fomtea">Product Amigos</h5>
            <p class="card-text text-biasa fomt"><del>Rp. 150.000</del></p>
            <p class="card-text text-biasa fomtea text-abang">Rp. 110.000</p>
            <a href="#" class="btn btn-sm btn-light shadow-sm float-right">Detail</a>
          </div> 
        </div>
      </div>

    </div>
  </div>
  


<!--
  <div class="ffooter row" v-if="!show">
  <div class="col">
      <i class="fab fa-instagram ficon"></i>
  </div>   
  <div class="col"> 
    <i class="fab fa-whatsapp ficon"></i> 
  </div>   
   <div class="col">    
    <i class="fab fa-facebook ficon"></i>  
  </div>   
   <div class="col" >
    <img :src="line" class="fline" > 
  </div>    
  </div> 


<div class="ffooter2 row" v-if="show">
  <div class="col">
      <i class="fab fa-instagram ficon"></i>
  </div>   
  <div class="col"> 
    <i class="fab fa-whatsapp ficon"></i> 
  </div>   
   <div class="col">    
    <i class="fab fa-facebook ficon"></i>  
  </div>   
   <div class="col" >
    <img :src="line" class="fline" > 
  </div>    
  </div> 
-->

</div> 
    </div>
    <!-- End of Page Wrapper -->
 
  
</template>
<script>
import { useRouter  } from  'vue-router'
    export default {
  name: 'Home',
  data() { 

        const router = useRouter()
   return { 
        show: false,
        router,
        amigos: require('@/assets/img/prinny.png'),
        msg: "Content Customer",
        logos:  require('@/assets/'+'img/homepage/'+'logos2.png'),
        line: require('@/assets/'+'img/homepage/'+'line1.svg'),
        line2: require('@/assets/'+'img/homepage/'+'navsider.svg'),
        url:  this.$ownAddress
      }
  } ,
  methods :{
    Hide(){
        this.show = !this.show;
    },
    Masuk(){
        this.$router.push("/landing/dashboard");
    },
  }
}
</script>
 
<style>
  #linkz {
            text-decoration: none;
        } 

.card:hover{
    box-shadow: 8px 8px 8px blue;
    transform:scale(1.1);
}
</style>