<template>
  <div id="app">
    <img class="logo" src="./assets/红色倾斜.jpg" width="360px" height="360px">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  position: relative;
  top: 0;
  left: 0;
}
</style>
