<template>
  <div class="fcontent" v-if="!show">
      <h1 class="font-weight-bold ftitle-gradient">FINDY'S MARVA</h1><div class="d-lg-none">hide on screens wider than lg</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
        nisi ut aliquip ex ea commodo consequat.
       </p>
       <p> 
         <button class="btn btn-lg btlog"  data-toggle="modal" data-target=".bd-example-modal-lg"   data-backdrop="false">  
                    <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
        </button> 
       </p>
  </div> 

  

<!--
         <button class="btn btn-lg btlog d-none d-lg-block"   @click="Hide()"  >  
                    <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
        </button>

<div class="fclose btn" v-if="show"><i class="fas fa-times fico" @click="Hide()"></i></div>
  <div class="flogin d-none d-lg-block" v-if="show">
    <h1>Welcome !</h1>
    <h6>Login Page</h6><br> 
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Username">
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
    -->
    


  <div class="row" :class="{ffooter:!show,ffooter2:show}">
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


<div class="modal fade shad bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content p-4 shadow-lg border-0"> 
        <div >
        <div class="modal-header border-0">
       <h1>Login Page</h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
 

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
                                         <button class="btn btn-lg btlog btn-block" @click="Masuk" >  
                                             <span>  &nbsp;&nbsp;LOGIN&nbsp;&nbsp;</span> 
                                         </button>      
        </div>
        
    </div>
  </div>
</div>
</template>
<script>
    export default{
        data(){
            console.log( this.$route)
            return{
            logos:  require('@/assets/'+'img/homepage/'+'logos2.png'),
            line: require('@/assets/'+'img/homepage/'+'line1.svg'),
            line2: require('@/assets/'+'img/homepage/'+'navsider.svg'),
            } 
        },
  methods :{ 
    toLandingPage(){
        window.location.replace(this.$ownAddress+'landing/dashboard'); 

    },
    Masuk(){
        this.toLandingPage() 
    },
  },
    }

</script>