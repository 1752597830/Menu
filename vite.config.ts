// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
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