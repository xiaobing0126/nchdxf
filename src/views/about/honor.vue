<template>
  <section class="honor-page">
    <div class="honor-grid">
      <article
        v-for="(item, index) in pagedItems"
        :key="item.id"
        class="honor-card"
      >
        <el-image
          class="honor-image"
          :src="item.image"
          :preview-src-list="previewList"
          :initial-index="(currentPage - 1) * pageSize + index"
          fit="contain"
        />
        <p class="honor-title">{{ item.title }}</p>
      </article>
    </div>

    <div class="pager-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="honorList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        :pager-count="7"
        @current-change="handlePageChange"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

type HonorItem = {
  id: number;
  title: string;
  image: string;
};

const pageSize = 12;
const currentPage = ref(1);

const honorModules = import.meta.glob("@/assets/honor/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const honorList = Object.entries(honorModules)
  .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }))
  .map(([path, image], index): HonorItem => {
    const fileName = path.split("/").pop() ?? "荣誉资质";
    const title = fileName.replace(/\.[^.]+$/, "");

    return {
      id: index + 1,
      title,
      image,
    };
  });

const previewList = honorList.map((item) => item.image);

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return honorList.slice(start, start + pageSize);
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped lang="scss">
.honor-page {
  background: #efefef;
  padding: 18px 16px 26px;
}

.honor-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px 20px;
}

.honor-card {
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  padding: 8px 8px 10px;
}

.honor-image {
  width: 100%;
  height: 170px;
  background: #fff;

  :deep(.el-image__inner) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.honor-title {
  margin: 10px 0 0;
  color: #4d4d4d;
  text-align: center;
  font-size: 15px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pager-wrap {
  margin-top: 30px;
  display: flex;
  justify-content: center;

  :deep(.el-pagination) {
    gap: 14px;
  }

  :deep(.btn-prev),
  :deep(.btn-next),
  :deep(.el-pager li) {
    min-width: 64px;
    height: 52px;
    line-height: 52px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
  }

  :deep(.btn-prev .el-icon),
  :deep(.btn-next .el-icon) {
    font-size: 18px;
  }

  :deep(.el-pagination.is-background .el-pager li.is-active) {
    background-color: $brand-color;
    color: #fff;
  }

  :deep(.el-pagination.is-background .el-pager li:not(.is-active):hover) {
    color: $brand-color;
  }

  :deep(.el-pagination button:hover) {
    color: $brand-color;
  }
}

@media (max-width: 1100px) {
  .honor-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .honor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .honor-page {
    padding: 12px;
  }

  .honor-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .honor-image {
    height: 210px;
  }

  .pager-wrap {
    :deep(.el-pagination) {
      gap: 8px;
    }

    :deep(.btn-prev),
    :deep(.btn-next),
    :deep(.el-pager li) {
      min-width: 44px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
  }
}
</style>
