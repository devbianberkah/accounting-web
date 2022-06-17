<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3">Akuntansi</p>
          <p class="fst-italic">Aplikasi Akuntansi DevBian</p>
        </div>
      </div>
    </div>
  <CustomerComponent age="20" name="Sukma" designation="Front End" />

  </div>
</template>
<script>
import CustomerComponent from "@/components/CustomerComponent.vue";

export default {
  name: 'App',
  components: {
    CustomerComponent
}
}
</script>

<style>
@import "@/style.css";
</style>
