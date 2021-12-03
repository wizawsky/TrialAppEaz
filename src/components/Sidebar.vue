<template>
        <!-- Sidebar -->
       
        <!-- Sidebar -->
        <ul :class="{collapse : menu == 'A'}" class="navbar-nav bg-gradientz-secondary sidebar sidebar-white accordion" id="accordionSidebar">
           
            <!-- Sidebar - Brand -->
            <router-link :to="{name: 'home'}" class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon "> 
                    <img :src="imgPackage" alt="Logo" style="width: 2.8rem;height: 3.3rem;"> 
                </div>
                <div class="sidebar-brand-text mx-1 align-items-center">{{ myVar }} <span class="small" style="font-size: 8px;">Aesthetic Clinics</span></div>  
            </router-link>


            <div class="col-xs-12" style="height:50px;"></div> 
            <!-- Nav Item - Pages Collapse Menu -->
       

            <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item">
               <router-link :to="{name: 'landing.dashboard'}" class="nav-link"  :class="{ aktif : aktif == 1 ,tidak : aktif!=1}"> 
                   <i class="fas fa-columns"></i> 
                    <span> Dashboard</span> 
               </router-link>
            </li>

              <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item ">
               <router-link :to="{name: 'landing.customer'}" class="nav-link" :class="{ aktif : aktif == 2 ,tidak : aktif!=1}"> 
                        <i class="fas fa-user"></i> 
                    <span> Customer</span> 
               </router-link>
            </li>




              <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item">
               <router-link :to="{name: 'landing.konsultasi'}" class="nav-link" :class="{ aktif : aktif == 6 ,tidak : aktif!=1}"> 
                   <i class="fas fa-fw fa-user-md"></i>
                    <span>Konsultasi Dokter</span> 
               </router-link>
            </li>

               <!-- Nav Item - Tables -->
            <li class="nav-itemz nav-item">
               <router-link :to="{name: 'landing.therapist'}" class="nav-link" :class="{ aktif : aktif == 4 ,tidak : aktif!=1}"> 
                    <i class="fas fa-fw fa-user-nurse"></i>
                    <span>Therapist</span>
                </router-link>
            </li>
               <!-- Nav Item - Tables -->
            <li class="nav-itemz nav-item">
                <router-link :to="{name: 'landing.product'}" class="nav-link" :class="{ aktif : aktif == 3 ,tidak : aktif!=1}"> 
                   <i class="fas fa-fw fa-project-diagram"></i>
                    <span>Product</span> 
               </router-link>
            </li> 

     <li class="nav-itemz nav-item">
                <router-link :to="{name: 'landing.pos'}" class="nav-link collapsed" :class="{ aktif : aktif == 5 ,tidak : aktif!=1}" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-cash-register"></i>
                    <span>Point of Sale</span>
                </router-link>      

                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded"> 
                        <router-link :to="{name: 'landing.pos'}"  class="collapse-item"  >Dashboard POS</router-link>
                        <router-link :to="{name: 'landing.transaction'}"   class="collapse-item"  >Transaction</router-link> 
                        <div class="collapse-divider"></div> 
                    </div>
                </div>
            </li>

        </ul> 
    </template>

        <script>   
        export default { 
        data() { 
            let aktif = 0
            let lokasi = this.$route.name
             console.log(lokasi);
             switch(lokasi){
                case 'landing.dashboard':
                aktif = 1
                 break;
                 case 'landing.customer':
                aktif = 2
                 break;
                 case 'landing.product':
                aktif = 3
                 break;
                 case 'landing.therapist':
                aktif =4
                 break;
                 case 'landing.pos':
                aktif =5
                 break;
                 case 'landing.konsultasi':
                aktif =6
                 break;
             }
            return {
            aktif,
            myVar: this.$appName,
            imgPackage: require('@/assets/'+'img/'+'logo1.png'),  
            }
        },
        computed: {
             menu() {
              let lokasi = this.$menuClick
              let menuz = ''
             switch(lokasi){
                case 'A':
                menuz = 'B'
                 break;
                case 'B':
                menuz = 'A'
                 break;
             }
              return menuz;
        }
        }, 
        }
        </script>
        <style>
          .nav-itemz a:hover{
              background: #FFC700;
            }
          .aktif{
              background: #FFC700;
            } 
        </style>
