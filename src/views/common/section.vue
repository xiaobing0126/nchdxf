<template>
  <div class="section-page">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const title = computed(() => String(route.meta.title ?? "页面"));
</script>

<style scoped lang="scss">
.section-page {
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  min-height: 240px;

  h2 {
    margin: 0;
    color: #1f2d3d;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
