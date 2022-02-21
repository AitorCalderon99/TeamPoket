<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img alt="Vue logo" src="/logo_black.png" id="logo" />
      </a>
      <div class="input-group">
        <input type="text"  name="" placeholder="Buscar..." aria-label="Search"  class="form-control form-control-dark" id="buscador"/>
        <span class="input-group-text" id="basic-addon1">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  </nav>
  <!-- <div class="nav">
    <img alt="Vue logo" src="/logo_black.png" id="logo" />
    <div class="navbar">
       <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
  <router-view />-->
</template>

<style>
@import "./assets/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #f1f1f1;
}

#logo {
  width: 20rem;
  max-height: auto;
}

.form-control {
  border-radius: 0.75rem;
}

</style>
