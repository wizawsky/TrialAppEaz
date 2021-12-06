<template>
   <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- Page Wrapper -->
    <div id="wrapper" >   
        <!-- Sidebar -->
        <ul :class="{collapse : !menu}" class=" navbar-nav bg-gradientz-secondary sidebar sidebar-white accordion" id="accordionSidebar">
           
            <!-- Sidebar - Brand -->
            <router-link :to="{name: 'home'}" class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon "> 
                    <img :src="imgPackage" alt="Logo" style="width: 2.8rem;height: 3.3rem;"> 
                </div>
                <div class="sidebar-brand-text mx-1 align-items-center">{{ myVar }}  <span class="small" style="font-size: 8px;">Aesthetic Clinics</span></div>  
            </router-link>


            <div class="col-xs-12" style="height:50px;"></div> 
            <!-- Nav Item - Pages Collapse Menu -->
       

            <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item">
               <router-link :to="{ path: smenu.dashboard}"  class="nav-link"  :class="{ aktif : fpath == smenu.dashboard }"> 
                   <i class="fas fa-columns"></i> 
                    <span> Dashboard</span> 
               </router-link>
            </li>

              <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item ">
                <router-link :to="{ path: smenu.customer}"   class="nav-link" :class="{ aktif :  fpath == smenu.customer   }"> 
                        <i class="fas fa-user"></i> 
                    <span> Customer</span> 
               </router-link>
            </li> 

              <!-- Nav Item - Charts -->
            <li class="nav-itemz nav-item">
                <router-link :to="{ path: smenu.konsultasi}"  class="nav-link" :class="{ aktif : fpath == smenu.konsultasi  }"> 
                   <i class="fas fa-fw fa-user-md"></i>
                    <span>Konsultasi Dokter</span> 
                </router-link>
            </li>

               <!-- Nav Item - Tables -->
            <li class="nav-itemz nav-item">
               <router-link :to="{ path: smenu.therapist}"  class="nav-link" :class="{ aktif : fpath == smenu.therapist  }"> 
                    <i class="fas fa-fw fa-user-nurse"></i>
                    <span>Therapist</span>
                 </router-link>
            </li>
               <!-- Nav Item - Tables -->
            <li class="nav-itemz nav-item">
                <router-link :to="{ path: smenu.product}" class="nav-link" :class="{ aktif : fpath == smenu.product  }"> 
                   <i class="fas fa-fw fa-project-diagram"></i>
                    <span>Product</span> 
                </router-link>
            </li> 

     <li class="nav-itemz nav-item">
                <a   class="nav-link collapsed" :class="{ aktif : aktif == 6 ,tidak : aktif!=1}" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-cash-register"></i>
                    <span>Point of Sale</span>
                </a>      

                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded"> 
                        <router-link :to="{ path: smenu.pointofsale}"     class="collapse-item"  >Dashboard POS </router-link>
                        <router-link :to="{ path: smenu.transaction}"     class="collapse-item"  >Transaction </router-link>
                        <div class="collapse-divider"></div> 
                    </div>
                </div>
            </li> 
        </ul>   
        <!-- Sidebar -->

        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content"> 

                    <!-- fixed-top  -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 shadow" role='navigation'>
                        <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" @click="menu=!menu" class="btn btn-link  rounded-circle mr-3">
                        <i class="fa fa-bars text-biasa"></i>
                    </button>

                   
                        <h4 v-if="fpath==smenu.dashboard">Dashboard</h4>
                        <h4 v-if="fpath== smenu.customer " >Customer</h4>
                        <h4 v-if="fpath== smenu.therapist ">Therapist</h4>
                        <h4 v-if="fpath== smenu.konsultasi ">Konsultasi</h4>
                        <h4 v-if="fpath== smenu.product" >Product</h4>
                        <h4 v-if="fpath== smenu.pointofsale ">Point Of Sale</h4>
                        <h4 v-if="fpath== smenu.transaction ">Transaction</h4>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto"> 
                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                   

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
 
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header bg-secondary" style="border: 0">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{name}}</span>
                                <img class="img-profile rounded-circle"
                                    :src="fotopp">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li> 
                    </ul> 
                    
                </nav>  



                        <content-dashboard v-if="fpath==smenu.dashboard" /> 
                        <content-customer v-if="fpath== smenu.customer " /> 
                        <content-therapist v-if="fpath== smenu.therapist " /> 
                        <content-konsultasi v-if="fpath== smenu.konsultasi " /> 
                        <content-product v-if="fpath== smenu.product" /> 
                        <content-pos v-if="fpath== smenu.pointofsale " /> 
                        <content-transaction v-if="fpath== smenu.transaction " /> 


            </div>   
          </div> 
    </div> 
   <logout-modal/> 
    </template> 
        <script>  
 
        import ContentDashboard from '@/views/landing/ContentDashboard.vue' 
        import ContentCustomer from '@/views/landing/ContentCustomerView.vue' 
        import ContentTherapist from '@/views/landing/ContentTherapistView.vue'
        import ContentKonsultasi from '@/views/landing/ContentKonsultasiView.vue'
        import ContentProduct from '@/views/landing/ContentProductView.vue'
        import ContentPos from '@/views/landing/ContentPointOfSaleView.vue'
        import ContentTransaction from '@/views/landing/ContentTransaction.vue' 
        import LogoutModal from '@/components/LogoutModal.vue'  
 

        export default { 

        created(){
            if(this.$route.path == "/landing"||this.$route.path == "/landing/"){
                window.location.replace(this.$ownAddress+'landing/dashboard'); 
            }

        },
          data() {                 
            const smenu =
            { 
                dashboard:"/landing/dashboard",
                customer:"/landing/customer",
                therapist:"/landing/therapist",
                konsultasi:"/landing/konsultasi",
                product:"/landing/product",
                pointofsale:"/landing/pointofsale",
                transaction:"/landing/transaction",
            };
            console.log(this.$route.path)   
            return { 
            smenu, 
            aktif: "",
            title : 'Landing Page',
            myVar: this.$appName,
            imgPackage: require('@/assets/'+'img/'+'logo1.png'), 
            name:'Tumijan Tamvan', 
            link:  this.$ownAddress, 
            fotopp: require('@/assets/'+'img/undraw_profile.svg'),   
            menu: true, 
            }
        },  
        computed:{  
            fpath(){
                  return this.$route.path
            }, 

             
        },
        methods:{ 


        },  
          components: { 
            ContentDashboard, 
            ContentProduct,
            ContentTherapist,
            ContentCustomer,
            ContentKonsultasi,
            ContentPos,
            ContentTransaction,
            LogoutModal, 
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