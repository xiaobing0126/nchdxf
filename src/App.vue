<template>
  <el-container class="app-shell">
    <el-header class="app-header">
      <div class="brand">
        欢迎您访问南昌弘盾消防设备有限公司——集研发、生产、销售于一体的门窗制造企业
        ！
      </div>
      <el-icon><Phone /></el-icon>13970083059 欢迎来电订购！
      <el-space>
        <el-tag type="success">Vite</el-tag>
        <el-tag type="primary">Element Plus</el-tag>
        <el-tag type="warning">Sass</el-tag>
      </el-space>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { Phone } from "@element-plus/icons-vue";
</script>
