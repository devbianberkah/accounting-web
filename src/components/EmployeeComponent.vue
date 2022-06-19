<template>
<div class="container">
    <div class="row">
        <div class="col">
            <p class="h3">Employee</p>
            <ul class="list-group">
                <li class="list-group-item">
                    Name : {{ this.employee.name }}
                </li>
                <li class="list-group-item">
                    Name : {{ this.name }}
                </li>
                
            </ul>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    name : "EmployeeComponent",
    data : function () {
        return {
            employee : {
                name : "Topo",
                job  : "Engineer"
            },
            name : "Sukma",
            job  : "Coder"
        }
    }
}
</script>
<style>

</style>
