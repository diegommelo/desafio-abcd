import Vue from "vue";
import VueRouter from "vue-router";
import {getAuth} from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "*",
    redirect: "/login"
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
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("/kids");
  else next();
});

export default router;
