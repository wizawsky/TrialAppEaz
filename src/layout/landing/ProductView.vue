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

                        <content-dashboard/> 


            </div>  
            <foo-ter/>
          </div> 
    </div> 
   <logout-modal/> 
    </template> 
        <script>  
 
        import ContentDashboard from '@/views/landing/ContentProductView.vue'
        import SideBar from '@/components/Sidebar.vue'
        import LogoutModal from '@/components/LogoutModal.vue'
        import TopBar from '@/components/Topbar.vue'
        import FooTer from '@/components/Footer.vue'
 

        export default { 
          data() {
            return {
            imgPackage: this.$ownAddress+'img/logo1.png'
            }
        }, 
        setup(){             
        },
          name:   "",
          components: { 
            ContentDashboard,
            SideBar,
            LogoutModal,
            FooTer,
            TopBar
          }
        }
        </script>
