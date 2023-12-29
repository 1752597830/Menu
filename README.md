### 项目初始化

### 创建项目

> pnpm create vite front
> 选择 vue ts

### 安装依赖

> cd front
> pnpm install

### 测试

> pnpm dev

### 引入router

[安装 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/installation.html)

> pnpm add vue-router@4

#### 配置路由

> /src/router/index.ts

~~~ts
import { createRouter, createWebHistory } from "vue-router";

// 路由信息  在/views/login/index.vue下创建对应页面

const routes = [
  {

​    path: "/login",

​    name: "login",

​    component: () => import("../views/login/index.vue"),

  },

];

// 导出路由

const router = createRouter({

  history: createWebHistory(),

  routes,

});
export default router;
~~~

main.ts 中配置

~~~ts
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
createApp(App).use(router).mount("#app");
~~~

App.vue 中配置

~~~vue
<template>
    <router-view></router-view>
</template>
<style scoped></style>
~~~

### 自动引入(vue、element-plus)和自定义图标

#### 引入 element-plus

> pnpm add element-plus
>
> 然后你需要安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件
>
> pnpm add -D unplugin-vue-components unplugin-auto-import
>
> 然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

~~~ts
// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ["vue", "vue-router"],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
});
~~~

刚才我们的项目目录已经自动生成了一个 auto-imports.d.ts，我们在根目录的 tsconfig.json 里面的 include 中将它引入即可

~~~ts
// tsconfig.json

 "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "auto-imports.d.ts"
  ],
~~~

#### element-plus 图标自动引入

> pnpm add unplugin-icons -D
>
> 在 vite.config.ts 中进行配置

~~~ts
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                }),],
            imports: ['vue', 'vue-router'],
        }),
        Components({
            resolvers: [ElementPlusResolver(),// 自动注册图标组件
            IconsResolver({
                enabledCollections: ['ep'],
            }),],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
})
~~~

