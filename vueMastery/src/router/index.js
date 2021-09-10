import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/EventList.vue";
import About from '../views/About.vue'

const routes = [{
        path: "/",
        name: "EventList",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;