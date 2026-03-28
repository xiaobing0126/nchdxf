<template>
  <div class="home-body">
    <el-carousel class="hero-carousel" height="420px" autoplay>
      <el-carousel-item v-for="item in imgArr" :key="item">
        <img :src="item" alt="banner" />
      </el-carousel-item>
    </el-carousel>

    <div class="home-content products-head">
      <p class="title">{{ t("site.home.headingProductsCenter") }}</p>
      <p class="sub-title">{{ t("site.home.factoryDirectSales") }}</p>
    </div>

    <section class="products-wrap">
      <div class="products-grid">
        <div
          v-for="(item, index) in products"
          :key="item.id"
          class="product-card"
        >
          <div class="product-image-box">
            <el-image
              :src="item.image"
              :zoom-rate="1.2"
              :max-scale="2"
              :min-scale="0.5"
              :initial-index="index"
              :preview-src-list="productImages"
              fit="contain"
            />
          </div>
          <p class="product-title">{{ item.title }}</p>
        </div>
      </div>
    </section>

    <div class="more products-more">
      <p class="more-text" @click="goProductsCenter">
        {{ t("site.home.viewMore") }}
        <el-icon><ArrowRight /></el-icon>
      </p>
    </div>

    <section
      class="consult-banner"
      :style="{ backgroundImage: `url(${aboutBg})` }"
    >
      <div class="banner-left">
        <p class="banner-title">{{ t("site.home.safeBanner") }}</p>
        <div class="banner-tags">
          <span class="tag-item">{{ t("site.home.tags.residential") }}</span>
          <span class="tag-item">{{ t("site.home.tags.mall") }}</span>
          <span class="tag-item">{{ t("site.home.tags.hotel") }}</span>
          <span class="tag-item">{{ t("site.home.tags.office") }}</span>
        </div>
      </div>

      <div class="banner-right">
        <div class="phone-line">
          <el-icon class="phone-icon"><Phone /></el-icon>
          <span>{{ t("site.home.hotline") }}</span>
          <strong>13970083059</strong>
        </div>
        <button type="button" class="consult-btn">
          {{ t("site.home.consultNow") }}
        </button>
      </div>
    </section>

    <div class="home-content about-head">
      <p class="title">{{ t("site.home.headingAboutUs") }}</p>
      <p class="sub-title">{{ t("site.home.aboutUs") }}</p>
    </div>

    <section class="about-content">
      <img :src="aboutContentBg" alt="about" />
      <div class="about-content-right">
        <h3 class="about-title">{{ t("site.home.aboutCompany") }}</h3>
        <div class="about-en">HONGDUN FIRE-FIGHTING</div>
        <p class="about-desc">
          {{ t("site.home.aboutDesc") }}
        </p>

        <div class="about-feature-list">
          <div class="feature-item" @click="goTo('/about/introduction')">
            <div class="feature-circle">
              <el-icon><OfficeBuilding /></el-icon>
            </div>
            <p>{{ t("site.home.features.companyProfile") }}</p>
          </div>
          <div class="feature-item" @click="goTo('/factory')">
            <div class="feature-circle">
              <el-icon><UserFilled /></el-icon>
            </div>
            <p>{{ t("site.home.features.factoryEnvironment") }}</p>
          </div>
          <div class="feature-item" @click="goTo('/about/honor')">
            <div class="feature-circle">
              <el-icon><Trophy /></el-icon>
            </div>
            <p>{{ t("site.home.features.companyHonors") }}</p>
          </div>
          <div class="feature-item" @click="goTo('/reports')">
            <div class="feature-circle">
              <el-icon><Reading /></el-icon>
            </div>
            <p>{{ t("site.home.features.testReports") }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="home-content qualification-head">
      <p class="title">{{ t("site.home.headingQualification") }}</p>
      <p class="sub-title">{{ t("site.home.certifications") }}</p>
    </div>

    <section
      class="qualification-section"
      :style="{ backgroundImage: `url(${certisBg})` }"
    >
      <el-carousel
        class="qualification-carousel"
        height="400px"
        arrow="always"
        indicator-position="none"
        :autoplay="false"
      >
        <el-carousel-item
          v-for="(group, groupIndex) in certisGroups"
          :key="groupIndex"
        >
          <div class="qualification-grid">
            <article v-for="item in group" :key="item.id" class="cert-card">
              <div class="cert-image-wrap">
                <el-image
                  :src="item.image"
                  :preview-src-list="certisPreviewList"
                  :initial-index="item.id - 1"
                  fit="contain"
                />
              </div>
              <p class="cert-title">{{ item.title }}</p>
            </article>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>

    <div class="home-content performance-head">
      <p class="title">{{ t("site.home.headingProjectPerformance") }}</p>
      <p class="sub-title">{{ t("site.home.projectCases") }}</p>
    </div>

    <section class="performance-section">
      <div class="performance-grid">
        <article
          v-for="(item, index) in performanceItems"
          :key="item.id"
          class="performance-card"
        >
          <el-image
            class="performance-image"
            :src="item.image"
            :preview-src-list="performancePreviewList"
            :initial-index="index"
            fit="cover"
          />
          <p :class="['performance-name', { active: item.active }]">
            {{ item.title }}
          </p>
        </article>
      </div>
    </section>

    <div class="more">
      <p class="more-text">
        {{ t("site.home.viewMore") }}
        <el-icon><ArrowRight /></el-icon>
      </p>
    </div>

    <section class="news-contact-section">
      <article class="news-panel">
        <header class="panel-head">
          <div class="head-left">
            <span class="head-dot" />
            <h3>{{ t("site.home.newsCenter") }}</h3>
            <span class="head-en">{{ t("site.home.headingNews") }}</span>
          </div>
          <span class="head-more" @click="goTo('/news')">MORE+</span>
        </header>

        <div class="news-body">
          <article class="featured-news">
            <div class="featured-date">
              <strong>{{ newsFeatured.date }}</strong>
              <span>{{ newsFeatured.year }}</span>
            </div>
            <div class="featured-content">
              <h4>{{ newsFeatured.title }}</h4>
              <p>{{ newsFeatured.summary }}</p>
            </div>
          </article>

          <article v-for="item in newsList" :key="item.id" class="news-row">
            <el-image class="news-thumb" :src="item.image" fit="cover" />
            <div class="row-content">
              <h5>{{ item.title }}</h5>
              <p>{{ item.summary }}</p>
            </div>
            <div class="row-date">{{ item.date }}</div>
          </article>
        </div>
      </article>

      <aside class="contact-panel">
        <header class="panel-head contact-head">
          <div class="head-left">
            <h3>{{ t("site.home.contactUs") }}</h3>
            <span class="head-en">{{ t("site.home.headingContact") }}</span>
          </div>
          <!-- <span class="head-more">MORE+</span> -->
        </header>

        <el-image class="contact-banner" :src="contactBanner" fit="cover" />

        <div class="contact-body">
          <p class="company-name">{{ t("site.home.companyName") }}</p>
          <p>
            <strong>{{ t("site.home.contactName") }}</strong
            >13970083059
          </p>
          <p>
            <strong>{{ t("site.home.addressLabel") }}</strong
            >{{ t("site.home.address") }}
          </p>
        </div>
      </aside>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import banner01 from "@/assets/home/01_banner.jpg";
import banner02 from "@/assets/home/02_banner.jpg";
import banner03 from "@/assets/home/03_banner.jpg";
import aboutBg from "@/assets/home/about/about_bg.png";
import aboutContentBg from "@/assets/home/about/about_content_bg.png";
import certisBg from "@/assets/home/certis/certis_bg.png";
import product01 from "@/assets/home/products/steel/01.jpg";
import product02 from "@/assets/home/products/steel/02.jpg";
import product03 from "@/assets/home/products/steel/03.jpg";
import product04 from "@/assets/home/products/steel/04.jpg";
import product05 from "@/assets/home/products/steel/05.jpg";
import product06 from "@/assets/home/products/steel/06.png";
import product07 from "@/assets/home/products/steel/07.png";
import product08 from "@/assets/home/products/steel/08.png";
import contactBanner from "@/assets/home/03_banner.jpg";
import { useRouter } from "vue-router";
import { getNewsList } from "@/utils/news";

const router = useRouter();
const { t, tm, locale } = useI18n();

const imgArr = [banner01, banner02, banner03];

const products = computed(() => [
  { id: 1, title: t("site.home.products.steelFireDoor"), image: product01 },
  { id: 2, title: t("site.home.products.steelFireDoor"), image: product02 },
  { id: 3, title: t("site.home.products.steelFireDoor"), image: product03 },
  { id: 4, title: t("site.home.products.steelFireDoor"), image: product04 },
  { id: 5, title: t("site.home.products.steelFireDoor"), image: product05 },
  { id: 6, title: t("site.home.products.steelFireDoor"), image: product06 },
  { id: 7, title: t("site.home.products.steelFireDoor"), image: product07 },
  { id: 8, title: t("site.home.products.steelFireDoor"), image: product08 },
]);

const productImages = computed(() => products.value.map((item) => item.image));

const certisModules = import.meta.glob("@/assets/home/certis/*_certis.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const certisList = computed(() => {
  locale.value;
  return Object.entries(certisModules)
    .sort(([a], [b]) => {
      return a.localeCompare(b, "zh-CN", { numeric: true });
    })
    .map(([_, image], index) => ({
      id: index + 1,
      title: t("site.home.certificationLabel"),
      image,
    }));
});

const certisGroups = computed(() => {
  return Array.from(
    { length: Math.ceil(certisList.value.length / 3) },
    (_, index) => certisList.value.slice(index * 3, (index + 1) * 3),
  );
});

const certisPreviewList = computed(() =>
  certisList.value.map((item) => item.image),
);

const performModules = import.meta.glob(
  "@/assets/home/perform/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const performanceTitles = computed(() => {
  locale.value;
  const titles = tm("site.home.performanceTitles");
  return Array.isArray(titles) ? titles : [];
});

const performanceItems = computed(() => {
  locale.value;
  return Object.entries(performModules)
    .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }))
    .map(([_, image], index) => ({
      id: index + 1,
      title: String(performanceTitles.value[index] ?? `Project ${index + 1}`),
      active: index === 1,
      image,
    }));
});

const performancePreviewList = computed(() =>
  performanceItems.value.map((item) => item.image),
);
const newsThumb01 = computed(
  () =>
    performancePreviewList.value[1] ?? performancePreviewList.value[0] ?? "",
);
const newsThumb02 = computed(
  () =>
    performancePreviewList.value[2] ?? performancePreviewList.value[0] ?? "",
);

const allNews = computed(() => {
  locale.value;
  return getNewsList(t);
});

const toSummary = (text: string) => {
  return text.replace(/\s+/g, " ").trim().slice(0, 88) + "...";
};

const newsFeatured = computed(() => {
  const first = allNews.value[0];
  if (!first) {
    return { date: "", year: "", title: "", summary: "" };
  }

  return {
    date: first.date,
    year: first.year,
    title: first.title,
    summary: toSummary(first.content),
  };
});

const newsList = computed(() => {
  const rows = allNews.value.slice(1, 3);
  return rows.map((item, index) => ({
    id: index + 1,
    title: item.title,
    summary: toSummary(item.content),
    date: item.date.replace("-", " /"),
    image: index === 0 ? newsThumb01.value : newsThumb02.value,
  }));
});

const goTo = (path: string) => {
  if (router.currentRoute.value.path !== path) {
    router.push(path);
  }
};

const goProductsCenter = () => {
  goTo("/products/steel-door");
};
</script>

<style scoped lang="scss">
.home-body {
  padding-bottom: 28px;

  .hero-carousel :deep(.el-carousel__container img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .home-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 20px;

    .title {
      font-size: 30px;
      font-weight: 600;
      color: $brand-color;
    }

    .sub-title {
      font-size: 24px;
      font-weight: 500;
      color: $text-main;
      margin-left: 16px;
    }
  }

  .about-head {
    margin-top: 60px;
  }

  .product-head {
    margin-top: 60px;
  }

  .products-wrap {
    margin: 18px 24px 0;
    padding: 18px;
    border-radius: 22px;

    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 26px 30px;
    }

    .product-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .product-image-box {
        width: 100%;
        height: 330px;
        display: flex;
        align-items: center;
        justify-content: center;

        :deep(.el-image) {
          width: 90%;
          height: 100%;
        }

        :deep(.el-image__inner) {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }

      .product-title {
        width: 70%;
        margin: 12px auto 0;
        padding: 12px 10px;
        text-align: center;
        color: #4c4c4c;
        font-size: 24px;
        font-weight: 700;
        transition:
          background-color 0.2s ease,
          color 0.2s ease;
      }

      &:hover .product-title {
        color: #fff;
        background: $brand-color;
      }
    }
  }

  .more {
    width: 100%;
    font-size: 20px;
    color: $brand-color;
    display: flex;
    justify-content: center;
    cursor: pointer;

    .more-text {
      display: flex;
      align-items: center;
      width: 240px;
      height: 50px;
      border: 1px solid $brand-color;
      justify-content: center;
      border-radius: 25px;
    }
  }

  .consult-banner {
    display: flex;
    position: relative;
    margin: 26px 24px;
    min-height: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;

    .banner-left {
      flex: 1;
      padding: 40px 52px;
      position: relative;

      //   &::before,
      //   &::after {
      //     content: "";
      //     position: absolute;
      //     background: rgba(255, 88, 88, 0.55);
      //   }

      //   &::before {
      //     width: 2px;
      //     height: 130px;
      //     left: 34px;
      //     top: 28px;
      //   }

      //   &::after {
      //     width: 132px;
      //     height: 2px;
      //     left: 34px;
      //     top: 56px;
      //   }

      .banner-title {
        margin: 0;
        font-size: 30px;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      .banner-tags {
        margin-top: 28px;
        display: flex;
        flex-wrap: wrap;
        gap: 28px;
      }

      .tag-item {
        font-size: 18px;
        line-height: 1;
        position: relative;
        padding-left: 28px;
        font-weight: 600;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #f03a3a;
        }

        &::after {
          content: "";
          position: absolute;
          left: 6px;
          top: 7px;
          width: 9px;
          height: 5px;
          border-left: 2px solid #f03a3a;
          border-bottom: 2px solid #f03a3a;
          transform: rotate(-45deg);
        }
      }
    }

    .banner-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 42px;
      gap: 22px;
      align-items: center;

      .phone-line {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 24px;
        line-height: 1;
        font-weight: 600;

        strong {
          font-size: 52px;
          font-weight: 700;
        }
      }

      .phone-icon {
        font-size: 34px;
      }

      .consult-btn {
        width: 300px;
        height: 80px;
        border: 1px solid #fff;
        background: transparent;
        color: #fff;
        font-size: 40px;
        line-height: 1;
        transform: scale(0.5);
        transform-origin: left center;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  .about-content {
    display: flex;
    align-items: stretch;
    gap: 44px;
    margin: 24px;
    height: 520px;

    img {
      width: 42%;
      min-width: 380px;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      display: block;
    }

    .about-content-right {
      flex: 1;
      height: 100%;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .about-title {
        margin: 0;
        text-align: center;
        font-size: 48px;
        line-height: 1;
        transform: scale(0.5);
        transform-origin: center top;
        font-weight: 700;
        color: #4b4b4b;
      }

      .about-en {
        margin: -6px auto 18px;
        width: max-content;
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 38px;
        transform: scale(0.5);
        transform-origin: center top;
        color: #5a5a5a;
        font-weight: 500;

        &::before,
        &::after {
          content: "";
          width: 140px;
          height: 1px;
          background: #5a5a5a;
        }
      }

      .about-desc {
        margin: -14px 0 0;
        font-size: 44px;
        transform: scale(0.5);
        transform-origin: left top;
        width: 200%;
        line-height: 1.7;
        color: #4f4f4f;
        font-weight: 500;
      }

      .about-feature-list {
        margin-top: -26px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
      }

      .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        p {
          margin: 0;
          font-size: 42px;
          transform: scale(0.5);
          transform-origin: center top;
          color: #4b4b4b;
          font-weight: 600;
          line-height: 1;
        }
      }

      .feature-circle {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #d4d4d4;
        border-top-color: #de2025;
        border-right-color: #de2025;
        color: #de2025;

        .el-icon {
          font-size: 36px;
        }
      }
    }
  }

  .qualification-head {
    margin-top: 60px;

    .title {
      letter-spacing: 1px;
    }
  }

  .performance-head {
    margin-top: 60px;

    .title {
      color: #be1c22;
      letter-spacing: 1px;
    }

    .sub-title {
      color: #3f3f3f;
      margin-left: 0;
      position: relative;
      width: max-content;
      margin: 4px auto 0;
      padding: 0 46px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 34px;
        height: 1px;
        background: #cfcfcf;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }
  }

  .performance-section {
    margin: 20px 24px 0;
    padding: 26px 24px 30px;

    .performance-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 26px;
    }

    .performance-card {
      border: 1px solid #dcdcdc;
      background: #fff;
      &:hover {
        .performance-name {
          color: #fff;
          background: #bf1d24;
        }
      }

      .performance-image {
        width: 100%;
        height: 285px;

        :deep(.el-image__inner) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .performance-name {
        margin: 0;
        min-height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        transform: scale(0.5);
        transform-origin: center center;
        color: #4a4a4a;
        font-weight: 600;
        line-height: 1;
      }
    }
  }

  .news-contact-section {
    margin: 60px 24px;
    display: grid;
    grid-template-columns: minmax(0, 2.2fr) minmax(360px, 1fr);
    gap: 24px;

    .panel-head {
      height: 78px;
      border-top: 4px solid #be1c22;
      border-bottom: 1px solid #dcdcdc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;

      .head-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .head-dot {
        width: 14px;
        height: 14px;
        background: linear-gradient(145deg, #2f2f2f 0 55%, #f29a1a 55% 100%);
      }

      h3 {
        margin: 0;
        font-size: 44px;
        transform: scale(0.5);
        transform-origin: left center;
        color: #2f2f2f;
        font-weight: 700;
      }

      .head-en {
        font-size: 18px;
        color: #c7c7c7;
        font-weight: 700;
        letter-spacing: 0.5px;
        margin-left: -4px;
      }

      .head-more {
        font-size: 18px;
        color: #666;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          color: $brand-color;
        }
      }
    }

    .news-panel {
      background: #f6f6f6;
      border: 1px solid #e2e2e2;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .news-body {
      padding: 16px 22px 20px;
    }

    .featured-news {
      display: grid;
      grid-template-columns: 140px minmax(0, 1fr);
      gap: 22px;
      border-bottom: 1px dashed #d9d9d9;
      padding-bottom: 20px;
      margin-bottom: 18px;

      .featured-date {
        color: #c0c0c0;
        padding-top: 2px;

        strong {
          display: block;
          font-size: 32px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 1px;
        }

        span {
          margin-top: 6px;
          display: block;
          font-size: 24px;
          line-height: 1;
        }
      }

      .featured-content {
        h4 {
          margin: 0;
          color: #3c3c3c;
          font-size: 36px;
          transform: scale(0.5);
          transform-origin: left center;
          width: 200%;
          font-weight: 700;
        }

        p {
          margin: 12px 0 0;
          color: #a0a0a0;
          font-size: 16px;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }

    .news-row {
      display: grid;
      grid-template-columns: 150px minmax(0, 1fr) 90px;
      gap: 16px;
      align-items: center;
      padding-top: 12px;
      border-top: 1px dashed #dddddd;

      & + .news-row {
        margin-top: 10px;
      }

      .news-thumb {
        width: 150px;
        height: 94px;
      }

      .row-content {
        h5 {
          margin: 0;
          color: #3f3f3f;
          font-size: 34px;
          transform: scale(0.5);
          transform-origin: left center;
          width: 200%;
          font-weight: 700;
        }

        p {
          margin: 8px 0 0;
          color: #9c9c9c;
          font-size: 15px;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }

      .row-date {
        color: #c4c4c4;
        font-size: 28px;
        font-weight: 300;
        letter-spacing: 1px;
        text-align: right;
      }
    }

    .contact-panel {
      border: 1px solid #e2e2e2;
      background: #f6f6f6;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

      .contact-head {
        background: #be1c22;
        border-top: 0;
        border-bottom: 0;

        h3,
        .head-en,
        .head-more {
          color: #fff;
        }
      }

      .contact-banner {
        width: 100%;
        height: 210px;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }

      .contact-body {
        padding: 22px 22px 28px;

        p {
          margin: 0;
          color: #404040;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 500;

          & + p {
            margin-top: 6px;
          }
        }

        .company-name {
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 22px;
          color: #333;
        }
      }
    }
  }

  .qualification-section {
    margin: 20px 0;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 26px 10px;

    .qualification-grid {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 30px;
      padding: 12px 54px 0;
    }

    .cert-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cert-image-wrap {
      width: 100%;
      height: 350px;
      padding: 12px;

      :deep(.el-image) {
        width: 100%;
        height: 100%;
      }

      :deep(.el-image__inner) {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .cert-title {
      margin: 14px 0 0;
      color: #f3f6fa;
      font-size: 42px;
      transform: scale(0.5);
      transform-origin: center top;
      line-height: 1;
      font-weight: 600;
    }

    .qualification-carousel {
      :deep(.el-carousel__arrow) {
        background: rgba(255, 255, 255, 0.95);
        color: #5a5a5a;
        width: 54px;
        height: 54px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .home-body {
    .about-content {
      gap: 24px;
      padding: 20px;

      img {
        width: 46%;
        min-width: 300px;
      }

      .about-content-right {
        .about-feature-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    }

    .performance-section {
      .performance-grid {
        gap: 16px;
      }

      .performance-card {
        .performance-image {
          height: 240px;
        }
      }
    }

    .news-contact-section {
      grid-template-columns: minmax(0, 1fr);

      .contact-panel {
        .contact-banner {
          height: 260px;
        }
      }
    }

    .qualification-section {
      .qualification-grid {
        padding: 12px 26px 0;
        gap: 20px;
      }

      .cert-image-wrap {
        height: 330px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .home-body {
    .products-wrap {
      .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }
    }

    .consult-banner {
      flex-direction: column;

      .banner-left {
        padding: 24px;

        &::before,
        &::after {
          display: none;
        }

        .banner-title {
          font-size: 30px;
        }

        .banner-tags {
          margin-top: 14px;
          gap: 14px;
        }
      }

      .banner-right {
        padding: 24px;

        .phone-line {
          font-size: 18px;

          strong {
            font-size: 34px;
          }
        }
      }
    }

    .qualification-section {
      .qualification-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .performance-section {
      .performance-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .news-contact-section {
      .news-row {
        grid-template-columns: 130px minmax(0, 1fr);

        .row-date {
          display: none;
        }

        .news-thumb {
          width: 130px;
          height: 82px;
        }
      }

      .featured-news {
        grid-template-columns: 120px minmax(0, 1fr);
      }
    }
  }
}

@media (max-width: 900px) {
  .home-body {
    .hero-carousel {
      :deep(.el-carousel__container) {
        height: 260px !important;
      }
    }

    .more {
      font-size: 16px;

      .more-text {
        width: 176px;
        height: 40px;
        border-radius: 20px;
      }
    }

    .about-content {
      flex-direction: column;
      align-items: stretch;
      height: auto;

      img {
        width: 100%;
        min-width: 0;
        height: auto;
      }

      .about-content-right {
        .about-feature-list {
          margin-top: 8px;
        }
      }
    }

    .qualification-section {
      .qualification-grid {
        grid-template-columns: 1fr;
        padding: 6px 12px 0;
      }

      .cert-image-wrap {
        height: 280px;
      }
    }

    .performance-section {
      .performance-grid {
        grid-template-columns: 1fr;
      }
    }

    .news-contact-section {
      margin: 16px 12px 0;
      gap: 14px;

      .panel-head {
        padding: 0 14px;
        height: 64px;

        h3 {
          font-size: 36px;
        }

        .head-en,
        .head-more {
          font-size: 14px;
        }
      }

      .news-body {
        padding: 12px;
      }

      .featured-news {
        grid-template-columns: 86px minmax(0, 1fr);
        gap: 10px;

        .featured-date {
          strong {
            font-size: 26px;
          }

          span {
            font-size: 18px;
          }
        }
      }

      .news-row {
        grid-template-columns: 92px minmax(0, 1fr);
        gap: 10px;

        .news-thumb {
          width: 92px;
          height: 66px;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .home-body {
    padding-bottom: 16px;

    .products-wrap {
      margin: 14px 12px 0;
      padding: 12px;
      border-radius: 14px;

      .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .home-content {
      margin-top: 14px;

      .title {
        font-size: 22px;
      }

      .sub-title {
        margin-left: 0;
        font-size: 16px;
      }
    }

    .about-head,
    .product-head,
    .qualification-head,
    .performance-head {
      margin-top: 34px;
    }

    .products-wrap {
      .product-card {
        .product-image-box {
          height: 190px;
        }

        .product-title {
          width: 100%;
          padding: 8px 6px;
          margin-top: 8px;
          font-size: 16px;
        }
      }
    }

    .consult-banner {
      margin: 18px 12px;
      border-radius: 14px;

      .banner-left {
        padding: 16px;

        .banner-title {
          font-size: 22px;
          line-height: 1.35;
        }

        .banner-tags {
          margin-top: 12px;
          gap: 10px 14px;
        }

        .tag-item {
          font-size: 14px;
          padding-left: 22px;

          &::before {
            width: 16px;
            height: 16px;
          }

          &::after {
            left: 5px;
            top: 6px;
            width: 7px;
            height: 4px;
          }
        }
      }

      .banner-right {
        padding: 16px;
        align-items: flex-start;
        gap: 12px;

        .phone-line {
          gap: 8px;
          font-size: 14px;
          flex-wrap: wrap;

          strong {
            font-size: 24px;
            line-height: 1.2;
          }
        }

        .phone-icon {
          font-size: 22px;
        }

        .consult-btn {
          width: 146px;
          height: 42px;
          font-size: 16px;
          transform: none;
          transform-origin: center;
        }
      }
    }

    .about-content {
      margin: 14px 12px 0;
      gap: 14px;

      .about-content-right {
        padding-right: 0;

        .about-title {
          text-align: left;
          font-size: 22px;
          transform: none;
          line-height: 1.4;
        }

        .about-en {
          margin: 8px 0 12px;
          width: 100%;
          justify-content: flex-start;
          gap: 8px;
          font-size: 14px;
          transform: none;

          &::before,
          &::after {
            width: 24px;
          }
        }

        .about-desc {
          margin: 0;
          width: 100%;
          font-size: 14px;
          line-height: 1.7;
          transform: none;
        }

        .about-feature-list {
          margin-top: 14px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .feature-item {
          p {
            font-size: 14px;
            transform: none;
          }
        }

        .feature-circle {
          width: 62px;
          height: 62px;
          border-width: 2px;

          .el-icon {
            font-size: 22px;
          }
        }
      }
    }

    .qualification-section {
      margin: 14px 0;
      padding: 14px 10px;

      .qualification-carousel {
        :deep(.el-carousel__container) {
          height: 300px !important;
        }

        :deep(.el-carousel__arrow) {
          width: 34px;
          height: 34px;
        }
      }

      .cert-image-wrap {
        height: 210px;
        padding: 4px;
      }

      .cert-title {
        margin-top: 8px;
        font-size: 15px;
        transform: none;
      }
    }

    .performance-section {
      margin: 14px 12px 0;
      padding: 14px;

      .performance-grid {
        gap: 12px;
      }

      .performance-card {
        .performance-image {
          height: 190px;
        }

        .performance-name {
          min-height: 42px;
          font-size: 15px;
          transform: none;
        }
      }
    }

    .news-contact-section {
      margin: 20px 12px 0;

      .panel-head {
        height: 54px;

        .head-left {
          gap: 10px;
        }

        h3 {
          font-size: 18px;
          transform: none;
        }

        .head-en,
        .head-more {
          font-size: 12px;
        }
      }

      .news-body {
        padding: 10px;
      }

      .featured-news {
        padding-bottom: 14px;
        margin-bottom: 12px;

        .featured-date {
          strong {
            font-size: 21px;
          }

          span {
            font-size: 14px;
          }
        }

        .featured-content {
          h4 {
            font-size: 16px;
            transform: none;
            width: 100%;
            line-height: 1.4;
          }

          p {
            margin-top: 6px;
            font-size: 13px;
            -webkit-line-clamp: 2;
          }
        }
      }

      .news-row {
        .row-content {
          h5 {
            font-size: 15px;
            transform: none;
            width: 100%;
            line-height: 1.4;
          }

          p {
            margin-top: 4px;
            font-size: 12px;
            -webkit-line-clamp: 2;
          }
        }
      }

      .contact-panel {
        .contact-banner {
          height: 146px;
        }

        .contact-body {
          padding: 14px;

          .company-name {
            margin-bottom: 6px;
            font-size: 17px;
          }

          p {
            font-size: 14px;
            line-height: 1.55;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .home-body {
    .hero-carousel {
      :deep(.el-carousel__container) {
        height: 220px !important;
      }
    }

    .products-wrap {
      .products-grid {
        grid-template-columns: 1fr;
      }

      .product-card {
        .product-image-box {
          height: 210px;
        }
      }
    }

    .consult-banner {
      .banner-left {
        .banner-title {
          font-size: 20px;
        }
      }

      .banner-right {
        .phone-line {
          strong {
            font-size: 20px;
          }
        }
      }
    }

    .about-content {
      .about-content-right {
        .about-feature-list {
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      }
    }

    .news-contact-section {
      .featured-news {
        grid-template-columns: 1fr;

        .featured-date {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
      }

      .news-row {
        grid-template-columns: 1fr;

        .news-thumb {
          width: 100%;
          height: 176px;
        }
      }
    }
  }
}
</style>
