import type { RouteRecordRaw } from "vue-router";
import SectionPage from "@/views/common/section.vue";
import Introduction from "@/views/about/introduction.vue";
import Honor from "@/views/about/honor.vue";
import News from "@/views/news/news.vue";
import NewsDetail from "@/views/news/detail.vue";
import Contact from "@/views/contact/contact.vue";
import Environment from "@/views/environment/environment.vue";
import Report from "@/views/report/report.vue";
import ProductList from "@/views/product/list.vue";

const siteRoutes: RouteRecordRaw[] = [
  {
    path: "/about/introduction",
    name: "about-introduction",
    component: Introduction,
    meta: { titleKey: "companyProfile" },
  },
  {
    path: "/about/honor",
    name: "about-honor",
    component: Honor,
    meta: { titleKey: "companyHonors" },
  },
  {
    path: "/news",
    name: "news",
    component: News,
    meta: { titleKey: "news" },
  },
  {
    path: "/news/:id",
    name: "news-detail",
    component: NewsDetail,
    meta: { titleKey: "newsDetails" },
  },
  {
    path: "/products/steel-door",
    name: "products-steel-door",
    component: ProductList,
    meta: { titleKey: "steelFireDoor", productFolder: "steeldoor" },
  },
  {
    path: "/products/wood-door",
    name: "products-wood-door",
    component: ProductList,
    meta: { titleKey: "woodenFireDoor", productFolder: "woodendoor" },
  },
  {
    path: "/products/steel-window",
    name: "products-steel-window",
    component: ProductList,
    meta: { titleKey: "steelFireWindow", productFolder: "steelwindow" },
  },
  {
    path: "/products/aluminum-window",
    name: "products-aluminum-window",
    component: ProductList,
    meta: { titleKey: "aluminumFireWindow", productFolder: "aluminumwindow" },
  },
  {
    path: "/products/stainless-door",
    name: "products-stainless-door",
    component: ProductList,
    meta: { titleKey: "stainlessSteelFireDoor", productFolder: "staindoor" },
  },
  {
    path: "/products/shutter",
    name: "products-shutter",
    component: ProductList,
    meta: { titleKey: "premiumFireShutter", productFolder: "rollcurtain" },
  },
  {
    path: "/products/smoke-barrier",
    name: "products-smoke-barrier",
    component: ProductList,
    meta: { titleKey: "smokeBarrier", productFolder: "cliffface" },
  },
  {
    path: "/products/fire-glass",
    name: "products-fire-glass",
    component: ProductList,
    meta: { titleKey: "fireRatedGlass", productFolder: "glass" },
  },
  {
    path: "/reports",
    name: "reports",
    component: Report,
    meta: { titleKey: "testReports" },
  },
  {
    path: "/factory",
    name: "factory",
    component: Environment,
    meta: { titleKey: "factoryEnvironment" },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: { titleKey: "contactUs" },
  },
];

export default siteRoutes;
