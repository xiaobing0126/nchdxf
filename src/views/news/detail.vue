<template>
  <section class="news-detail-page">
    <article v-if="newsItem" class="detail-card">
      <header class="detail-head">
        <h1>{{ newsItem.title }}</h1>
        <div class="meta">{{ newsItem.date }} {{ newsItem.year }}</div>
      </header>

      <div class="detail-content">
        <p
          v-for="(line, index) in contentLines"
          :key="`${newsItem.id}-${index}`"
        >
          {{ line }}
        </p>
      </div>

      <div class="article-nav">
        <button
          type="button"
          class="nav-link"
          :disabled="!prevItem"
          @click="goToSibling(prevItem?.id)"
        >
          {{ t("site.news.detail.previous") }}
          {{ prevItem ? prevItem.title : t("site.news.detail.noMore") }}
        </button>
        <button
          type="button"
          class="nav-link"
          :disabled="!nextItem"
          @click="goToSibling(nextItem?.id)"
        >
          {{ t("site.news.detail.next") }}
          {{ nextItem ? nextItem.title : t("site.news.detail.noMore") }}
        </button>
      </div>

      <div class="actions">
        <el-button class="back-btn" type="primary" @click="goBack">{{
          t("site.news.detail.backToList")
        }}</el-button>
      </div>
    </article>

    <article v-else class="detail-card empty-state">
      <h3>{{ t("site.news.detail.notFoundTitle") }}</h3>
      <p>{{ t("site.news.detail.notFoundDesc") }}</p>
      <el-button class="back-btn" type="primary" @click="goBack">{{
        t("site.news.detail.backToList")
      }}</el-button>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { House } from "@element-plus/icons-vue";
import { getNewsList } from "@/utils/news";

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const newsList = computed(() => {
  locale.value;
  return getNewsList(t);
});

const newsItem = computed(() => {
  const id = String(route.params.id ?? "");
  return newsList.value.find((item) => item.id === id);
});

const currentIndex = computed(() => {
  if (!newsItem.value) {
    return -1;
  }

  return newsList.value.findIndex((item) => item.id === newsItem.value?.id);
});

const prevItem = computed(() => {
  if (currentIndex.value <= 0) {
    return null;
  }

  return newsList.value[currentIndex.value - 1] ?? null;
});

const nextItem = computed(() => {
  if (
    currentIndex.value < 0 ||
    currentIndex.value >= newsList.value.length - 1
  ) {
    return null;
  }

  return newsList.value[currentIndex.value + 1] ?? null;
});

const contentLines = computed(() => {
  if (!newsItem.value) {
    return [];
  }

  return newsItem.value.content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
});

const goBack = () => {
  router.push("/news");
};

const goToSibling = (id?: string) => {
  if (!id) {
    return;
  }

  router.push({ name: "news-detail", params: { id } });
};
</script>

<style scoped lang="scss">
.news-detail-page {
  min-height: 100%;
  padding: 16px 0 28px;
}

.crumb-line {
  max-width: 1180px;
  margin: 0 auto 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  color: #474747;
  font-size: 14px;
  height: 24px;

  .el-icon {
    color: #d1262f;
  }
}

.detail-card {
  max-width: 1180px;
  margin: 0 auto;
  background: #f7f7f7;
  border: 1px solid #e2e2e2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 28px 34px;
}

.detail-head {
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 16px;

  h1 {
    margin: 0;
    color: #2f2f2f;
    font-size: 32px;
    line-height: 1.4;
    font-weight: 700;
  }

  .meta {
    margin-top: 10px;
    color: #9e9e9e;
    font-size: 15px;
  }
}

.detail-content {
  margin-top: 22px;

  p {
    margin: 0;
    color: #4b4b4b;
    font-size: 17px;
    line-height: 1.95;
    text-indent: 2em;

    & + p {
      margin-top: 8px;
    }
  }
}

.article-nav {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px dashed #dddddd;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nav-link {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    color: #555;
    font-size: 15px;
    line-height: 1.6;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover:not(:disabled) {
      color: #be1c22;
    }

    &:disabled {
      color: #a7a7a7;
      cursor: not-allowed;
    }
  }
}

.actions {
  margin-top: 26px;
  display: flex;
  justify-content: center;
}

.back-btn {
  background-color: $brand-color;
  border-color: $brand-color;

  &:hover,
  &:focus-visible {
    background-color: $brand-color;
    border-color: $brand-color;
    opacity: 0.92;
  }
}

.empty-state {
  text-align: center;

  h3 {
    margin: 0;
    color: #3b3b3b;
    font-size: 24px;
  }

  p {
    margin: 10px 0 20px;
    color: #919191;
    font-size: 15px;
  }
}

@media (max-width: 1200px) {
  .detail-card,
  .crumb-line {
    margin-left: 12px;
    margin-right: 12px;
  }
}

@media (max-width: 768px) {
  .detail-card {
    padding: 18px 16px;
  }

  .detail-head {
    h1 {
      font-size: 24px;
    }
  }

  .detail-content {
    p {
      font-size: 15px;
      line-height: 1.8;
      text-indent: 1.5em;
    }
  }

  .crumb-line {
    justify-content: flex-start;
    margin-bottom: 8px;
  }
}
</style>
