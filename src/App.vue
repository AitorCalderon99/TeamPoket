<script setup>
</script>

<template>
  <div id="nav">
      <img alt="Vue logo" src="./assets/logo.png" />
      <div class="navbar">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: .5rem;
}

.navbar a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #2c3e50;
  border-radius: 3px;
  padding: .5rem 1rem;
  transition: all .3s ease;
}

.navbar a:hover {
  background-color: #dddddd;
}

.navbar a:active {
  background-color: #bbbbbb;
}
</style>
