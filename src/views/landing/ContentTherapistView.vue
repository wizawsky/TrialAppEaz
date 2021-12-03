<template>
                <!-- Begin Page Content -->
                <div class="container-fluid">
  
                    <!-- Content Row -->
                    <div class="row">

                    <!--
                        <div class="col-lg-12 mb-4">
                        <button v-on:click="onProductAll" class="btn-sm btn btn-secondary">Lihat Semua Produk</button>
                            &nbsp;&nbsp;
                            <button v-on:click="onProductAdd"  class="btn-sm btn btn-secondary">Tambah Produk</button>
                        &nbsp;&nbsp;
                        <button v-on:click="onProductGet"  class="btn-sm btn btn-secondary">Lihat Produk</button> 

                        </div>
                         -->

                        <!--
 
                            PRODUK ALL HERE 

                         -->
                    <div class="col-lg-12 mb-2"  v-if="productall">  
                        <div class="row d-flex justify-content-end">
                                <div class="col-md-6">
                            <button class="btn btn-md btn-oatas shadow"  @click.prevent="onRefresh()">
                                <i class="fa fa-sync-alt" aria-hidden="true"></i>
                            </button>
                            &nbsp; <div class="btn-group dropup">
                                              <button type="button" class="btn btn-oatas btn-md dropdown-toggle shadow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i class="fa fa-list-ul" aria-hidden="true"></i>  Per Page
                                              </button>
                                              <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(1)" >1 Item</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(5)" >1 - 5</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(10)" >1 - 10</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="perpage(25)" >1 - 25</a> 
                                              </div>
                                        </div>&nbsp;   
                             <button class="btn btn-md btn-oatas shadow" v-on:click="onProductAdd">
                                  <i class="far fa-plus-square" aria-hidden="true"></i>  Tambah
                            </button> &nbsp;


                            <button class="btn btn-md  btn-oatas shadow"  @click.prevent="test()">
                                TEST
                            </button>  
                            &nbsp; 
                            <button class="btn btn-sm  btn-oatas shadow" v-if="sortby.loading" >

                             <div class="spinner-border spinner-border-sm" role="status">
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
                        <div class="input-group shadow">
                            <input type="text"  v-model="name" class="form-control bg-white border-0 small" placeholder="Produk Name..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-white" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div> </div>                                
                            </div>

                        </div>

                    <div class="col-lg-12 mb-4  border-0"  v-if="productall"> 
                     <div class="table-responsive card shadow mb-4 border-0">
                                   <table class="table table-borderless border-0"   id="dataTable" width="100%" cellspacing="0">
                                    <thead class="card-header py-3 bg-oatas border-0 text-biasa">
                                        <tr>
                                        <th class="text-center"><label>NO</label></th>
                                        <th><label @click.prevent="sortBy('id')">ID</label></th>
                                        <th><label @click.prevent="sortBy('name')">Name</label></th>
                                        <th><label @click.prevent="sortBy('kode')">Kode</label></th>
                                        <th><label @click.prevent="sortBy('harga')">Harga</label></th> 
                                        <th><label @click.prevent="sortBy('stok')">Stok</label></th> 
                                        <th><label @click.prevent="sortBy('persen')">Discount%</label></th> 
                                        <th><label @click.prevent="sortBy('terjual')">Terjual</label></th> 
                                        <th><label @click.prevent="sortBy('status')">Status</label></th> 
                                        <th><label>Aksi</label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">
                                     <tr v-for="(post, index) in filterProducts.slice(ffrom,fto)" :key="index" :class="{ 'border-top' : index != 0 }"> 
                                    <td class="text-center">{{ index}}</td>
                                    <td>&nbsp;{{ post.id }}</td>
                                    <td>{{ post.nama }}</td> 
                                    <td>{{ post.kode }}</td>
                                    <td v-if="!post.persen">{{ post.harga }}</td>
                                    <td v-if="post.persen"><del class="text-danger">{{ post.harga }}</del> {{post.hargap}}</td>
                                    <td>{{ post.stok }}</td>
                                    <td>{{ post.persen }}</td>
                                    <td>{{ post.terjual }}</td>
                                    <td>
                                     
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-success btn-sm dropdown-toggle"  v-if="post.status == 'Aktif'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          
                                <div class="spinner-border spinner-border-sm" role="status"  v-if="status.loading&&status.id==post.id">
                                  <span class="sr-only">Loading...</span>
                                </div>
                                {{post.status}}
                                          </button>

                                           <button type="button" class="btn btn-danger btn-sm dropdown-toggle"  v-if="post.status == 'Nonaktif'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div class="spinner-border spinner-border-sm" role="status"  v-if="status.loading&&status.id==post.id">
                                          <span class="sr-only">Loading...</span>
                                        </div>
                                           {{post.status}}
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item"  v-on:click="postSetStatus(post.id,'Aktif')" >Set Aktif</a> 
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item"  v-on:click="postSetStatus(post.id,'Nonaktif')">Set Nonaktif</a>
                                          </div>
                                        </div> 
 
                                    </td>
                                     <td>  
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Produk
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item"  v-on:click="onProductEdit(post.id)" >Edit </a>
                                            <a class="dropdown-item"  v-on:click="onProductEdit(post.id)" >Preview </a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item"  @click.prevent="postDelete(post.id)">Delete</a>
                                          </div>
                                        </div> 
                                        &nbsp;&nbsp;

                                        <div class="btn-group">
                                          <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Stok
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item"  v-on:click="onProductEdit(post.id)" >Add Stok</a> 
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item"  v-on:click="onProductEdit(post.id)">Sub Stok</a>
                                          </div>
                                        </div> 
                                    </td>  
                                </tr>  
                            </tbody> 
                            <!--- GET DATA NOT FIRST TIME --> 
                                </table>

                            </div>


                    </div>

 
                         <!--
 
                            PRODUK ALL HERE 

                         -->
 




                        <product-view-add  v-if="productadd"/> 
                        <product-view-get  v-if="productget"/> 




                         <!--
 
                            PRODUK EDIT HERE 

                         -->
                        <div class="col-lg-12 mb-4"  v-if="productedit"> 
                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Edit Product ID {{post.id}}</h6>
                                </div>
                                <div class="card-body">  
                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="nama" class="">Nama</label>
                                <input type="text" v-model="post.nama" class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>  

                            <div class="form-group">
                                <label for="kode" class="">Kode</label>
                                <input type="text" v-model="post.kode"  class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>          
                             

                            <div class="form-group">
                                <label for="harga" class="">Harga</label>
                                <input type="number"  v-model="post.harga"  class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>

                            <div class="form-group">
                                <label for="content" class="">Deskripsi</label>
                                <textarea class="form-control" rows="4"  v-model="post.deskripsi"  placeholder=""></textarea> 
                            </div>


                             <div class="custom-file">
                                 <input type="file" class="custom-file-input" name="attachment[]" @change="onFileChange" multiple />
    
                              <label class="custom-file-label" for="customFile">Add Picture</label>
                            </div>

                                    <div class="preview" v-if="preview">
                                        <p>Preview: </p>
                                        <img :src="preview" width="200" height="150">
                                    </div>

                            <br>
                            <br>
                            <button type="submit" class="btn btn-secondary">SIMPAN</button>
                        </form>    
                                </div>
                            </div> 
                            <p v-for="(file, index) in files" :key="index">
                              {{ file.name }}
                            </p> 
                        </div>
                        
                        <!--
 
                            PRODUK EDIT HERE 

                         -->















                        <!-- ISI KONTENT --> 
                        </div>
                </div>
                <!-- /.container-fluid -->
 

</template> 
<script>
import { reactive  } from 'vue' 
import axios from 'axios' 
import ProductViewAdd from '@/views/landing/ProductAdd.vue' 
import ProductViewGet from '@/views/landing/ProductGet.vue' 

export default {
 

 
  data() {
    const post = reactive({
            nama: '',
            content: ''
        });
     let ea = 0;
     let duata = [] 
     let posz = 7  // DATA UNTUK DITAMPILKAN

        axios.get('http://localhost:8000/api/produk/')
            .then(response => {   
             this.duata = response.data.data
             ea = this.duata.length/this.posz
              if(ea>ea.toFixed(0)){
                ea = ea + 1;
              }
              this.ea = ea.toFixed(0);   

            }).catch(error => {
                console.log(error.response.data)
            })


    return {
        name: '',

            page:1, // POSITION PAGINATE
            pageitem: posz, //1 Page x Item
            ffrom:0, // PAGINATE
            fto:posz, // PAGINATE


      files: [],
      dataz:[],
      status: { 
            loading: '',
            status: '', 
            id: 0,
      },
      ea,
      posz,
      sortby: { 
        loading: '',
        sort: '', 
        type: 'asc',  
      },

      post, 
      duata,
      preview: '', 
      productadd: '',
      productall: 'true',
      productget: '',
      productedit: '',
    };
  },

  methods: {

    paginate(n){
            this.page = n
              this.ffrom = (n-1) * this.pageitem
              this.fto = this.ffrom + this.pageitem
              console.log(this.ffrom)

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
        this.sortby.loading = ''
        this.status.loading = ''
    }, 

    test() {    
              console.log(this.ea)
        },
    postSetStatus(idx,statusx){ 
            this.status.loading = 'true';
            this.status.id = idx;
            axios.post('http://localhost:8000/api/admin/produk/edit',
            {
                id: idx,
                status: statusx
            }
             )
            .then(response => {  
               this.onRefresh()
              console.log(response.data) 
            }).catch(error => {
                console.log(error.response.data)
            })
        },

    sortBy(sort) { 
          this.sortby.loading = "true"
          if(this.sortby.type == 'desc'){
            this.sortby.type = 'asc'
          }else{
            this.sortby.type = 'desc' 
          }
          this.sortby.sort = sort  
          this.onRefresh()
        },
    onRefresh(){
                axios.get('http://localhost:8000/api/produk/?sort='+this.sortby.sort+'&type='+this.sortby.type)
                .then(response => { 
                  //assign state posts with response data
                  this.duata = response.data.data 
                  this.resetLoading()
                }).catch(error => {
                    console.log(error.response.data)
                })

        },

    filterProductsByName(products) {
      return this.name
        ? products.filter(
            (product) =>
              !product.nama.toLowerCase().indexOf(this.name.toLowerCase()),
          )
        : products;
    },

    onFileChange(e) {
      this.files = e.target.files;
      this.preview = URL.createObjectURL(event.target.files[0]);  
      console.log(this.files);
    },
    onProductAdd(){
        this.productadd = "true";
        this.productall = "";
        this.productget = "";
        this.productedit = "";
    },
    onProductAll(){
        this.productadd = "";
        this.productall = "true";
        this.productget = "";
        this.productedit = "";
    },
    onProductGet(){
        this.productadd = "";
        this.productall = "";
        this.productget = "true";
        this.productedit = "";
    },
    onProductEdit(id){
            axios.get('http://localhost:8000/api/produk/'+`${id}`)
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

        this.productadd = "";
        this.productall = "";
        this.productget = "";
        this.productedit = "true"; 
    },
  },

  components: { 
            ProductViewAdd, 
            ProductViewGet 
   },computed: {
     filterProducts() {
      return this.filterProductsByName(this.duata);
  }
     
   }
};
</script>
 