import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import Bootstrap, Popper, jQuery
import './assets/scss/sb-admin-2.scss'; 
import './assets/vendor/fontawesome-free/css/all.min.css';  
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
 

const app = createApp(App)
app.use(router)
app.config.globalProperties.$appName = "FINDY’S MARVA"
app.config.globalProperties.$menuClick = "A"
app.config.globalProperties.$ownAddress = 'http://localhost:8080/'
app.config.globalProperties.$laravel = 'http://192.168.43.13:8000/api/'
//http://localhost:8080/ http://192.168.43.13:8000
app.mount('#app')
