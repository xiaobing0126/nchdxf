import type { RouteRecordRaw } from "vue-router";
import SectionPage from "@/views/common/section.vue";
import Introduction from "@/views/about/introduction.vue";
import Honor from "@/views/about/honor.vue";
import News from "@/views/news/news.vue";

const siteRoutes: RouteRecordRaw[] = [
  {
    path: "/about/introduction",
    name: "about-introduction",
    component: Introduction,
    meta: { title: "公司简介" },
  },
  {
    path: "/about/honor",
    name: "about-honor",
    component: Honor,
    meta: { title: "企业荣誉" },
  },
  {
    path: "/news",
    name: "news",
    component: News,
    meta: { title: "新闻资讯" },
  },
  {
    path: "/products/steel-door",
    name: "products-steel-door",
    component: SectionPage,
    meta: { title: "钢质防火门" },
  },
  {
    path: "/products/wood-door",
    name: "products-wood-door",
    component: SectionPage,
    meta: { title: "木质防火门" },
  },
  {
    path: "/products/steel-window",
    name: "products-steel-window",
    component: SectionPage,
    meta: { title: "钢质防火窗" },
  },
  {
    path: "/products/aluminum-window",
    name: "products-aluminum-window",
    component: SectionPage,
    meta: { title: "铝质防火窗" },
  },
  {
    path: "/products/stainless-door",
    name: "products-stainless-door",
    component: SectionPage,
    meta: { title: "不锈钢防火门" },
  },
  {
    path: "/products/shutter",
    name: "products-shutter",
    component: SectionPage,
    meta: { title: "特质防火卷帘" },
  },
  {
    path: "/products/smoke-barrier",
    name: "products-smoke-barrier",
    component: SectionPage,
    meta: { title: "挡烟垂壁" },
  },
  {
    path: "/products/fire-glass",
    name: "products-fire-glass",
    component: SectionPage,
    meta: { title: "防火玻璃" },
  },
  {
    path: "/reports",
    name: "reports",
    component: SectionPage,
    meta: { title: "检验报告" },
  },
  {
    path: "/factory",
    name: "factory",
    component: SectionPage,
    meta: { title: "厂房环境" },
  },
  {
    path: "/contact",
    name: "contact",
    component: SectionPage,
    meta: { title: "联系我们" },
  },
];

export default siteRoutes;
