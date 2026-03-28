<template>
  <div class="section-page">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();

const title = computed(() => {
  const titleKey = String(route.meta.titleKey ?? "");
  if (!titleKey) {
    return t("site.product.defaultTitle");
  }

  return t(`site.routes.${titleKey}`);
});
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
