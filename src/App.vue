<template>
  <el-container class="app-shell">
    <el-header class="app-header">
      <p class="brand">
        欢迎您访问南昌弘盾消防设备有限公司——集研发、生产、销售于一体的门窗制造企业！
      </p>
      <div class="phone">
        <el-icon><Phone /></el-icon>
        13970083059 欢迎来电订购！
      </div>
      <el-popover placement="bottom" trigger="hover">
        <template #reference>
          <p class="lang-title">{{ t("common.language") }}</p>
        </template>
        <div class="lang">
          <el-button text @click="changeLocale('zh-CN')">中文</el-button>
          <el-button text @click="changeLocale('en-US')">English</el-button>
        </div>
      </el-popover>
    </el-header>

    <div class="sub-header">
      <img src="@/assets/home/logo.png" alt="" />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-list"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>关于弘盾</template>
          <el-menu-item index="2-1">公司简介</el-menu-item>
          <el-menu-item index="2-2">企业荣誉</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">新闻资讯</el-menu-item>
        <el-sub-menu index="4">
          <template #title>产品中心</template>
          <el-menu-item index="4-1">钢质防火门</el-menu-item>
          <el-menu-item index="4-2">木质防火门</el-menu-item>
          <el-menu-item index="4-3">钢质防火窗</el-menu-item>
          <el-menu-item index="4-4">铝质防火窗</el-menu-item>
          <el-menu-item index="4-5">不锈钢防火门</el-menu-item>
          <el-menu-item index="4-6">特质防火卷帘</el-menu-item>
          <el-menu-item index="4-7">挡烟垂壁</el-menu-item>
          <el-menu-item index="4-8">防火玻璃</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="5">检验报告</el-menu-item>
        <el-menu-item index="6">厂房环境</el-menu-item>
        <el-menu-item index="7">联系我们</el-menu-item>
      </el-menu>
    </div>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

import { setAppLocale, type Locale } from "@/locales";

import { ref, watch } from "vue";

const activeIndex = ref("1");
const menuRouteMap: Record<string, string> = {
  "1": "/home",
  "2-1": "/about/introduction",
  "2-2": "/about/honor",
  "3": "/news",
  "4-1": "/products/steel-door",
  "4-2": "/products/wood-door",
  "4-3": "/products/steel-window",
  "4-4": "/products/aluminum-window",
  "4-5": "/products/stainless-door",
  "4-6": "/products/shutter",
  "4-7": "/products/smoke-barrier",
  "4-8": "/products/fire-glass",
  "5": "/reports",
  "6": "/factory",
  "7": "/contact",
};

const routeMenuMap = Object.fromEntries(
  Object.entries(menuRouteMap).map(([key, path]) => [path, key]),
) as Record<string, string>;

watch(
  () => route.path,
  (path: string) => {
    if (path.startsWith("/news")) {
      activeIndex.value = "3";
      return;
    }

    const currentIndex = routeMenuMap[path];
    if (currentIndex) {
      activeIndex.value = currentIndex;
    }
  },
  { immediate: true },
);

const handleSelect = (key: string) => {
  const targetPath = menuRouteMap[key];
  if (targetPath && targetPath !== route.path) {
    router.push(targetPath);
  }
};

// 切换语言
function changeLocale(locale: string) {
  setAppLocale(locale as Locale);
}
</script>

<style lang="scss" scoped>
.app-shell {
  background-color: #ffffff;
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2f353b;
    color: #ffffff;

    .brand {
      font-size: 20px;
      font-weight: 700;
    }

    .phone {
      display: flex;
      align-items: center;
    }

    .lang-title {
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      color: #ffffff;
    }
  }

  .sub-header {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px 32px;

    img {
      width: 240px;
      height: auto;
    }

    .el-menu-list {
      flex: 1;
      background: transparent;
      border: none;

      :deep(.el-menu-item) {
        font-size: 16px;
      }
      :deep(.el-sub-menu__title) {
        font-size: 16px;
      }
      :deep(.el-menu--horizontal > .el-menu-item.is-active) {
        color: $brand-color !important;
        border-bottom: 2px solid $brand-color !important;
      }
      :deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
        color: $brand-color !important;
      }
    }
  }

  .home-card {
    max-width: 820px;
    margin: 32px auto;
  }

  .card-header {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>

<style lang="scss">
.lang {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.el-menu-list.el-menu--horizontal {
  --el-menu-hover-bg-color: #{$brand-hover-bg};
  --el-menu-hover-text-color: #{$brand-color};
  --el-menu-active-color: #{$brand-color};
}

.el-menu-list.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
  color: $brand-color !important;
  background-color: $brand-hover-bg !important;
}
</style>
