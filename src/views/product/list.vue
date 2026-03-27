<template>
  <section class="product-page">
    <div class="product-grid">
      <article
        v-for="(item, index) in productItems"
        :key="item.id"
        class="product-card"
      >
        <div class="product-image-box">
          <el-image
            class="product-image"
            :src="item.image"
            :preview-src-list="previewList"
            :initial-index="index"
            fit="contain"
          />
        </div>
        <p class="product-title">{{ currentTitle }}</p>
      </article>
    </div>

    <div v-if="!productItems.length" class="empty-state">暂无产品图片</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

type ProductItem = {
  id: number;
  image: string;
};

type ProductRouteMeta = {
  title?: string;
  productFolder?: string;
};

const route = useRoute();

const productModules = import.meta.glob(
  "@/assets/product/*/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const currentMeta = computed(() => (route.meta ?? {}) as ProductRouteMeta);

const currentTitle = computed(() => currentMeta.value.title ?? "产品中心");

const activeFolder = computed(
  () => currentMeta.value.productFolder ?? "steeldoor",
);

const productItems = computed<ProductItem[]>(() => {
  const sourceEntries = Object.entries(productModules)
    .filter(([path]) => path.includes(`/${activeFolder.value}/`))
    .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }));

  const fallbackEntries = Object.entries(productModules)
    .filter(([path]) => path.includes("/steeldoor/"))
    .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }));

  const entries = sourceEntries.length ? sourceEntries : fallbackEntries;

  return entries.map(([_, image], index) => ({
    id: index + 1,
    image,
  }));
});

const previewList = computed(() =>
  productItems.value.map((item) => item.image),
);
</script>

<style scoped lang="scss">
.product-page {
  min-height: 100%;
  padding: 26px 24px 30px;
}

.product-grid {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 36px 30px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-image-box {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-image {
    width: 86%;
    height: 100%;

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
    font-size: 42px;
    transform: scale(0.5);
    transform-origin: center center;
    line-height: 1;
    font-weight: 700;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  &:hover {
    background-color: #f7f5f5;
    .product-title {
      color: #fff;
      background: $brand-color;
    }
  }
}

.empty-state {
  max-width: 1600px;
  margin: 30px auto 0;
  text-align: center;
  color: #8c8c8c;
  font-size: 16px;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .product-card {
    .product-image-box {
      height: 330px;
    }
  }
}

@media (max-width: 1024px) {
  .product-page {
    padding: 18px 12px 22px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .product-card {
    .product-image-box {
      height: 280px;
    }
  }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    .product-image-box {
      height: 240px;
    }

    .product-title {
      width: 86%;
      margin-top: 8px;
      padding: 10px 8px;
    }
  }
}
</style>
