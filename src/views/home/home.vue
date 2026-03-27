<template>
  <div class="home-body">
    <el-carousel class="hero-carousel" height="420px" autoplay>
      <el-carousel-item v-for="item in imgArr" :key="item">
        <img :src="item" alt="banner" />
      </el-carousel-item>
    </el-carousel>

    <div class="home-content">
      <p class="title">PRODUCTS CENTER</p>
      <p class="sub-title">厂家直销</p>
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

    <div class="more">
      <p class="more-text">
        查看更多
        <el-icon><ArrowRight /></el-icon>
      </p>
    </div>

    <section
      class="consult-banner"
      :style="{ backgroundImage: `url(${aboutBg})` }"
    >
      <div class="banner-left">
        <p class="banner-title">为您生产安全的防火门窗产品</p>
        <div class="banner-tags">
          <span class="tag-item">住宅小区</span>
          <span class="tag-item">商场</span>
          <span class="tag-item">酒店</span>
          <span class="tag-item">办公楼</span>
        </div>
      </div>

      <div class="banner-right">
        <div class="phone-line">
          <el-icon class="phone-icon"><Phone /></el-icon>
          <span>咨询电话</span>
          <strong>13970083059</strong>
        </div>
        <button type="button" class="consult-btn">立即咨询</button>
      </div>
    </section>

    <div class="home-content">
      <p class="title">ABOUT US</p>
      <p class="sub-title">关于我们</p>
    </div>

    <section class="about-content">
      <img :src="aboutContentBg" alt="about" />
      <div class="about-content-right">
        <h3 class="about-title">南昌弘盾消防设备有限公司</h3>
        <div class="about-en">HONGDUN FIRE-FIGHTING</div>
        <p class="about-desc">
          南昌弘盾消防设备有限公司坐落于江西南昌，占地面积26000多平米。是集研发、生产、销售于一体的门窗制造企业，拥有大型现代化厂房两座，先进的钢制防火门流水线、防盗门流水线，设备先进，质量过硬。公司总投资叁仟多万元，拥有技术人员、工程师等。大量进口及国产优质设备和……
        </p>

        <div class="about-feature-list">
          <div class="feature-item">
            <div class="feature-circle">
              <el-icon><OfficeBuilding /></el-icon>
            </div>
            <p>公司简介</p>
          </div>
          <div class="feature-item">
            <div class="feature-circle">
              <el-icon><UserFilled /></el-icon>
            </div>
            <p>厂房环境</p>
          </div>
          <div class="feature-item">
            <div class="feature-circle">
              <el-icon><Trophy /></el-icon>
            </div>
            <p>企业荣誉</p>
          </div>
          <div class="feature-item">
            <div class="feature-circle">
              <el-icon><Reading /></el-icon>
            </div>
            <p>检验报告</p>
          </div>
        </div>
      </div>
    </section>

    <div class="home-content qualification-head">
      <p class="title">QUALIFICATION</p>
      <p class="sub-title">资质证书</p>
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
      <p class="title">PROJECT PERFORMANCE</p>
      <p class="sub-title">工程业绩</p>
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
  </div>
</template>

<script lang="ts" setup>
import banner01 from "@/assets/home/01_banner.jpg";
import banner02 from "@/assets/home/02_banner.jpg";
import banner03 from "@/assets/home/03_banner.jpg";
import aboutBg from "@/assets/home/about/about_bg.png";
import aboutContentBg from "@/assets/home/about/about_content_bg.png";
import certisBg from "@/assets/home/certis/certis_bg.png";
import product01 from "@/assets/home/products/01.jpg";
import product02 from "@/assets/home/products/02.jpg";
import product03 from "@/assets/home/products/03.jpg";
import product04 from "@/assets/home/products/04.jpg";
import product05 from "@/assets/home/products/05.jpg";
import product06 from "@/assets/home/products/06.png";
import product07 from "@/assets/home/products/07.png";
import product08 from "@/assets/home/products/08.png";

const imgArr = [banner01, banner02, banner03];

const products = [
  { id: 1, title: "钢制防火门", image: product01 },
  { id: 2, title: "钢制防火门", image: product02 },
  { id: 3, title: "钢制防火门", image: product03 },
  { id: 4, title: "钢制防火门", image: product04 },
  { id: 5, title: "钢制防火门", image: product05 },
  { id: 6, title: "钢质防火门", image: product06 },
  { id: 7, title: "钢质防火门", image: product07 },
  { id: 8, title: "钢质防火门", image: product08 },
];

const productImages = products.map((item) => item.image);

const certisModules = import.meta.glob("@/assets/home/certis/*_certis.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const certisList = Object.entries(certisModules)
  .sort(([a], [b]) => {
    return a.localeCompare(b, "zh-CN", { numeric: true });
  })
  .map(([_, image], index) => ({
    id: index + 1,
    title: "荣誉资质",
    image,
  }));

const certisGroups = Array.from(
  { length: Math.ceil(certisList.length / 3) },
  (_, index) => certisList.slice(index * 3, (index + 1) * 3),
);

const certisPreviewList = certisList.map((item) => item.image);

const performModules = import.meta.glob(
  "@/assets/home/perform/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const performanceSeed = [
  { id: 1, title: "萍乡星星科技", fileName: "星星科技", active: false },
  { id: 2, title: "友邦一号院", fileName: "友邦壹号院", active: true },
  { id: 3, title: "星悦汇", fileName: "星悦荟", active: false },
  { id: 4, title: "宜春中央城", fileName: "宜春中央城", active: false },
  { id: 5, title: "泰豪VR", fileName: "泰豪VR", active: false },
  { id: 6, title: "新旅·明樾台", fileName: "新旅明樾台", active: false },
];

const performanceItems = performanceSeed
  .map((item) => {
    const matchedPath = Object.keys(performModules).find((path) =>
      path.includes(item.fileName),
    );

    return {
      id: item.id,
      title: item.title,
      active: item.active,
      image: matchedPath ? performModules[matchedPath] : "",
    };
  })
  .filter((item) => item.image);

const performancePreviewList = performanceItems.map((item) => item.image);
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
      align-items: anchor-center;

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
    margin-top: 26px;

    .title {
      letter-spacing: 1px;
    }
  }

  .performance-head {
    margin-top: 30px;

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
  }
}

@media (max-width: 900px) {
  .home-body {
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
  }
}

@media (max-width: 640px) {
  .home-body {
    .products-wrap {
      margin: 14px 12px 0;
      padding: 12px;
      border-radius: 14px;

      .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .home-content {
      .title {
        font-size: 24px;
      }

      .sub-title {
        font-size: 20px;
      }
    }

    .consult-banner {
      margin: 18px 12px;
      border-radius: 14px;

      .banner-left {
        padding: 18px;
      }

      .banner-right {
        padding: 18px;
      }
    }

    .about-content {
      margin: 14px 12px 0;
      border-radius: 14px;

      .about-content-right {
        .about-feature-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .feature-circle {
          width: 80px;
          height: 80px;

          .el-icon {
            font-size: 30px;
          }
        }
      }
    }

    .performance-section {
      margin: 14px 12px 0;
      padding: 14px;

      .performance-card {
        .performance-image {
          height: 220px;
        }
      }
    }
  }
}
</style>
