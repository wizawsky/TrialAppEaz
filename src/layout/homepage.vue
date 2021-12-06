<template> 

    <!-- Page Wrapper -->
    <div id="wrapper">
    <div id="content-wrapper"  class="d-flex flex-column " :class="{ bgea:currentRouteName=='home',bgea3:currentRouteName=='about',bgea4:currentRouteName=='contact'}" style="min-height: 100vh;" > 
 

  <div class="sideatr1" v-if="!show&currentRouteName=='home'"></div>
  <div class="sideatr1 d-lg-none"  v-if="!show&currentRouteName=='home'"></div>
  <div class="sideatr2 " v-if="show&currentRouteName=='home'"></div>
  

 <nav class="navbar bg-transparent  navbar-expand-lg navbar-light bg-white topbar mb-4 static-top" :class="{'bg-gradientz-secondary':currentRouteName!='home','shadow':currentRouteName!='home'}" style="height: 7.5rem;"> 
     

                      <img :src="logos" class="ml-4" style="width: 14rem" />
                      <a class="dropdown no-arrow m-0 d-lg-none">
                            <a  @click="menushow = !menshow" class="btn btn-link  rounded-circle mr-3 dropdown-toggle " href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                            <i class="fa fa-bars text-biasa"></i>
                            </a>
                           
                            <div class="dropdown-list dropdown-menu border-0 bg-gradientz-secondary dropdown-menu-right shadow-sm animated--grow-in"
                                aria-labelledby="alertsDropdown"> 


                                <router-link :to="{name: 'home'}"  class="dropdown-item d-flex align-items-center border-0 " :class="{'bg-warning':currentRouteName=='home'}" href="#">
                                    <div class="mr-3">
                                    </div>
                                    <div> 
                                        <span class="font-weight-bold"  :class="{'text-white':currentRouteName=='home'}">HOME</span>
                                    </div>
                                </router-link> 


                                  <router-link :to="{name: 'about'}"  class="dropdown-item d-flex align-items-center border-0" :class="{'bg-warning':currentRouteName=='about'}" href="#">
                                    <div class="mr-3"> 
                                    </div>
                                    <div> 
                                        <span class="font-weight-bold text-biasa"  :class="{'text-white':currentRouteName=='about'}">About</span>
                                    </div>
                                </router-link>


                                  <router-link :to="{name: 'product'}"  class="dropdown-item d-flex align-items-center border-0"  :class="{'bg-warning':currentRouteName=='product'}" href="#">
                                    <div class="mr-3"> 
                                    </div>
                                    <div> 
                                        <span class="font-weight-bold text-biasa"  :class="{'text-white':currentRouteName=='product'}">Product</span>
                                    </div>
                                </router-link>

                                  <router-link :to="{name: 'contact'}"  class="dropdown-item d-flex align-items-center border-0" href="#"  :class="{'bg-warning':currentRouteName=='contact'}">
                                    <div class="mr-3">
                                    </div>
                                    <div> 
                                        <span class="font-weight-bold text-biasa"  :class="{'text-white':currentRouteName=='contact'}">Contact</span>
                                    </div>
                                </router-link>  
                            </div> 
                        </a> 

                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ml-auto ">  
                        <router-link :to="{name: 'home'}" class="btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2" :class="{'text-warning':currentRouteName=='home'}">HOME</router-link>   
                        <router-link :to="{name: 'about'}" class="btn btn-sm nav-item fnavli  mx-2 d-flex align-items-center fomt-value2" :class="{'text-warning':currentRouteName=='about'}">ABOUT</router-link>   
                            <router-link :to="{name: 'product'}" class=" btn btn-sm nav-item fnavli mx-2 d-flex align-items-center fomt-value2" :class="{'text-warning':currentRouteName=='product'}">PRODUCT</router-link>    
                          <router-link :to="{name: 'contact'}" class="btn btn-sm nav-item fnavli mx-2 mr-5 d-flex align-items-center fomt-value2" :class="{'text-warning':currentRouteName=='contact'}">CONTACT</router-link> 
                        <div class="nav-item mx-5"></div> 
                         <div class="nav-item mx-3"></div>                              
                    </ul>  
                </div>
                </nav> 

  <div class="content-wrapper container-fluid" id="content"> 

    <home-page v-if="currentRouteName=='home'" />
    <product-page v-if="currentRouteName=='product'" />
    <about-page v-if="currentRouteName=='about'" />
    <contact-page v-if="currentRouteName=='contact'" />


  </div>
</div>
</div>
    <!-- End of Page Wrapper -->
 
  
</template>
<script>
import HomePage from '@/layout/homepage/home.vue' 
import ProductPage from '@/layout/homepage/product.vue' 
import AboutPage from '@/layout/homepage/about.vue' 
import ContactPage from '@/layout/homepage/contact.vue' 

    export default {
  name: 'Home',
  created(){
  },
  data() {  
   return { 
        show: false,
        menushow: false, 
        logos:  require('@/assets/'+'img/homepage/'+'logos2.png'),
        line: require('@/assets/'+'img/homepage/'+'line1.svg'),
        line2: require('@/assets/'+'img/homepage/'+'navsider.svg'), 

      }
  } ,
  components:{
    HomePage,ProductPage,AboutPage,ContactPage
  },
  methods :{ 

  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
}
</script>
 
<style>
  #linkz {
            text-decoration: none;
        } 

</style>