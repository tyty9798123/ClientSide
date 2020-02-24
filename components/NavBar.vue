<template>
    <div>
        <Login />
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-image
            class="meyin-logo"
            src="https://lh3.googleusercontent.com/a-/AAuE7mDmG-wHg00jQ4zBmqmf-K9Cv4yrDRqyXVUdUq_wNg=s192"
            fit="cover">
            </el-image>
            <el-menu-item index="1">首頁</el-menu-item>
            <el-submenu index="2">
                <template slot="title">學習筆記</template>
                <el-menu-item index="2-1">選項1</el-menu-item>
                <el-menu-item index="2-2">選項2</el-menu-item>
                <el-menu-item index="2-3">選項3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">插槽</template>
                <el-menu-item index="2-4-1">選項1</el-menu-item>
                <el-menu-item index="2-4-2">選項2</el-menu-item>
                <el-menu-item index="2-4-3">選項3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">登入</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  import Login from './Users/login.vue';
  export default {
    components: {
        Login
    },
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        var vm  = this;
        if (key == 3){
            vm.$bus.$emit('show_log_in_dialog');
        }
      }
    }
  }
</script>

<style scoped>
    .meyin-logo{
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 20px;
        width: 50px;
        height: 50px;
        float: left;
    }
    el-menu-item{
        float: right;
    }
</style>
