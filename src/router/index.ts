import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Checkout",
    component: () => import("@/views/Checkout.vue")
  },
  {
    path: "/items",
    name: "ListofItems",
    component: () => import("@/views/ListofItems.vue")
  }
];

export default new VueRouter({ routes });
