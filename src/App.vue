<template>
  <div id="app">
    <Jousters />
  </div>
</template>

<script>
import Jousters from './components/Jousters.vue'

export default {
  name: 'App',
  components: {
    Jousters
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
