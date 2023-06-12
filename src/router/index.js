import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import IllustratonsView from "../views/IllustrationsView.vue";
// import DesignView from "../views/DesignView.vue";
// import ContactView from "../views/ContactView.vue";
// import MonoView from "../views/MonoView.vue";
// import HydratedView from "../views/HydratedView.vue";
// import LucidityView from "../views/LucidityView.vue";
// import BrewitView from "../views/BrewitView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/illustrations",
      name: "illustrations",
      // component: IllustratonsView,

      component: () => import("../views/IllustrationsView.vue"),
    },
    {
      path: "/design",
      name: "design",
      // component: DesignView,
      component: () => import("../views/DesignView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // component: ContactView,
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/mono",
      name: "mono",
      // component: MonoView,
      component: () => import("../views/MonoView.vue"),
    },
    {
      path: "/hydrated-design",
      name: "hydrated-design",
      // component: HydratedView,
      component: () => import("../views/HydratedView.vue"),
    },
    {
      path: "/lucidity-design",
      name: "lucidity-design",
      // component: LucidityView,
      component: () => import("../views/LucidityView.vue"),
    },
    {
      path: "/brewit-design",
      name: "brewit-design",
      // component: BrewitView,
      component: () => import("../views/BrewitView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    //scroll to top
    return { top: 0 };
  },
});

export default router;
