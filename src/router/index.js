//import vue router
import { createRouter, createWebHistory } from 'vue-router'

/*
const Login = () => import("@/views/post/Login.vue");
const TestHome = () => import( '@/components/LandingPage.vue');
const Dashboard = () => import( '@/layout/landing/Dashboard.vue');
const Customer = () => import( '@/layout/landing/Customer.vue'); 
const Therapist = () => import( '@/layout/landing/Therapist.vue');
const Konsultasi = () => import( '@/layout/landing/Konsultasi.vue');
const ProductView = () => import( '@/layout/landing/ProductView.vue');
const PointOfSale = () => import( '@/layout/landing/PointOfSale.vue');
*/
//const HomePage = () => import( '@/layout/homepage.vue');
//const About = () => import( '@/layout/about.vue');
//const Product = () => import( '@/layout/product.vue');
//const Contact = () => import( '@/layout/contact.vue');
//const myvarz = "Findy's Marva";
//define a routes



const HomePage = () => import( '@/layout/homepage.vue');
const LandingPage =  () => import( '@/views/landing/PageLanding.vue');

 


const myvar = "Findy's Marva";

const routes = [

    {
        path: '/',
        name: 'home',
        component: HomePage,
            meta: {
            title: myvar + ''            
    }
    },   

    {
        path: '/about',
        name: 'about',
        component: HomePage,
            meta: {
            title: myvar + ' - About'            
    }
    }, 
    {
        path: '/product',
        name: 'product',
        component: HomePage,
            meta: {
            title: myvar + ' - Product'            
    }
    },  
    {
        path: '/contact',
        name: 'contact',
        component: HomePage,
            meta: {
            title: myvar + ' - Contact'            
    }
    },  

    {
        path: "/landing/",
        name: "landing",
        component:LandingPage,
        meta: {
            title: myvar + ' - Dashboard'            
        },
        children: [ 
                { path: 'dashboard', component: LandingPage, meta: {title: myvar + ' - Dashboard'}, }, 
                { path: 'customer', component: LandingPage, meta: {title: myvar + ' - Customer'}, }, 
                { path: 'konsultasi', component: LandingPage, meta: {title: myvar + ' - Konsultasi Dokter'}, }, 
                { path: 'therapist', component: LandingPage, meta: {title: myvar + ' - Therapist'}, }, 
                { path: 'product', component: LandingPage, meta: {title: myvar + ' - Product'}, }, 
                { path: 'transaction', component: LandingPage, meta: {title: myvar + ' - Transaction'}, }, 
                { path: 'pointofsale', component: LandingPage, meta: {title: myvar + ' - Point Of Sale'}, }, 
        ]
    },  

    /*
    {
        path: '/landing/',
        name: 'landing.index',
        component: TestHome,
        meta: { title: myvarz + ' - Dashboards'}
    },  
    {
        path: '/landing/dashboard',
        name: 'landing.dashboard',
        component: Dashboard,
        meta: { title: myvarz + ' - Dashboards'}
    }, 
    {
        path: '/landing/customer',
        name: 'landing.customer',
        component: Customer,
        meta: { title: myvarz + ' - Customer'}
    },   
    {
        path: '/landing/konsultasi',
        name: 'landing.konsultasi',
        component: Konsultasi,
        meta: { title: myvarz + ' - Konsultasi Dokter'}
    },   
    {
        path: '/landing/therapist',
        name: 'landing.therapist',
        component: Therapist,
        meta: { title: myvarz + ' - Therapist'}
    },   
 
    {
        path: '/landing/product',
        name: 'landing.product',
        component: ProductView,
        meta: { title: myvarz + ' - Manajemen Produk'}
    },    

    {
        path: '/landing/pos',
        name: 'landing.pos',
        component: PointOfSale,
        meta: { title: myvarz + ' - Point Of Sale'}
    },    

    {
        path: '/landing/transaction',
        name: 'landing.transaction',
        component: PointOfSale,
        meta: { title: myvarz + ' - Transaction'}
    },    


 
    {
        path: '/create',
        name: 'post.create',
        component: () => import( '@/views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( '@/views/post/Edit.vue')
    },
    {
        path: '/login',
        name: 'post.login', 
        component: Login
    }
    */

]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})


router.beforeEach((to, from, next) => { 
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title); 
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags); 
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags); 
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  } 
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el)); 
  if(!nearestWithMeta) return next(); 
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});


export default router