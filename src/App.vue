<template>
  <el-container class="app-shell">
    <el-header class="app-header">
      <p class="brand">
        {{ t("site.app.brandWelcome") }}
      </p>
      <div class="header-actions">
        <div class="phone">
          <el-icon><Phone /></el-icon>
          <span>{{ t("site.app.phoneHint") }}</span>
        </div>
        <el-popover placement="bottom" trigger="hover">
          <template #reference>
            <p class="lang-title">{{ t("common.language") }}</p>
          </template>
          <div class="lang">
            <el-button text @click="changeLocale('zh-CN')">
              {{ t("common.switchToZh") }}
            </el-button>
            <el-button text @click="changeLocale('en-US')">
              {{ t("common.switchToEn") }}
            </el-button>
          </div>
        </el-popover>
      </div>
    </el-header>

    <div class="sub-header">
      <img src="@/assets/home/logo.png" alt="" />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-list"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">{{ t("site.app.nav.home") }}</el-menu-item>
        <el-sub-menu index="2">
          <template #title>{{ t("site.app.nav.about") }}</template>
          <el-menu-item index="2-1">{{
            t("site.app.nav.companyProfile")
          }}</el-menu-item>
          <el-menu-item index="2-2">{{
            t("site.app.nav.companyHonors")
          }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">{{ t("site.app.nav.news") }}</el-menu-item>
        <el-sub-menu index="4">
          <template #title>{{ t("site.app.nav.products") }}</template>
          <el-menu-item index="4-1">{{
            t("site.app.nav.steelFireDoor")
          }}</el-menu-item>
          <el-menu-item index="4-2">{{
            t("site.app.nav.woodenFireDoor")
          }}</el-menu-item>
          <el-menu-item index="4-3">{{
            t("site.app.nav.steelFireWindow")
          }}</el-menu-item>
          <el-menu-item index="4-4">{{
            t("site.app.nav.aluminumFireWindow")
          }}</el-menu-item>
          <el-menu-item index="4-5">{{
            t("site.app.nav.stainlessSteelFireDoor")
          }}</el-menu-item>
          <el-menu-item index="4-6">{{
            t("site.app.nav.premiumFireShutter")
          }}</el-menu-item>
          <el-menu-item index="4-7">{{
            t("site.app.nav.smokeBarrier")
          }}</el-menu-item>
          <el-menu-item index="4-8">{{
            t("site.app.nav.fireRatedGlass")
          }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="5">{{
          t("site.app.nav.testReports")
        }}</el-menu-item>
        <el-menu-item index="6">{{
          t("site.app.nav.factoryEnvironment")
        }}</el-menu-item>
        <el-menu-item index="7">{{ t("site.app.nav.contactUs") }}</el-menu-item>
      </el-menu>
    </div>

    <el-main>
      <router-view />
    </el-main>

    <el-footer class="app-footer">
      <p class="line-1">{{ t("site.app.footer.line1") }}</p>
      <p class="line-2">{{ t("site.app.footer.line2") }}</p>
      <p class="line-3">{{ t("site.app.footer.line3") }}</p>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

import { setAppLocale, type Locale } from "@/locales";

import { ref, watch } from "vue";

const updateDocumentTitle = () => {
  document.title = t("common.siteTitle");
};

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
      updateDocumentTitle();
      return;
    }

    const currentIndex = routeMenuMap[path];
    if (currentIndex) {
      activeIndex.value = currentIndex;
    }

    updateDocumentTitle();
  },
  { immediate: true },
);

watch(
  () => locale.value,
  () => {
    updateDocumentTitle();
  },
  { immediate: true },
);

const handleSelect = (key: string) => {
  const targetPath = menuRouteMap[key];
  if (targetPath && targetPath !== route.path) {
    router.push(targetPath);
  }
};

// Switch language
function changeLocale(locale: string) {
  setAppLocale(locale as Locale);
}
</script>

<style lang="scss" scoped>
.app-shell {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  :deep(.el-main) {
    flex: 1;
  }

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    min-height: 64px;
    padding: 10px 28px;
    background: #2f353b;
    color: #ffffff;

    .brand {
      flex: 1;
      min-width: 0;
      margin: 0;
      line-height: 1.4;
      letter-spacing: 0.2px;
      font-size: 20px;
      font-weight: 700;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-shrink: 0;
    }

    .phone {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      font-size: 18px;
      font-weight: 700;

      .el-icon {
        font-size: 18px;
      }
    }

    .lang-title {
      margin: 0;
      font-size: 24px;
      transform: scale(0.5);
      transform-origin: right center;
      font-weight: 500;
      cursor: pointer;
      color: #ffffff;
      line-height: 1;
      white-space: nowrap;
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
      min-width: 0;
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

      :deep(.el-menu--horizontal) {
        white-space: nowrap;
      }

      :deep(.el-menu-item),
      :deep(.el-sub-menu__title) {
        padding: 0 14px;
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

  .app-footer {
    height: auto;
    min-height: 56px;
    padding: 8px 12px 6px;
    background: #2f353f;
    color: #f0f1f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    p {
      margin: 0;
      line-height: 1.2;
      text-align: center;
      font-weight: 500;
    }

    .line-1 {
      font-size: 14px;
      white-space: nowrap;
    }

    .line-2 {
      font-size: 13px;
      white-space: nowrap;
    }

    .line-3 {
      font-size: 13px;
      white-space: nowrap;
    }
  }
}

@media (max-width: 1200px) {
  .app-shell {
    .app-header {
      padding: 10px 18px;
      gap: 14px;

      .brand {
        font-size: 16px;
      }

      .header-actions {
        gap: 14px;
      }

      .phone {
        font-size: 14px;

        .el-icon {
          font-size: 15px;
        }
      }

      .lang-title {
        font-size: 22px;
      }
    }

    .sub-header {
      padding: 10px 16px;
      gap: 14px;

      img {
        width: 180px;
      }

      .el-menu-list {
        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
          font-size: 14px;
          padding: 0 10px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .app-shell {
    .app-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
      padding: 10px 14px;

      .brand {
        font-size: 14px;
      }

      .header-actions {
        width: 100%;
        justify-content: space-between;
        gap: 10px;
      }

      .phone {
        font-size: 13px;
      }

      .lang-title {
        font-size: 20px;
      }
    }

    .sub-header {
      flex-direction: column;
      align-items: stretch;
      padding: 10px 12px;
      gap: 8px;

      img {
        width: 170px;
      }

      .el-menu-list {
        overflow-x: auto;
        overflow-y: hidden;

        :deep(.el-menu--horizontal) {
          display: inline-flex;
          min-width: max-content;
        }

        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
          font-size: 13px;
          padding: 0 9px;
          height: 46px;
          line-height: 46px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .app-shell {
    .app-header {
      padding: 8px 10px;

      .brand {
        font-size: 13px;
        line-height: 1.5;
      }

      .header-actions {
        flex-wrap: wrap;
        row-gap: 6px;
      }

      .phone {
        font-size: 12px;
        gap: 6px;
        white-space: normal;

        .el-icon {
          font-size: 14px;
        }
      }

      .lang-title {
        font-size: 18px;
      }
    }

    .sub-header {
      padding: 8px 10px;

      img {
        width: 148px;
      }

      .el-menu-list {
        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
          font-size: 12px;
          padding: 0 8px;
          height: 42px;
          line-height: 42px;
        }
      }
    }

    .app-footer {
      min-height: 52px;
      gap: 2px;

      .line-1,
      .line-2,
      .line-3 {
        white-space: normal;
      }

      .line-1 {
        font-size: 12px;
      }

      .line-2 {
        font-size: 12px;
      }

      .line-3 {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 480px) {
  .app-shell {
    .app-header {
      .brand {
        font-size: 12px;
      }

      .phone {
        span {
          font-size: 11px;
        }
      }

      .lang-title {
        font-size: 16px;
      }
    }

    .sub-header {
      img {
        width: 132px;
      }

      .el-menu-list {
        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
          font-size: 11px;
          padding: 0 7px;
          height: 38px;
          line-height: 38px;
        }
      }
    }
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
