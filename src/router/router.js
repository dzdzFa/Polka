import { creatRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";
import Tape from "../components/Tape.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/track/:id", name: "detail", Component: Detail },
  {
    path: "/tape",
    name: "tape",
    Component: Tape,
    meta: { requiresSave: true },
  },
  { path: "/:pathMatch(.*)*", name: "not-found", Component: NotFound },
];

const router = creatRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => next());

export default router;
