<template>
  <div id="app">
    <img class="logo" src="./assets/红色倾斜.jpg" width="360px" height="360px">
    <div class="login-wrapper">
      <Input class="user-name" v-model="value1" icon="person" placeholder="请输入账号"></Input>
      <Input class="user-password" v-model="value2" icon="locked" placeholder="请输入密码"></Input>
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
    name: 'app',
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
      },
      toLoading2() {
        this.loading2 = true;
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
  position: relative;
  top: 0;
  left: 0;
}

.login-wrapper {
  display: inline-block;
  width: 300px;
}

.user-name,
.user-password {
  width: 100%;
  height: 50px;
}
.login-button {
  width: 100%;
  height: 40px;
}

.ivu-input {
  height: 40px;
}

.ivu-input-icon{
  line-height: 40px;
}
</style>
