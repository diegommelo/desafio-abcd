import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/kids",
    name: "Kids",
    component: () => import("../views/Pages/Kids.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/kids/new",
    name: "NewKid",
    component: () => import("../views/Pages/NewKid.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) store.dispatch("setUser", currentUser);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) {
    if (to.name === "Login") next("/kids");
    else next();
  } else next();
});

export default router;
