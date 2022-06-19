<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-md">
                    <div class="card-body">
                        <div class="h3 display">Counter : {{stats.str}}</div>
                        <button @click="decr" class="btn btn-danger m-1">Decrese</button>
                        <button @click="incr" class="btn btn-success m-1">Increase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name : "CounterComponent",
    data : function() {
        return {
            counter : 10,
            stats : {
                str : 0,
                agi : 10,
            }
        }
    },
    methods : {
        incr : function (){
            this.stats.str+=1;
        },
        decr : function (){
            this.stats.str-=1;
        }
    }
}
</script>
<style>

</style>