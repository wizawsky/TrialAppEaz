<template>
   <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- Page Wrapper -->
    <div id="wrapper">  
     <side-bar/>
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content"> 
                        <top-bar/> 

                        <content-pos v-if="nameRout==0"/> 
                        <content-transaction v-if="nameRout==1"/> 


            </div>  
            <foo-ter/>
          </div> 
    </div> 
   <logout-modal/> 
    </template> 
        <script>  
 
        import ContentPos from '@/views/landing/ContentPointOfSaleView.vue'
        import ContentTransaction from '@/views/landing/ContentTransaction.vue'
        import SideBar from '@/components/Sidebar.vue'
        import LogoutModal from '@/components/LogoutModal.vue'
        import TopBar from '@/components/Topbar.vue'
        import FooTer from '@/components/Footer.vue'
 

        export default { 
          data() { 
            return {
            imgPackage: require('@/assets/'+'img/'+'logo1.png'),  

            }
        }, 
        setup(){             
        },computed: {
             nameRout() {
              let lokasi = this.$route.name
              let menu = 0 
             switch(lokasi){
                case 'landing.transaction':
                menu = 1
                 break;
                case 'landing.pos':
                menu = 0
                 break;
             }
              return menu;
        }
        },
          name:   "",
          components: { 
            ContentPos,
            SideBar,
            ContentTransaction,
            LogoutModal,
            FooTer,
            TopBar
          }
        }
        </script>
