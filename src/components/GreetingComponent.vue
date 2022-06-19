<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="card shadow-lg">
                    <div class="card-body">
                    {{ msg }}
                    <button @click="greet('hai')" class="btn btn-success m-1">Hai</button>
                    <button @click="greet('hello')" class="btn btn-warning m-1">Heloo</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name : "GreetingComponent",
    data :function(){
        return {
            msg: "hello"
        }
    },
    methods :{
        greet :function(val){
            this.msg = val;
        },
    }
}
</script>
<style>

</style>