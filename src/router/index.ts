import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import feedsPage from "../pages/feeds/feedsPage.vue";
import storyPage from "../pages/story/storyPage.vue";
import authPage from "../pages/auth/authPage.vue";

import * as api from "../api";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "feedsPage",
    component: feedsPage,
  },
  {
    path: "/auth",
    name: "authPage",
    component: authPage,
  },
  {
    path: "/stories/:openedSlide?",
    name: "stories",
    component: storyPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name == "authPage";
  const token = localStorage.getItem("token");
  if (token !== null) {
    next(authRoute ? { name: "feedsPage" } : null);
  } else {
    next(authRoute ? null : { name: "authPage" });
  }
});

export default router;
