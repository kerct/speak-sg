import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Thread from "./components/Thread.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/thread/:id",
      name: "thread",
      component: Thread
    }
  ]
});
