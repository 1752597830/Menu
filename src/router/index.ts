import { createRouter, createWebHistory } from "vue-router";

// 路由信息  在/views/login/index.vue下创建对应页面

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("../components/index.vue"),
    },

];

// 导出路由

const router = createRouter({

    history: createWebHistory(),

    routes,

});
export default router;