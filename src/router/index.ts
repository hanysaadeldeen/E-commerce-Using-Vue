import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/:ProdId",
    name: "Details",
    component: () => import("../views/ProductDetails.vue"),
    props: true,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/CartProducts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Preserve scroll position when using browser navigation
    } else {
      return { top: 0 }; // Scroll to the top on route change
    }
  },
});

export default router;
