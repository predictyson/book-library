import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import BookView from "@/views/BookView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book",
    name: "book",
    component: BookView,
    // redirect: () => {
    //   return "/book";
    // },
    children: [
      {
        path: "/create",
        name: "BookCreate",
        component: () => import("@/components/book/BookCreate.vue"),
      },
      {
        path: "/",
        name: "BookList",
        component: () => import("@/components/book/BookList.vue"),
      },
      {
        path: "view/:isbn",
        name: "BookView",
        component: () => import("@/components/book/BookView.vue"),
      },
      {
        path: "modify/:isbn",
        name: "BookModify",
        component: () => import("@/components/book/BookModify.vue"),
      },
      {
        path: "delete/:isbn",
        name: "BookDelete",
        component: () => import("@/components/book/BookDelete.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
