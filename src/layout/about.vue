<template> 

    <!-- Page Wrapper -->
    <div id="wrapper" class=" d-flex flex-column">        <!-- Content Wrapper -->
        <div id="content-wrapper" class="bgea3" style="min-height: 100vh;">

            <!-- 

  <div class="sideatr1" v-if="!show"></div>
  <div class="sideatr2" v-if="show"></div>
Main Content --> 


 <nav class="navbar bg-gradientz-secondary navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style="height: 7.5rem;">

                   
                   <img :src="logos" class="ml-5" style="width: 14rem" >  
                    <ul class="navbar-nav ml-auto">  
                        <router-link :to="{name: 'home'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">HOME</router-link>   
                        <router-link :to="{name: 'about'}" class="btn btn-sm nav-item fnavli text-warning mx-2 d-flex align-items-center fomt-value2">ABOUT</router-link>   
                            <router-link :to="{name: 'product'}" class=" btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2">PRODUCT</router-link>    
                          <router-link :to="{name: 'contact'}" class="btn btn-sm nav-item fnavli mx-2 mr-5 d-flex align-items-center fomt-value2">CONTACT</router-link> 
                        <div class="nav-item mx-5"></div> 
                         <div class="nav-item mx-3"></div>                              
                    </ul> 
                    
                </nav> 

        <!-- Sidebar -->
        <ul class="" > 
        </ul>
  <div class="fcontent3">
      <h1 class="font-weight-bold ftitle-gradient">FINDY'S MARVA</h1>
       <p class="fomtea">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       <p class="fomtea"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
       </p>
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