import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "@/views/SearchView.vue";
import Login from "@/views/Login.vue";
import Checkout from "@/views/Checkout.vue";
import Registo from "@/views/Registo.vue";
import { useCounterStore } from "@/stores/counter";

//
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/searchview",
      name: "searchview",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SearchView,
    },
    {
      path: "/checkout",
      name: "Checkout",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Checkout,
      beforeEnter(to, next) {
        const store = useCounterStore();
        if (
          // make sure the user is authenticated!!store.user
          !!!store.user &&
          // ❗️ Avoid an infinite redirect
          to.name !== "Login"
        ) {
          // redirect the user to the login page
          return { name: "Login" };
        }
      },
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login,
    },
    {
      path: "/registo",
      name: "Registo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Registo,
    },
  ],
});
// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !!store.user &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== "Login"
//   ) {
//     // redirect the user to the login page
//     return { name: "Login" };
//   }
// });
export default router;
