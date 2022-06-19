<template>
     <div class="container">
        <pre>
            {{ isLoggedIn }}
        </pre>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Registrasi</p> 
                    </div>
                    <div class="card-body bg-light">
                            <div v-if="loading && users.length > 0">
                                <SpinnerComponent/>
                            </div>
                             <div v-if="!isLoading && errorMessage" class="mb2">
                                <div class="fw-bold text-danger">
                                    {{ errorMessage }}
                                </div>
                            </div>
                            <div v-if="isLoggedIn" >
                                <p class="h3">daftar user</p>
                                <table class="table table-hover text-center table-stripped">
                                    <thead class="bg-light">
                                        <th>no</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Alamat</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="user in users" :key="user.id">
                                            <td>{{user.id}}</td>
                                            <td>{{user.name}}</td>
                                            <td>{{user.address.street}}</td>
                                            <td>{{user.email}}</td>
                                        </tr>
                                </tbody>
                                </table>
                            </div>
                            
                            <div v-if="!isLoggedIn && !errorMessage" class="mb2">
                                <div class="fw-bold text-danger">
                                    {{ errorMessage }}
                                </div>
                            </div>
                            <br/>
                            <div class="mb3">
                                <button class="btn btn-success btn-sm m-1" @click="login()">Login</button>
                                <button class="btn btn-danger btn-sm m-1" @click="logout()">Logout</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { UserService } from '@/services/UserService';
import SpinnerComponent from '@/components/SpinnerComponent'

export default {
    name: "AuthUserComponent",
    data: function () {
        return {
            isLoggedIn: false,
            users: [],
            loading: false,
            errorMessage: null,
            // users: UserService.getAllUsers() kalau data di local
        };
    },
    methods: {
        login: function () {
            this.isLoggedIn = true;
        },
        logout: function () {
            this.isLoggedIn = false;
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await UserService.httpGetAllUsers();
            this.loading = false;
            this.users = response.data;
            console.log(response.data);
        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
            console.log(error);
        }
    },
    components: { SpinnerComponent }
}
</script>
<style>

</style>