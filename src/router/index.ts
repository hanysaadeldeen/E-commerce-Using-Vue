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
});

export default router;
