<template> 
  <div class="fhead">
    <img :src="logos" class="ftitle" >  
  </div>
  <div class="fnav">  
    <div class=" row">      
        <a id="linkz" href=""><div class="fnavli col text-warning">HOME</div></a>
        <a id="linkz" href=""><div class="fnavli col">ABOUT</div></a>
        <a id="linkz" href=""><div class="fnavli col">PRODUCT</div></a>
        <a id="linkz" href=""><div class="fnavli col">CONTACT</div></a>
    </div>
    <div class="row py-3"> 
    <img :src="line2" class="fnavsider" >
    </div>  
  </div>

  <div class="fcontent">
      <h1 class="font-weight-bold" style="
background: #000000;
background: -webkit-linear-gradient(to top, #000000 0%, #FFCC00 85%);
background: -moz-linear-gradient(to top, #000000 0%, #FFCC00 85%);
background: linear-gradient(to top, #000000 0%, #FFCC00 85%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; 
      ">FINDY'S MARVA</h1>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
        nisi ut aliquip ex ea commodo consequat.
       </p>
       <p> 
        <router-link  class="btn btn-lg btlog" :to="{name: 'landing.konsultasi'}"  >  
                    <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
        </router-link>
       </p>
       
  </div> 


  <div class="footer row">
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
  
</template>
<script>
    export default {
  name: 'Home',
  data() { 
   return { 
        msg: "Content Customer",
        logos: this.$ownAddress+'img/homepage/'+'logos2.png',
        line: this.$ownAddress+'img/homepage/'+'line1.svg',
        line2: this.$ownAddress+'img/homepage/'+'navsider.svg',
        url:  this.$ownAddress
      }
  } 

}
</script>

<style>
  #linkz {
            text-decoration: none;
        }
html {
  height: 100%; 
}

body {
  background-image: url('~@/assets/img/homepage/bgpage1.png');
  height: 100%;
  position: relative; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}


</style>