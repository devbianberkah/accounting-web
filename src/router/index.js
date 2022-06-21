import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"

const routes = [
    {
        path :"/home",
        name : "Home",
        component : Home,
    },
    {
        path :"/",
        name :"Login",
        component : Login, 
    }
];

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;