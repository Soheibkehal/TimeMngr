import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/components/Workingtime/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/components/Account/Logger.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("@/components/Account/SignIn.vue"),
  },
  // new add page
  {
    path: "/myaccount",
    name: "MyAccount",
    component: () => import("@/components/Account/MyAccount.vue"),
  },
  {
    path: "/teams",
    name: "Teams",
    component: () => import("@/components/Account/Teams.vue"),
  },
  {
    path: '/private',
    name: 'private',
    component: () => import('@/components/private.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
