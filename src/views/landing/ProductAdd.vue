<template>
              

                        <!-- Content Column -->
                        <div class="col-lg-12 mb-4"> 
                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">{{file}}Add Product {{post.nama}}</h6>
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
                                <input type="text" class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>          
                            
                            <div class="form-group">
                                <label for="stok" class="">Jumlah</label>
                                <input type="number" class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>   
                            
                            <div class="form-group">
                                <label for="" class="">Harga Beli</label>
                                <input type="text" class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>   

                            <div class="form-group">
                                <label for="harga" class="">Harga</label>
                                <input type="number" class="form-control" placeholder="">
                                <!-- validation -->                               
                            </div>

                            <div class="form-group">
                                <label for="content" class="">Deskripsi</label>
                                <textarea class="form-control" rows="4" placeholder=""></textarea> 
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
                        <!-- Value Column Content Content -->

</template> 
<script>
import { reactive  } from 'vue'
export default {
  data() {
    const post = reactive({
            nama: '',
            content: ''
        });
    return {
      files: [],
      post,
      preview: '',
    };
  },

  methods: {
    onFileChange(e) {
      this.files = e.target.files;
      this.preview = URL.createObjectURL(event.target.files[0]);  
      console.log(this.files);
    },
  },
};
</script>