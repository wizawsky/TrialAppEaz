//import vue router
import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import("@/views/post/Login.vue");
const TestHome = () => import( '@/components/LandingPage.vue');
const Dashboard = () => import( '@/layout/landing/Dashboard.vue');
const Customer = () => import( '@/layout/landing/Customer.vue'); 
const Therapist = () => import( '@/layout/landing/Therapist.vue');
const Konsultasi = () => import( '@/layout/landing/Konsultasi.vue');
const ProductView = () => import( '@/layout/landing/ProductView.vue');
const PointOfSale = () => import( '@/layout/landing/PointOfSale.vue');
//const HomePage = () => import( '@/layout/homepage.vue');
const HomePage2 = () => import( '@/layout/homepage2.vue');
const About = () => import( '@/layout/about.vue');
const Product = () => import( '@/layout/product.vue');
const Contact = () => import( '@/layout/contact.vue');



const landing2 = "/landing2/";
const landingn2 = "landing2.dashboard";


const myvar = "Findy's Marva";
const myvarz = "Laravlee Trial";
//define a routes

const routes = [

    {
        path: landing2,
        name: landingn2,
        component: HomePage2,
            meta: {
            title: myvar + ' - Dashboard'            
    }
    },  


    {
        path: '/post',
        name: 'post.index',
        component: () => import( '@/views/post/Index.vue'),
            meta: {
            title: myvar + ' - Dashboard'            
    }
    },  

    {
        path: '/',
        name: 'home',
        component: () => import( '@/views/landing/PageLanding.vue'),
            meta: {
            title: myvar + ' - Dashboard'            
    }
    },   

    {
        path: '/about',
        name: 'about',
        component: About,
            meta: {
            title: myvar + ' - About'            
    }
    }, 
    {
        path: '/product',
        name: 'product',
        component: Product,
            meta: {
            title: myvar + ' - Product'            
    }
    },  
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
            meta: {
            title: myvar + ' - Contact'            
    }
    },  



    //Landing Page
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