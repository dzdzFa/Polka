import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";
import Tape from "../components/Tape.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/track/:id", name: "detail", component: Detail },
  {
    path: "/tape",
    name: "tape",
    component: Tape,
    meta: { requiresSave: true },
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
