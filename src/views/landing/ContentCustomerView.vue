<template>
                <!-- Begin Page Content -->
                <div class="container-fluid">
    

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered" role="document"> 

    <div class="modal-content  border-0" v-if="vform==1">
      <div class="modal-header  border-0 bg-oatas text-biasa  ">
        <h5 class="modal-title  font-weight-bold" id="exampleModalLongTitle">Edit Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
              <label for="exampleInputEmail1">No. Member</label>
              <input type="email" class="form-control" v-model="cust.idm" placeholder="Nomor Member"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">Nama</label>
              <input type="email" class="form-control" v-model="cust.nama" placeholder="Nama Member"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">NIK</label>
              <input type="email" class="form-control"  v-model="cust.nik"   placeholder="NIK"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">Alamat</label>
              <input type="email" class="form-control"  v-model="cust.alamat" placeholder="Alamat"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">No. HP</label>
              <input type="email" class="form-control"  v-model="cust.nohp"  placeholder="No. HP"> 
            </div>  
            <div class="form-group">
              <label for="exampleInputEmail1">Status</label>
              <select class="form-control" v-model="cust.status">
                <option>Therapist</option>
                <option>Konsultasi Dokter</option>
                <option>Treatment</option>
                <option>Selesai</option> 
              </select>
            </div>  
      </div> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-oatas"  data-dismiss="modal" @click="update(cust)">Save changes</button>
      </div>
    </div>


        <div class="modal-content  border-0" v-if="vform==2">
      <div class="modal-header  border-0 bg-oatas text-biasa  ">
        <h5 class="modal-title  font-weight-bold" id="exampleModalLongTitle">Add Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group">
              <label for="exampleInputEmail1">No. Member</label>
              <input type="email" class="form-control" v-model="cust.idm" placeholder="Nomor Member"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">Nama</label>
              <input type="email" class="form-control" v-model="cust.nama" placeholder="Nama Member"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">NIK</label>
              <input type="email" class="form-control"  v-model="cust.nik"   placeholder="NIK"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">Alamat</label>
              <input type="email" class="form-control"  v-model="cust.alamat" placeholder="Alamat"> 
            </div> 
            <div class="form-group">
              <label for="exampleInputEmail1">No. HP</label>
              <input type="email" class="form-control"  v-model="cust.nohp"  placeholder="No. HP"> 
            </div>  
            <div class="form-group">
              <label for="exampleInputEmail1">Status</label>
              <select class="form-control" v-model="cust.status">
                <option>Therapist</option>
                <option>Konsultasi Dokter </option>
                <option>Treatment</option>
                <option>Selesai</option> 
              </select>
            </div>  
      </div> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-oatas"  data-dismiss="modal" @click="add(cust)">Add Customer</button>
      </div>
    </div>

  </div> 
</div>
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
                            <input type="text"  v-model="name" class="form-control bg-white border-0 small" placeholder="Customer Name..."
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
                                        <th><label @click.prevent="sortBy('id')">No. Member</label></th>
                                        <th><label @click.prevent="sortBy('name')">Nama</label></th> 
                                        <th><label @click.prevent="sortBy('stok')">Tgl. Kunjungan</label></th> 
                                        <th><label @click.prevent="sortBy('persen')">No. HP</label></th> 
                                        <th><label @click.prevent="sortBy('terjual')">Status</label></th>  
                                        <th><label>Aksi</label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">
                                     <tr v-for="(post, index) in filterProducts.slice(ffrom,fto)" :key="index" :class="{ 'border-top' : index != 0 }"> 
                                    <td class="text-center">{{ index+ffrom+1}}</td>
                                    <td>{{ post.idm }}</td>
                                    <td   v-on:click="showEditCustomer(index)" data-toggle="modal" data-target="#exampleModalCenter" >{{ post.nama }}</td> 
                                    <td>{{ post.kunjungan }}</td> 
                                    <td>{{ post.nohp }}</td>
                                    <td>  
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-oatas btn-sm text-orange rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{post.status}}
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

  















                        <!-- ISI KONTENT --> 
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
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
        },
        {
            "id": "1",
            "idm": "125782651",
            "nama": "Jumados Krastos",
            "nik": "353253235325",
            "alamat": "Jln Dimana",
            "lahir": "21/12/2012",
            "nohp": "089325983275289",
            "status": "Therapist",
            "kunjungan": "21/12/2021"
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
 