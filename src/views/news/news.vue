<template>
  <section class="news-page">
    <article
      v-for="item in newsList"
      :key="item.id"
      class="news-card"
      @click="goToDetail(item.id)"
    >
      <div class="content-block">
        <h3>{{ item.title }}</h3>
        <p>{{ toPreview(item.content) }}</p>
      </div>

      <div class="date-block">
        <strong>{{ item.date }}</strong>
        <span>{{ item.year }}</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { House } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { getNewsList } from "@/utils/news";
import { useRouter } from "vue-router";

const router = useRouter();
const { t, locale } = useI18n();

const newsList = computed(() => {
  locale.value;
  return getNewsList(t);
});

const toPreview = (text: string) => text.replace(/\s+/g, " ").trim();

const goToDetail = (id: string) => {
  router.push({ name: "news-detail", params: { id } });
};
</script>

<style scoped lang="scss">
.news-page {
  padding: 16px 0 30px;
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

.news-card {
  max-width: 1180px;
  margin: 0 auto;
  background: #f6f6f6;
  border: 1px solid #e4e4e4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: minmax(0, 1fr) 190px;
  align-items: stretch;
  height: 206px;
  padding: 28px 32px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #d8d8d8;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);

    .content-block h3 {
      color: #be1c22;
    }
  }

  & + .news-card {
    margin-top: 24px;
  }

  .content-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2px;

    h3 {
      margin: 0;
      color: #333;
      font-size: 50px;
      transform: scale(0.5);
      transform-origin: left center;
      width: 200%;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    p {
      margin: 10px 0 0;
      color: #969696;
      font-size: 16px;
      line-height: 1.75;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .date-block {
    color: #9a9a9a;
    text-align: left;
    justify-self: end;
    align-self: center;
    width: 162px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      display: block;
      font-size: 52px;
      line-height: 1;
      font-weight: 400;
      letter-spacing: 1px;
    }

    span {
      display: block;
      margin-top: 8px;
      font-size: 38px;
      line-height: 1;
      font-weight: 500;
    }
  }
}

@media (max-width: 1200px) {
  .news-card,
  .crumb-line {
    margin-left: 12px;
    margin-right: 12px;
  }
}

@media (max-width: 768px) {
  .news-card {
    grid-template-columns: 1fr;
    gap: 12px;
    height: auto;
    padding: 16px;

    .content-block {
      h3 {
        font-size: 34px;
      }

      p {
        font-size: 15px;
        line-height: 1.6;
        -webkit-line-clamp: 3;
      }
    }

    .date-block {
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 10px;
      width: auto;

      strong {
        font-size: 36px;
      }

      span {
        margin-top: 0;
        width: auto;
        transform: none;
        font-size: 20px;
      }
    }
  }

  .crumb-line {
    justify-content: flex-start;
    margin-bottom: 6px;
  }
}
</style>
