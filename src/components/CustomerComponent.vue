<template>
    <div class="container">
        <div class="col">
         <h3>Customer</h3>
         <ul class="list-group">
            <li class="list-group-item">
                Nama : {{name}}
            </li>
            <li class="list-group-item">
                Umur : {{age}}
            </li>
            <li class="list-group-item">
                Job : {{designation}}
            </li>
         </ul>    
        </div>
    </div>
</template>
<script>

export default {
    name : "CustomerComponent",
    props : {
        name : {type:String,required:true},
        age  : {type:Number},
        designation : {type:String, required:true}
    }
}
</script>
<style>

</style>