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
  <AuthUserComponent/>  
  </div>
</template>
<script>
import AuthUserComponent from './components/AuthUserComponent.vue'

export default {
  name: 'App',
  components: {
    AuthUserComponent,
  }
}
</script>

<style>
@import "@/style.css";
</style>
