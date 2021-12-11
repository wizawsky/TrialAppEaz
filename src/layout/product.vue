 <template>
 <div class="row">
      
                    <div class="col-lg-12 mb-4" v-if="duata.length>0">  
                        <div class="row d-flex justify-content-end">
                                <div class="col-md-6 mb-2"> 
                                     
                                         <div class="btn-group dropdown mb-2">
                                              <button type="button" class="btn btn-oatas btn-md dropdown-toggle shadow-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i class="fa fa-list-ul" aria-hidden="true"></i> Sort
                                              </button>
                                              <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#"  @click.prevent="sortItem('persen_desc')" >Diskon Persen</a>
                                                <a class="dropdown-item" href="#"  @click.prevent="sortItem('potongan_desc')" >Diskon Harga</a> 
                                                <a class="dropdown-item" href="#"  @click.prevent="sortItem('hargap_asc')" >Harga Termurah</a> 
                                                <a class="dropdown-item" href="#"  @click.prevent="sortItem('hargap_desc')" >Harga Tertinggi</a> 
                                              </div>
                                        </div>&nbsp;    
 
                            <button class="btn btn-sm  btn-oatas shadow-sm mb-2" v-if="loading" >

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



   <!-- Begin Page Content -->
                <div class="container-fluid col-md-12 mt-3 mb-2" v-if="duata.length==0&&rute=='productid'">

                    <!-- 404 Error Text -->
                    <div class="text-center">
                        <div class="error mx-auto" data-text="404">404</div>
                        <p class="text-gray-800 mb-5 h1">Produk Not Found</p> 
                    </div>

                </div>
                <!-- /.container-fluid -->



    <div  v-for="(post, index) in filterProducts.slice(ffrom,fto)" :key="index">
         <div class="col-auto" v-if="post.status=='Aktif'" >
             <div class="card shadow-sm border rounded p-0 m-0  mx-auto mb-4" >
  <div class="top-right bg-abang text-white font-weight-bold px-2 rounded" v-if="post.persen>0">{{post.persen}}%</div>
                <!--  EDIT LAYOUT IMAGE PER ITEM --> 
          <img class="card-img-top" 
  style=" height: 14rem; width: 14rem; object-fit: cover; object-position: center;" :src="amigos" alt="Card image cap">
          <div class="card-body bg-oatas m-0">
            <h5 class="card-title font-weight-bold text-biasa fomtea">{{post.nama}}</h5>
            <p class="card-text text-biasa " :class="{fomtea:post.harga==post.hargap,fomt:post.harga!=post.hargap}"><del v-if='post.harga!=post.hargap'>Rp. {{toduit(post.harga)}}</del><span v-else>Rp. {{toduit(post.harga)}}</span></p>
            <p class="card-text text-biasa fomt text-abang"  :class="{fomt:post.harga==post.hargap,fomtea:post.harga!=post.hargap}"><span  v-if='post.harga!=post.hargap'>Rp. {{toduit(post.hargap)}}</span><span v-else>&nbsp;</span></p>
            <a data-toggle="modal" data-target="#previewModal" class="btn btn-sm btn-light shadow-sm float-right" @click="previewProduct(index)">Detail</a>
          </div>
        </div>
      </div>  
  </div>  

  </div>


    <!-- Modal -->
    <div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog " role="document">
                <div class="modal-content border-0">
                  <div class="modal-header bg-gradientz-secondary shadow" v-if="showProd">
                    <h3 class="modal-title text-biasa font-weight-bold" id="exampleModalLabel">{{post.nama}}</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div> 
                  <div class="modal-body row mb-0" v-if="showProd">

                    <div v-if="post.persen>0" class="col-md-12 text-biasa pt-1 pb-1 pl-3 pr-1 text-right font-weight-bold">
                        <label class="px-2 mx-2 fomtea py-1  bg-abang shadow-sm text-white">{{post.persen}}%</label> 
                    </div> 

                    <div class="col-md-2"></div>
                    <div class="col-md-8 mb-2">
                        <img class="img-fluid"  :src="amigos" alt="Card image cap">   
                    </div>
                    <div class="col-md-2"></div>
                    <div class="bg-oatas col-md-12 m-0 pl-4 pt-2 pb-2 mb-2">
                        <label class="text-biasa " :class="{'fomt-value2':post.harga==post.hargap,fomtea:post.harga!=post.hargap}"><del v-if='post.harga!=post.hargap'>Rp. {{toduit(post.harga)}}</del><span v-else>Rp. {{toduit(post.harga)}}</span></label>&nbsp;
            <label class="text-biasa fomt text-abang"  :class="{fomt:post.harga==post.hargap,'fomt-value2':post.harga!=post.hargap}"><span  v-if='post.harga!=post.hargap'>Rp. {{toduit(post.hargap)}}</span><span v-else>&nbsp;</span></label> 
                    </div>
                    <div class="col-md-12 text-biasa pt-1 pb-1 pl-3 pr-3">
                        <label class="px-2 mx-2 fomt py-1 rounded bg-gray-400 shadow-sm">Stok : {{post.stok}}</label>
                        <label class="px-2 mx-2 fomt py-1 rounded bg-gray-400 shadow-sm">Terjual : {{post.stok}}</label>
                    </div> 
                    <div class="col-md-12 text-biasa pt-1 pb-1 pl-3 pr-3">
                        {{post.deskripsi}}
                    </div>
            
                  </div> 
                </div>
              </div>
            </div>



</template>

<script> 
import axios from 'axios'  
    export default {
  name: 'Home',
  data() {   
     let ea = 0;
     let duata = [] 
     let posz = 10  // DATA UNTUK DITAMPILKAN
     if( this.$route.name =="productid"){
        axios.get(this.$laravel+'produk/'+this.$route.params.id)
            .then(response => {   
              if(response.data.success){
             this.duata[0] = response.data.data
             ea = this.duata.length/this.posz
              if(ea>ea.toFixed(0)){
                ea = ea + 1;
              }
              this.ea = ea.toFixed(0);    
            }else{
                this.duata = []
            }

            }).catch(error => {
                console.log(error.response.data)
            })

     }else{
        axios.get(this.$laravel+'produk/')
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

     }
        
   return { 
        show: false, 
        duata,
        posz,
        rute: this.$route.name,
        ea,
        name:'',

            page:1, // POSITION PAGINATE
            pageitem: posz, //1 Page x Item
            ffrom:0, // PAGINATE
            fto:posz, // PAGINATE
            loading: false, 


        amigos: require('@/assets/img/prinny.png'), 
        url:  this.$ownAddress,


        post:{},
        showProd:false,
      }
  } ,
  methods :{ 

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

    previewProduct(id){
        this.post = this.duata[id]
        this.showProd = true
    },
    toduit(amount) {
      if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) { 
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        return amount;
    }
    },
    sortItem(e){
         axios.get(this.$laravel+'produk/?sort='+e.split('_')[0]+'&type='+e.split('_')[1])
                    .then(response => {   
                     this.duata = response.data.data
                     let ea = this.duata.length/this.posz
                      if(ea>ea.toFixed(0)){
                        ea = ea + 1;
                      }
                      this.ea = ea.toFixed(0);   
                        console.log(response.data.data)

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
  },
   computed: {
     filterProducts() {
      return this.filterProductsByName(this.duata);
    }    
   }

}
</script>
 
 
<style>
  #linkz {
            text-decoration: none;
        } 

.cardz:hover{
    box-shadow: 8px 8px 8px blue;
    transform:scale(1.1);
}

.top-right {
  position: absolute;
  top: 8px;
  right:10px;
}

</style>