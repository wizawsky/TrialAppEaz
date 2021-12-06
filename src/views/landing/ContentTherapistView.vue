<template>
                <!-- Begin Page Content -->
                <div class="container-fluid">
     
                    <!-- Content Row -->
                    <div class="row"  v-if="vform==0"> 
                    <div class="col-lg-12 mb-2" >  
                        <div class="row d-flex justify-content-end">
                                <div class="col-md-6 mb-2">
                            <button class="btn btn-md btn-oatas shadow-sm mb-2"  @click.prevent="onRefresh()">
                                <i class="fa fa-sync-alt" aria-hidden="true"></i>
                            </button>
                            &nbsp; <div class="btn-group dropup mb-2">
                                              <button type="button" class="btn btn-oatas btn-md dropdown-toggle shadow-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i class="fa fa-list-ul" aria-hidden="true"></i>  Per Page
                                              </button>
                                              <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(1)" >1 Item</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(5)" >1 - 5</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(10)" >1 - 10</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(25)" >1 - 25</a> 
                                              </div>
                                        </div>&nbsp;   
                             <button class="btn btn-md btn-oatas shadow-sm mb-2" v-on:click="showAddCustomer()"   data-toggle="modal" data-target="#exampleModalCenter" >
                                  <i class="far fa-plus-square" aria-hidden="true"></i>  Tambah
                            </button>    
                            &nbsp; 
                            <button class="btn btn-sm  btn-oatas shadow-sm mb-2" v-if="sortby.loading" > 
                             <div class="spinner-border spinner-border-sm mb-2" role="status">
                              <span class="sr-only">Loading...</span>
                            </div> Loading... 
                            </button>  
                            </div>

                                <div class="col-md-3 d-flex align-items-end flex-column">

                            <!-- NAVIGASI PAGE -->  
                                    <nav aria-label="Page navigation example ">
                                          <ul class="pagination" >
                                            <li class="page-item" v-if="page>1"  @click.prevent="paginate(1)" ><a class="page-link" href="#">&laquo;</a></li>
                                            <li class="page-item" v-if="page>1"  @click.prevent="paginate(page-1)" ><a class="page-link" href="#">  &lt;</a></li>
                                            <li class="page-item" @click.prevent="paginate(n)" id="range" v-for="n in parseInt(ea)" :key="n" >    
                                                <a class="page-link" :class="{'bg-oatas':n==page}" v-if="n<page+2 & n>page-2" href="#">{{n}}</a>
                                            </li>  
                                            <li class="page-item" v-if="page<parseInt(ea)"  @click.prevent="paginate(page+1)" ><a class="page-link" href="#">   &gt;</a></li>
                                            <li class="page-item" v-if="page<parseInt(ea)"  @click.prevent="paginate(ea)" ><a class="page-link" href="#">&raquo;</a></li>
                                          </ul>
                                        </nav> 
                            <!-- NAVIGASI PAGE --> 
                        </div>

                                <div class="col-md-3"> 
                        <div class="input-group shadow-sm">
                            <input type="text"  v-model="name" class="form-control bg-white border-0 small" placeholder="Therapist Name..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-white" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div> </div>                                
                            </div>

                        </div>

                    <div class="col-lg-12 mb-4  border-0"  > 
                     <div class="table-responsive card shadow mb-4 border-0">
                                   <table class="table table-borderless border-0"   id="dataTable" width="100%" cellspacing="0">
                                    <thead class="card-header py-3 bg-oatas border-0 text-biasa">
                                        <tr>
                                        <th class="text-center"><label>NO</label></th> 
                                        <th><label @click.prevent="sortBy('name')">Nama</label></th> 
                                        <th><label @click.prevent="sortBy('stok')">Lorem Ipsum</label></th> 
                                        <th><label @click.prevent="sortBy('persen')">No. HP</label></th> 
                                        <th><label @click.prevent="sortBy('terjual')">Status</label></th>  
                                        <th><label @click.prevent="sortBy('rating')">Rating</label></th>  
                                        <th><label>Aksi</label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">
                                     <tr v-for="(post, index) in filterProducts.slice(ffrom,fto)" :key="index" :class="{ 'border-top' : index != 0 }"> 
                                    <td class="text-center">{{ index+ffrom+1}}</td> 
                                    <td v-on:click="showEditCustomer(index)" >{{ post.nama }}</td> 
                                    <td>{{ post.title }}</td> 
                                    <td>{{ post.nohp }}</td>
                                    <td>  
                                        <div class="btn-group">
                                         {{post.status.split("-")[0]}} - &nbsp;<button type="button" class="btn btn-success btn-sm text-orange rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{post.status.split("-")[1]}}
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item"  v-on:click="setStatus(index,'Therapist')" >Therapist</a>
                                            <a class="dropdown-item"  v-on:click="setStatus(index,'Konsultasi Dokter')" >Konsultasi Dokter </a> 
                                            <a class="dropdown-item"  v-on:click="setStatus(index,'Treatment')" >Treatment</a>
                                            <a class="dropdown-item"  v-on:click="setStatus(index,'Selesai')" >Selesai</a>
                                          </div>
                                        </div>  
                                    </td>  
                                    <td> 
                                            <span class="fa fa-star" :class="{checked:post.rating>=1}"></span>
                                            <span class="fa fa-star" :class="{checked:post.rating>=2}"></span>
                                            <span class="fa fa-star" :class="{checked:post.rating>=3}"></span>
                                            <span class="fa fa-star" :class="{checked:post.rating>=4}"></span>
                                            <span class="fa fa-star" :class="{checked:post.rating>=5}"></span>
                                    </td>
                                     <td>  
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-oatas btn-sm text-orange rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-border-all"></i>
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item"  v-on:click="showEditCustomer(index)" data-toggle="modal" data-target="#exampleModalCenter">Edit </a>
                                            <a class="dropdown-item"  v-on:click="onProductEdit(post.id)" >Preview </a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item"  @click.prevent="postDelete(post.id)">Delete</a>
                                          </div>
                                        </div>  
                                    </td>  
                                </tr>  
                            </tbody> 
                            <!--- GET DATA NOT FIRST TIME --> 
                                </table>

                            </div> 
                    </div> 
                        </div>

 








                </div>
                <!-- /.container-fluid -->
 

</template> 
<script>
import { reactive  } from 'vue' 
import axios from 'axios'  

export default {
 

 
  data() {
    const post = reactive({
            nama: '',
            content: ''
        });
     let ea = 0;
     let duata = [] 
     let posz = 7  // DATA UNTUK DITAMPILKAN
     let response = {
    "success": true,
    "data": [
        {
            "id": 9,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 3,
            "status": "Ruang 1-Available"
        },
        {
            "id": 8,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 1,
            "status": "Ruang 1-Available"
        },
        {
            "id": 7,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 3,
            "status": "Ruang 1-Available"
        },
        {
            "id": 6,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 2,
            "status": "Ruang 1-Available"
        },
        {
            "id": 5,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 5,
            "status": "Ruang 1-Available"
        },
        {
            "id": 4,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 2,
            "status": "Ruang 1-Available"
        },
        {
            "id": 3,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 2,
            "status": "Ruang 1-Available"
        },
        {
            "id": 2,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 4,
            "status": "Ruang 1-Available"
        },
        {
            "id": 1,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 1,
            "status": "Ruang 1-Available"
        },
        {
            "id": 0,
            "nama": "Jumados Santrinos",
            "title": "Lorem Ipsum",
            "alamat": "Jln Dimana",
            "nohp": "089325983275289",
            "rating": 2,
            "status": "Ruang 1-Available"
        }
    ]
} 
             duata = response.data
             ea = duata.length/posz
              if(ea>ea.toFixed(0)){
                ea = ea + 1;
              }
              ea = ea.toFixed(0);   


    return {
        name: '',

            page:1, // POSITION PAGINATE
            pageitem: posz, //1 Page x Item
            ffrom:0, // PAGINATE
            fto:posz, // PAGINATE


      files: [],
      cust:{},
      status: { 
            loading: '',
            status: '', 
            id: 0,
      },
      vform: 0,
      ea,
      posz,
      sortby: { 
        loading: false,
        sort: '', 
        type: 'asc',  
      },

      post, 
      duata, 
    };
  },

  methods: {

    paginate(n){
            this.page = n
              this.ffrom = (n-1) * this.pageitem
              this.fto = this.ffrom + this.pageitem

    },
    perpage(n){
              this.posz = n
              this.page = 1
              this.pageitem = this.posz
              this.ffrom = 0
              this.fto = n
              this.ea = this.duata.length/this.posz
              if(this.ea>this.ea.toFixed(0)){
                this.ea = this.ea + 1;
              }
              this.ea = this.ea.toFixed(0); 

    },
    resetLoading(){
        this.sortby.loading = false
        this.status.loading = false
    }, 
 
    sortBy(sort) { 
          this.sortby.loading = true
          if(this.sortby.type == 'desc'){
            this.sortby.type = 'asc'
          }else{
            this.sortby.type = 'desc' 
          }
          this.sortby.sort = sort  
          this.onRefresh()
        },
        
    onRefresh(){
                axios.post(this.$laravel+'admin/customer/?sort='+this.sortby.sort+'&type='+this.sortby.type)
                .then(response => {  
                  this.duata = response.data.data 
                  this.resetLoading()
                }).catch(error => {
                    console.log(error.response.data)
                })

        },
    backMenu(){        
        this.vform = 0;
    },
    showAddCustomer(){
        this.cust = {};
        this.vform = 2;
    },

    showEditCustomer(i){
        this.cust = this.duata[i]; 
        this.vform = 1;
    },

    filterProductsByName(products) {
      return this.name
        ? products.filter(
            (product) =>
              !product.nama.toLowerCase().indexOf(this.name.toLowerCase()),
          )
        : products;
    },
 
    onProductEdit(id){
            axios.get(this.$laravel+'admin/customer/'+`${id}`)
            .then(response => {  
                this.post.id = response.data.data.id
              this.post.nama = response.data.data.nama
              this.post.kode = response.data.data.kode
              this.post.harga = response.data.data.harga
              this.post.deskripsi= response.data.data.deskripsi
              this.post.status = response.data.data.status
              console.log(response.data)

            }).catch(error => {
                console.log(error.response.data)
            }) 
    },


   setStatus(i,e){ 
                    let custo = this.duata[i];                    
                    custo.status = e; 
                    this.update(custo)
                      
    },

    update(data){
          this.sortby.loading = true
                    let custo = data;                     
                           axios.post(this.$laravel+'admin/customer/update', {
                            data: custo
                }).then(response => {
                        this.sortby.loading = false
                        console.log(response)     
                }).catch(error => { 
                        console.log(error)     
                })
    },
    add(data){
          this.sortby.loading = true
                    let custo = data;                     
                     axios.post(this.$laravel+'admin/customer/add', {
                            data: custo
                }).then(response => {
                        this.sortby.loading = false
                        console.log(response)     
                }).catch(error => { 
                        console.log(error)     
                })
    },
  },

  components: {  
   },computed: {
     filterProducts() {
      return this.filterProductsByName(this.duata);
  }
     
   }
};
</script>
 