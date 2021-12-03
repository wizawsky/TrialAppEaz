<template> 

                        <!-- Content Column -->
                        <div class="col-lg-12 mb-4"> 
                             <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary"  >
                                     {{post.nama}}</h6>
                                </div>
                                <div class="card-body">  
                                   {{posts.data}}
                                </div>
                            </div>
                        </div>
                        <!-- Value Column Content Content -->

</template> 
<script>
import axios from 'axios'
import { onMounted, ref, reactive  } from 'vue'
export default {

    setup() {

        //reactive state
        let posts = ref([])
        const post = reactive({
            nama: '',
            harga: '',
            status: '',
            gambar: '',
            stok: '',
            terjual: '',
            persen: '',
            deskripsi: ''
        })


        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/produk/1')
            .then(response => { 
              //assign state posts with response data
              posts.value = response.data

              post.nama = response.data.data.nama
              post.harga = response.data.data.harga
              post.gambar = response.data.data.gambar
              post.deskripsi = response.data.data.deskripsi
              post.status = response.data.data.status
              console.log(response.data)

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method delete
        function postDelete(id) { 
            axios.delete('http://localhost:8000/api/produk/'+`${id}`)
            .then(() => { 
              posts.value.splice(posts.value.indexOf(id), 1);

            }).catch(error => {
                console.log(error.response.data)
            })

        }

        //return
        return {
            post,
            posts,
            postDelete
        }

    },

  data() {  
  },

  methods: {
     
  },
};
</script>