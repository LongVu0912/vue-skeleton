import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not_found",
            component: PageNotFoundView,
        },
    ],
});

router.beforeEach((_to, _from, next) => { 
    next();
});

export default router;
