<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div class="login-wrapper">
      <Input class="user-name" v-model="value1" icon="person" placeholder="请输入账号"></Input>
      <Input class="user-password" type="password" v-model="value2" icon="locked" placeholder="请输入密码"></Input>
      <Button class="login-button" type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">登录</span>
        <span v-else>登录中...</span>
      </Button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    // name: 'app',
    data() {
      return {
        value1: '',
        value2: '',
        loading: false
      };
    },
    methods: {
      toLoading() {
        this.loading = true;
      }
    }
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

html {
  width: 100%;
  height: 100%;
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

.login-wrapper {
  display: inline-block;
  position: relative;
  top: 300px;
  width: 300px;
}

.user-name,
.user-password,
.login-button {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}
.login-button {
  width: 100%;
  height: 40px;
  margin-bottom: 0;
}

.ivu-input {
  height: 40px;
  font-size: 18px;
  font-family: 'Helvetica';
}

.ivu-input-icon {
  line-height: 40px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}
</style>
