<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <el-card class="home-card" shadow="hover">
    <template #header>
      <div class="card-header">项目初始化完成</div>
    </template>

    <el-space direction="vertical" size="large" fill>
      <el-alert
        title="已启用：Vue Router + Pinia + Element Plus + Sass"
        type="success"
        :closable="false"
      />

      <el-space>
        <el-button type="primary" @click="counterStore.increment"
          >Pinia +1</el-button
        >
        <el-tag>count: {{ counterStore.count }}</el-tag>
        <el-tag type="info">double: {{ counterStore.doubleCount }}</el-tag>
      </el-space>
    </el-space>
  </el-card>
</template>
