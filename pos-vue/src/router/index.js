import { createRouter, createWebHistory } from "vue-router";
import ShopView from "@/views/ShopView.vue";
import AdminLayout from "@/views/admin/AdminLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "products",
          name: "products",
          component: () => import("../views/admin/ProductsView.vue"),
        },
        {
          path: "new",
          name: "new",
          component: () => import("../views/admin/NewProductView.vue"),
        },
        {
          path: "edit:id",
          name: "edit",
          component: () => import("../views/admin/EditProductView.vue"),
        },
        {
          path: "seeder",
          name: "seeder",
          component: () => import("../views/admin/SeederView.vue"),
        },
        {
          path: "sales",
          name: "sales",
          component: () => import("../views/admin/SalesView.vue"),
        },
      ],
    },
  ],
});

export default router;
