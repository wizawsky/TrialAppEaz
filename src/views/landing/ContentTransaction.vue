<template>
              

                <!-- Begin Page Content -->
                <div class="container-fluid">
  
                    <!-- Content Row -->
                    <div class="row">
                      <div class="col-lg-5">
                        
                        <!-- Pie Chart --> 
                            <div class="card shadow mb-2 border-secondary"> 
                                <div class="card-body row d-flex">  
                                     <div class="col-md-9 mb-3"> 
                        <div class="input-group shadow-sm"> 
                              <div class="input-group-prepend">
                                <div class="input-group-text bg-oatas rounded-sm border-0"><i class="far fa-user fa-sm text-warning"></i></div>
                              </div>
                            <input type="text"  v-model="vmember" class="form-control bg-white border-0 small" placeholder="Member..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-white" type="button">
                                    <i class="fas fa-search fa-sm text-warning"></i>
                                </button>
                            </div>
                        </div>  
                      </div> 
                      <div class="col-md-3"></div> 
                       <div class="col-md-12 m-0 p-0 border-0 fomt-text1">  
                     <div class="table-responsive px-2 card shadow-none mb-4 border-0">
                                   <table class="table table-borderless mb-4 border-0"   id="dataTable" width="100%" cellspacing="0">
                                    <thead class="card-header p-0 m-0 bg-oatas border-0 text-biasa shadow-sm">
                                        <tr> 
                                        <th><label >Item</label></th>
                                        <th><label >Price</label></th>
                                        <th><label >Qty</label></th>
                                        <th><label >Disc</label></th> 
                                        <th><label >Total</label></th> 
                                        <th><label ></label></th>  
                                        </tr>
                                    </thead>
   

                            <!--- GET DATA NOT FIRST TIME -->
                                <tbody class="card-body text-biasa border-0">

                                <tr v-for="(produk, index) in keranjang" :key="index" :class="{'border-top':index!=0}" >  
                                    <td>{{produk.nama}}</td>  
                                    <td>{{produk.harga}}</td>  
                                    <td>{{produk.qty}}</td>  
                                    <td>{{produk.diskon}}</td>  
                                    <td>{{produk.total}}</td>  
                                    <td><i class="fas fa-times-circle text-abang" type="button" @click="subKeranjang(index)"></i></td>                  
                                </tr>   


                            </tbody> 
                            <!--- GET DATA NOT FIRST TIME --> 
                                </table>
                            </div>

                     <div class="bg-gray-200 shadow-none mx-0 pt-2 px-2 pb-2 border-0 text-biasa">
                        <div class=" row">
                                <div class="col-md-6 text-left">
                                    <span class="font-weight-bold fomt">Sub Total </span><br>
                                    <span class="fomt-text">Discount</span><br>
                                    <span class="fomt-text">Discount Member</span><br>
                                    <span class="fomt-text">Tax </span><br>
                                </div>
                                <div class="col-md-6 text-right fomt">
                                    <span class="font-weight-bold fomt">Rp. {{subtotalsemua}}</span><br>
                                    <span class="fomt-text">Rp. {{diskon}}</span><br>
                                    <span class="fomt-text">Rp. {{diskonmember}}</span><br>
                                    <span class="fomt-text">Rp. {{tax}}</span><br>
                                </div> 
                            </div>                          
                            </div>
 
                     <div class="shadow-none mx-0 m-0 pt-2 px-2 pb-2 border-0" style="color:#FF7A00">
                        <div class=" row">
                                <div class="col-md-6 text-left">
                                    <span class="font-weight-bold fomt-value2">TOTAL</span> 
                                </div>
                                <div class="col-md-6 text-right">
                                    <span class="font-weight-bold fomt-value2">Rp.{{totalsemua}}</span> 
                                </div>

                            </div>                          
                            </div>

                       </div> 


                                </div>
                            </div> 
                    <button type="button" class="btn btpay shadow-sm text-biasa border-0 btn-lg btn-block font-weight-bold" @click="pay">P A Y</button>

                        <div class="my-4 .d-lg-none .d-xl-none ">&nbsp;</div>
                        <div class="my-4 .d-lg-none .d-xl-none ">&nbsp;</div>
                      </div>



                      <div class="col-lg-7">
                        <div class="row">
                                <div class="col-md-12 row mb-3">
                                    <div class="col-md-5">
                                        <button class="btkaton text-biasa btn btn-sm border-secondary mx-1 my-1 px-4">Produk</button>  
                                        <button class="btkat btn btn-sm border-secondary mx-1 my-1 px-4">Produk</button>  
                                        <button class="btkat btn btn-sm border-secondary mx-1 my-1 px-4">Produk</button>  
                                        <a class="btn btred btn-sm border-abang mx-1 my-1 text-abang font-weight-bold px-4">SALE</a>  
                                        <button class="btkat btn btn-sm border-secondary mx-1 my-1 px-4">Produk</button>  
                                        <button class="btkat btn btn-sm border-secondary mx-1 my-1 px-4">Produk</button>  
                                    </div>
                                    <div class="col-md-2"></div>

                                    <div class="col-md-5">  <div class="input-group shadow-sm"> 
                              <div class="input-group-prepend">
                                <div class="input-group-text rounded-sm  bg-oatas border-0"><i class="fas fa-shopping-bag fa-sm text-warning"></i></div>
                              </div>
                            <input type="text"  v-model="vproduk" class="form-control bg-white border-0 small" placeholder="Produk"
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-white" type="button">
                                    <i class="fas fa-search fa-sm text-warning"></i>
                                </button>
                            </div>
                        </div> </div>  
                                </div>

                                <div class="col-md-12 mb-3" > 
                            <div class="card shadow border-0  py-4 px-1 overflow-auto" style="height: 30rem"> 
                                <div class="card-body py-0">  

                                    <div class=" row "> 
 

                                    <div type="button" class=" col-md-3 mb-3 px-1"  v-for="(produk, index) in produks" :key="index" @click="addKeranjang(index)"> 
                                            <div class=" p-2 card text-biasa bg-oatas border-0 shadow-sm fomt-text2"> 
                                              <div class="text-left font-weight-bold" >{{produk.nama}}</div>                                     
                                              <div class="text-right" >{{produk.harga}}</div>                                     
                                          </div>
                                    </div>

 




                                    </div> 
                                  </div>
                              </div>


                                </div>

                        </div>                        
                      </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

 
</template> 
 <script>    
    export default { 
    data() {
      return {
        vproduk: "",
        vmember: "",
        imgProfile:  require('@/assets/'+'img/'+'prinny.png'),
            produks: [
              { id: 1,nama: 'Faisal Wash',harga: 'Rp. 65.000',diskon: '5%',hargai: 65000}, 
              { id: 2,nama: 'Faisal Washi',harga: 'Rp. 65.000',diskon: '5%',hargai: 65000}, 
              { id: 3,nama: 'Faisal Washa',harga: 'Rp. 60.000',diskon: '5%',hargai: 60000}, 
              { id: 4,nama: 'Faisal Washo',harga: 'Rp. 6000',diskon: '5%',hargai: 6000}, 
              { id: 5,nama: 'Faisal Washe',harga: 'Rp. 5.000',diskon: '5%',hargai: 5000}, 
           ],
           keranjang: [ 
              { id: 1,nama: 'Faisal Wash',harga: 'Rp. 65.000',qty:1,diskon: '5%',hargai: 65000,totali: 65000,total: "Rp. 65.000"}, 
           ],
           tax : 15000,
           diskon : 0,
           diskonmember : 0,

      }
    },
      methods:{
          pay(){
            const dat = {nama: "Faisol",harga: 'Rp. 20.000'};
            this.produks.push(dat);
          },
          addKeranjang(e){ 
            const ker = this.keranjang;
            for (let i = 0; i < ker.length; i++) {
              if(ker[i].id == this.produks[e].id){
                this.keranjang[i].qty = this.keranjang[i].qty + 1; 
                this.keranjang[i].totali = this.keranjang[i].totali + this.produks[e].hargai; 
                this.keranjang[i].total = "Rp. "+this.keranjang[i].totali
                return
              } 
            }
                const dat = this.produks[e]
                dat.qty = 1
                dat.total = dat.harga
                dat.totali = dat.hargai
                this.keranjang.push(dat); 
                console.log(dat)
          },
          subKeranjang(e){
              this.keranjang.splice(e,1);
          },
      },
      computed:{
       subtotalsemua(){
             const ker = this.keranjang;
             let totalz = 0;
            for (let i = 0; i < ker.length; i++) { 
                totalz = totalz + this.keranjang[i].totali;
            }     
             return totalz;
        },
        totalsemua(){
             const ker = this.keranjang;
             let totalz = 0;
            for (let i = 0; i < ker.length; i++) { 
                totalz = totalz + this.keranjang[i].totali;
            }     
             return totalz;
        },
      }, 

  };

 </script>
 