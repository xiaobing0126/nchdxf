<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";
import { setAppLocale, type Locale } from "@/locales";
import { useI18n } from "vue-i18n";

const counterStore = useCounterStore();
const { t, locale } = useI18n();

const localeTag = computed(() => locale.value);

function changeLocale(nextLocale: Locale) {
  setAppLocale(nextLocale);
}
</script>

<template>
  <el-card class="home-card" shadow="hover">
    <template #header>
      <div class="card-header">{{ t("home.title") }}</div>
    </template>

    <el-space direction="vertical" size="large" fill>
      <el-alert :title="t('home.enabled')" type="success" :closable="false" />

      <el-tag type="info">{{ t("home.welcome") }}</el-tag>

      <el-space>
        <el-tag>{{ t("common.currentLang") }}: {{ localeTag }}</el-tag>
        <el-button @click="changeLocale('zh-CN')">{{
          t("common.switchToZh")
        }}</el-button>
        <el-button @click="changeLocale('en-US')">{{
          t("common.switchToEn")
        }}</el-button>
      </el-space>

      <el-space>
        <el-button type="primary" @click="counterStore.increment">{{
          t("home.plusOne")
        }}</el-button>
        <el-tag>{{ t("home.count") }}: {{ counterStore.count }}</el-tag>
        <el-tag type="info"
          >{{ t("home.double") }}: {{ counterStore.doubleCount }}</el-tag
        >
      </el-space>
    </el-space>
  </el-card>
</template>

<style lang="scss" scoped></style>
