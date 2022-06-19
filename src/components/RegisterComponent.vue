<template>
<pre>{{user}}</pre>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Registrasi</p> 
                    </div>
                    <div class="card-body bg-light">
                        <form @submit.prevent="register()">
                            <div class="mb2">
                                <input v-model="user.name" type="text" placeholder="Nama" class="form-control">
                            </div>
                            
                            <div class="mb2">
                                <input v-model="user.email" type="email" placeholder="Email" class="form-control">
                            </div>
                            
                            <div class="mb2">
                                <input v-model="user.password" type="password" placeholder="Password" class="form-control">
                            </div>
                            <br/>
                            <div class="mb3">
                                <button class="btn btn-success">Daftar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "RegisterComponent",
    data : function (){
        return {
            user: {
                name : '',
                email :'',
                password : '',
            }
        }
    },
    methods:{
        register : function(){

        }
    }
}
</script>
<style>

</style>