<template>
  <section class="intro-wrap">
    <div class="intro-content">
      <p>{{ t("site.introduction.p1") }}</p>
      <p>{{ t("site.introduction.p2") }}</p>
      <p>
        {{ t("site.introduction.p3Prefix") }}
        <span class="mark-text">
          {{ t("site.introduction.p3Highlight") }}
        </span>
      </p>
      <p>{{ t("site.introduction.p4") }}</p>
      <p>{{ t("site.introduction.p5") }}</p>
    </div>

    <div class="intro-banner">
      <el-image class="banner-image" :src="banner03" fit="cover" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import banner03 from "@/assets/home/03_banner.jpg";

const { t } = useI18n();
</script>

<style scoped lang="scss">
.intro-wrap {
  padding: 18px 24px 24px;
  background: #f5f5f5;
}

.intro-content {
  color: #4c4c4c;
  font-size: 18px;
  line-height: 1.95;
  font-weight: 500;

  p {
    margin: 0;

    & + p {
      margin-top: 2px;
    }
  }

  .mark-text {
    color: #d61f26;
    font-weight: 700;
  }
}

.intro-banner {
  margin-top: 22px;

  .banner-image {
    width: 100%;
    height: 520px;
    border: 1px solid #d9d9d9;

    :deep(.el-image__inner) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

@media (max-width: 1024px) {
  .intro-wrap {
    padding: 14px;
  }

  .intro-content {
    font-size: 16px;
    line-height: 1.8;
  }

  .intro-banner {
    .banner-image {
      height: 360px;
    }
  }
}

@media (max-width: 640px) {
  .intro-content {
    font-size: 15px;
    line-height: 1.75;
  }

  .intro-banner {
    margin-top: 14px;

    .banner-image {
      height: 220px;
    }
  }
}
</style>
