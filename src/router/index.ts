import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

import homeRoutes from "./home";
import siteRoutes from "./site";
import HomeView from "@/views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/homeview",
    name: "home-view",
    component: HomeView,
  },
  ...homeRoutes,
  ...siteRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
