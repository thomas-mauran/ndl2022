<template>
  <a href="game/index.html" class="navItem">Game</a>
  <RouterLink to="/form" class="navItem">Formulaire</RouterLink>
  <RouterLink to="/about" class="navItem">A propos</RouterLink>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<style>

.navItem{
  margin: 0px 30px;
  text-decoration: underline;
  font-size: bold;
  color: rgb(59, 131, 52);
  font-size: 2em;

}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
