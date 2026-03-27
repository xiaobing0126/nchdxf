<template>
  <section class="environment-page">
    <div class="environment-grid">
      <article
        v-for="(item, index) in environmentList"
        :key="item.id"
        class="environment-card"
      >
        <el-image
          class="environment-image"
          :src="item.image"
          :preview-src-list="previewList"
          :initial-index="index"
          fit="cover"
        />
        <p class="environment-title">厂房环境</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
type EnvironmentItem = {
  id: number;
  image: string;
};

const environmentModules = import.meta.glob(
  "@/assets/environment/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const environmentList: EnvironmentItem[] = Object.entries(environmentModules)
  .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }))
  .map(([_, image], index) => ({
    id: index + 1,
    image,
  }));

const previewList = environmentList.map((item) => item.image);
</script>

<style scoped lang="scss">
.environment-page {
  background: #efefef;
  min-height: 100%;
  padding: 28px 32px 34px;
}

.environment-grid {
  max-width: 1380px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
}

.environment-card {
  background: #f5f5f5;
  border: 1px solid #e2e2e2;
  padding: 14px 14px 0;
}

.environment-image {
  width: 100%;
  height: 270px;

  :deep(.el-image__inner) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.environment-title {
  margin: 0;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e2e2e;
  font-size: 54px;
  transform: scale(0.5);
  transform-origin: center center;
  line-height: 1;
  font-weight: 500;
}

@media (max-width: 1300px) {
  .environment-page {
    padding: 20px 20px 28px;
  }

  .environment-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .environment-image {
    height: 235px;
  }
}

@media (max-width: 1024px) {
  .environment-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .environment-image {
    height: 210px;
  }
}

@media (max-width: 640px) {
  .environment-page {
    padding: 12px 12px 18px;
  }

  .environment-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .environment-image {
    height: 190px;
  }

  .environment-title {
    height: 62px;
  }
}
</style>
