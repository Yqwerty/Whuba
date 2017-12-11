<template>
    <div class="login-wrapper">
        <Input class="user-name" v-model="value1" icon="person" placeholder="请输入账号"></Input>
        <Input class="user-password" type="password" v-model="value2" icon="locked" placeholder="请输入密码"></Input>
        <Button class="login-button" type="primary" :loading="loading" @click="toLoading">
        </Button>
    </div>
</template>

<script>
    export default {};
</script>

<style>

</style>
