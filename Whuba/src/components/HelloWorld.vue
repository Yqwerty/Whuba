<template>
  <div class="hello">
    <div class="demo-input-suffix">
      <el-input class="user" placeholder="请输入账号" suffix-icon="el-icon-document" v-model="input2">
      </el-input>
      <el-input class="password" placeholder="请输入密码" suffix-icon="el-icon-view" v-model="input21">
      </el-input>
    </div>
    <!-- <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input22">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div> -->
  </div>

  <!-- <el-button type="primary">主要按钮</el-button>
  <el-button type="text">文字按钮</el-button> -->
</template>

<script>
  import fadeclick from './fadeclick/fadeclick';

  export default {
    data() {
      return {
        input2: '',
        input21: ''
      };
    },
    components: {
      fadeclick
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.user, .password{
  width: 300px;
  height: 50px;
}
</style>
