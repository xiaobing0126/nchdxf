<template>
  <section class="intro-wrap">
    <div class="intro-content">
      <p>
        南昌弘盾消防设备有限公司坐落于江西南昌，占地面积26000多平米。是集研发、生产、销售于一体的门窗制造企业，拥有大型现代化厂房两座，先进的钢制防火门流水线，防盗门流水线，设备先进，质量过硬。
      </p>
      <p>
        公司总投资叁仟多万元，拥有技术人员、工程师等。大量进口及国产优质设备和一支高素质生产安装技术队伍和售后服务队伍。
      </p>
      <p>
        公司主要产品有：
        <span class="mark-text">
          钢质防火门，木质防火门，不锈钢防火门，不锈钢全玻防火门，钢质隔热防火窗，钢质非隔热防火窗，铝质非隔热防火窗，固定式挡烟垂壁，活动式挡烟垂壁，特级防火卷帘，防火玻璃等。
        </span>
      </p>
      <p>
        公司各类产品均经国家部门检测合格并获生产许可证。公司产品严格执行国家标准，并严格执行ISO90012018质量管理体系，具有较高的知名度和市场影响力。产品广泛适用于高层建筑、宾馆、酒店、商场、住宅、工厂、机场、车站码头等。
      </p>
      <p>
        本企业坚守：诚信、团结、互进、开拓、集思、永续的企业经营理念，并以"精益求精，铸就行业品牌"作为企业持之以恒的经营目标，与时代同步，与客户同心，向顾客奉献高品质产品，并竭诚欢迎各界新老商客莅临指导，共谋“双赢”的合作大计，为我国的消防安防事业作出更大的贡献。
      </p>
    </div>

    <div class="intro-banner">
      <el-image class="banner-image" :src="banner03" fit="cover" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import banner03 from "@/assets/home/03_banner.jpg";
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
