<template>
    <title> AYA YA</title>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA POST</h4>
                        <hr>
                        <div class="row d-flex text-center"> 
                        <div class="col">
                        <router-link :to="{name: 'post.login'}" class="btn btn-md btn-primary">Login</router-link>
                        </div>
                        
                        <div class="col">
                        <button class="btn btn-md btn-secondary"  @click="reloadPage">  <i class="fas fa-redo"></i> </button>
                    </div>
                        <div class="col">
                        <router-link :to="{name: 'post.create'}" class="btn btn-md btn-warning">TAMBAH POST</router-link>
                    </div>
                    <div class="col">
                        <router-link :to="{name: 'post.create'}" class="btn btn-md btn-danger">TAMBAH POST</router-link>
                    </div>
                    <div class="col">
                        <router-link :to="{name: 'post.create'}" class="btn btn-md btn-success">TAMBAH POST</router-link>
                    </div>

                    <div class="col">
                        <router-link :to="{name: 'post.create'}" class="btn btn-md btn-info">TAMBAH POST</router-link>
                    </div>
                        </div>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class=" bg-primary text-white">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">CONTENT</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(post, index) in posts" :key="index">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.content }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'post.edit', params:{id: post.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="postDelete(post.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
    methods: {
    reloadPage() { 
      window.location.reload();         
}
},
    setup() { 
        let posts = ref([])
         onMounted(() => { 
            axios.get('http://localhost:8000/api/post')
            .then(response => {posts.value = response.data.data}).catch(error => {
                console.log(error.response.data)
            }) }) 

        function postDelete(id) { 
            axios.delete(`http://localhost:8000/api/post/${id}`)
            .then(() => { 
              posts.value.splice(posts.value.indexOf(id), 1); 
            }).catch(error => {
                console.log(error.response.data)
            })

        } 
        return {
            posts,
            postDelete
        }
    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>