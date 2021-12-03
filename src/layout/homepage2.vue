<template> 

    <!-- Page Wrapper -->
    <div id="wrapper" class="bgea">

        <!-- Sidebar -->
        <ul class="navbar-nav sidebar" > 
            <hr class="sidebar-divider d-none d-md-block"> 
        </ul>
        <!-- End of Sidebar -->

  <div class="sideatr1" v-if="!show"></div>
  <div class="sideatr2" v-if="show"></div>

  <div class="fhead">
    <img :src="logos" style="width: 14rem" >  
  </div>

  <div class="fnav">  
    <div class=" row">      
         <router-link :to="{name: 'home'}" id="linkz" href=""><div class="fnavli col text-warning">HOME</div></router-link>
        <router-link :to="{name: 'about'}" id="linkz" href=""><div class="fnavli col">ABOUT</div></router-link>
         <router-link :to="{name: 'product'}" id="linkz" href=""><div class="fnavli col">PRODUCT</div></router-link>
        <router-link :to="{name: 'contact'}" id="linkz" href=""><div class="fnavli col">CONTACT</div></router-link>
    </div>
    <div class="row py-3"> 
    <img :src="line2" class="fnavsider" >
    </div>
  </div>

  <div class="fcontent" v-if="!show">
      <h1 class="font-weight-bold ftitle-gradient">FINDY'S MARVA</h1>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
        nisi ut aliquip ex ea commodo consequat.
       </p>
       <p>
 
         <button class="btn btn-lg btlog"   @click="Hide()"  >  
                    <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
            </button>
       </p>
  </div> 
  <div class="fclose btn" v-if="show"><i class="fas fa-times-circle fico" @click="Hide()"></i></div>


  <div class="flogin" v-if="show">
    <h1>Welcome !</h1>
    <h6>Login Page</h6><br> 
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                         <button class="btn btn-lg btlog" @click="Masuk">  
                                             <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
                                         </button> 
                                             
       
  </div>  




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