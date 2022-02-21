<script setup>
</script>

<template>
  <div class="nav">
    <img alt="Vue logo" src="/logo_black.png" id="logo" />
    <div class="navbar">
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link> -->
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  <router-view />
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

.navbar {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
}

.navbar a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #2c3e50;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.navbar a:hover {
  background-color: #dddddd;
}

.navbar a:active {
  background-color: #bbbbbb;
}
</style>
