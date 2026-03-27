<template>
  <section class="report-page">
    <div class="report-grid">
      <article
        v-for="(item, index) in pagedItems"
        :key="item.id"
        class="report-card"
      >
        <el-image
          class="report-image"
          :src="item.image"
          :preview-src-list="previewList"
          :initial-index="(currentPage - 1) * pageSize + index"
          fit="contain"
        />
        <p class="report-title">{{ item.title }}</p>
      </article>
    </div>

    <div class="pager-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="reportList.length"
        :page-size="pageSize"
        :current-page="currentPage"
        :pager-count="7"
        @current-change="handlePageChange"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type ReportItem = {
  id: number;
  title: string;
  image: string;
};

const pageSize = 12;
const currentPage = ref(1);

const reportModules = import.meta.glob(
  "@/assets/report/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const reportList: ReportItem[] = Object.entries(reportModules)
  .sort(([a], [b]) => a.localeCompare(b, "zh-CN", { numeric: true }))
  .map(([path, image], index) => {
    const fileName = path.split("/").pop() ?? "报告";
    const title = fileName.replace(/\.[^.]+$/, "");

    return {
      id: index + 1,
      title,
      image,
    };
  });

const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return reportList.slice(start, start + pageSize);
});

const previewList = reportList.map((item) => item.image);

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped lang="scss">
.report-page {
  background: #efefef;
  min-height: 100%;
  padding: 18px 20px 24px;
}

.report-grid {
  max-width: 1536px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px 20px;
}

.report-card {
  background: #f5f5f5;
  border: 1px solid #e1e1e1;
  padding: 10px 10px 0;
}

.report-image {
  width: 100%;
  height: 230px;
  background: #fff;

  :deep(.el-image__inner) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}

.report-title {
  margin: 0;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3e3e3e;
  font-size: 17px;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pager-wrap {
  margin-top: 24px;
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

@media (max-width: 1300px) {
  .report-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .report-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-image {
    height: 220px;
  }
}

@media (max-width: 640px) {
  .report-page {
    padding: 12px;
  }

  .report-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .report-image {
    height: 210px;
  }

  .report-title {
    min-height: 58px;
    font-size: 15px;
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
