<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div class="index-tab">
      <router-link to="/register">注册</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import register from './components/register/register';
  import login from './components/login/login';

  export default {
    components: {
      register,
      login
    }
  };
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 360px;
  height: 210px;
  position: absolute;
  top: 25%;
  left: 50%;
  margin-left: -180px;
  margin-top: -105px;
}

.index-tab {
  width: 144px;
  height: 35px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -72px;
  margin-top: -17px;
  font-size: 20px;
}
</style>
