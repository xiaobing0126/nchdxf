import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/home.vue";
import Detail from "@/views/home/detail.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/home", // /home
    name: "home-page",
    component: Home,
  },
  {
    path: "/home/detail",
    name: "home-detail",
    component: Detail,
  },
];

export default homeRoutes;
