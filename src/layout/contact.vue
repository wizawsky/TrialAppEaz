<template> 

    <!-- Page Wrapper -->
    <div id="wrapper" class=" d-flex flex-column">        <!-- Content Wrapper -->
        <div id="content-wrapper" class="bgea4" style="min-height: 100vh;">

            <!-- 

  <div class="sideatr1" v-if="!show"></div>
  <div class="sideatr2" v-if="show"></div>
Main Content --> 


 <nav class="navbar bg-gradientz-secondary navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style="height: 7.5rem;">

                   
                   <img :src="logos" class="ml-5" style="width: 14rem" >  
                    <ul class="navbar-nav ml-auto">  
                        <router-link :to="{name: 'home'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">HOME</router-link>   
                        <router-link :to="{name: 'about'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">ABOUT</router-link>   
                            <router-link :to="{name: 'product'}" class=" btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">PRODUCT</router-link>   
                          <router-link :to="{name: 'contact'}" class="text-warning btn btn-sm nav-item fnavli mx-2 mr-5 d-flex align-items-center fomt-value2">CONTACT</router-link> 
                        <div class="nav-item mx-5"></div> 
                         <div class="nav-item mx-3"></div>                              
                    </ul>  
                </nav> 

        <!-- Sidebar -->
        <ul class="" > 
        </ul>

  <div class="fcontent4">
      <h1 class="font-weight-bold ftitle-gradient">FINDY'S MARVA</h1>
       <p class="fomtea">
        Lorem ipsum dolor sit amet,
       </p>
       <p class="fomtea">
        Jl. Raya No. 48 Suatu Tempat
       </p>
       <p class="fomtea">
        0894747148419241
       </p>
  </div>
 
 <div class=""></div>
  <div id="map-container-google-2" class="z-depth-1-half map-container ffooter4"  style="width:100%;height:25%">
            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            class=""  style="width:100%;height:100%" allowfullscreen></iframe>
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

</style>