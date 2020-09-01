import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/items",
    name: "ListofItems",
    component: () => import("@/views/ListofItems.vue")
  }
];

export default new VueRouter({ routes });
