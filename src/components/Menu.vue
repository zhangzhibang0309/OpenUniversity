<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="/home">
      <el-icon><icon-menu /></el-icon>
      <span> 主页 </span>
    </el-menu-item>
    <el-menu-item index="/course">
      <el-icon><setting /></el-icon>
      <span>课程模块</span>
    </el-menu-item>
    <el-menu-item index="/learningmode">
      <el-icon><setting /></el-icon>
      <span>学习形式模块</span>
    </el-menu-item>
    <el-menu-item index="/edusystem">
      <el-icon><setting /></el-icon>
      <span>学制管理模块</span>
    </el-menu-item>
    <el-menu-item index="/level">
      <el-icon><setting /></el-icon>
      <span>层次模块</span>
    </el-menu-item>
    <el-menu-item index="/sourceclass">
      <el-icon><setting /></el-icon>
      <span>资源分类模块</span>
    </el-menu-item>
    <el-menu-item index="/major">
      <el-icon><setting /></el-icon>
      <span>专业模块</span>
    </el-menu-item>

	
  </el-menu>
</template>

<script setup>
import { RouterView } from "vue-router";
import { Menu as IconMenu, Setting } from "@element-plus/icons-vue";
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu {
  height: 100vh;
}
</style>
