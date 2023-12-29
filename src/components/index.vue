<template>
    <el-container>
        <!-- 折叠菜单并调整宽度 -->
        <el-aside :width="isCollapse ? '64px' : '210px'">
            <div class="logo" style="width='iscollapse'?'64px': '210px'">
                123
            </div>
            <el-scrollbar>
                <el-menu
                    :unique-opened="true"
                    background-color="#001529"
                    text-color="rgba(255,255,255,0.65)"
                    :collapse="isCollapse"
                    :collapse-transition="false"
                >
                    <menus
                        v-for="(item, index) in mensList"
                        :data="item"
                    ></menus>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header>
                <div @click="expond">
                    <el-image
                        src="https://www.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=9A07DE578F6ED50DB59DFEA5C675AC71845A6FC9"
                        style="width: 40px; height: 40px"
                    />
                </div>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import menus from "./menus.vue";
const isCollapse = ref(false);
/* 模拟后端传过来的数据 */
let mensList: any = [
    {
        id: 1,
        path: "/system",
        component: "Layout",
        redirect: "/system/user",
        name: "/system",
        meta: {
            title: "系统管理",
            icon: "system",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
        },
        children: [
            {
                id: 101,
                path: "user",
                component: "system/user/index",
                redirect: null,
                name: "User",
                meta: {
                    title: "用户管理",
                    icon: "user",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 102,
                path: "role",
                component: "system/role/index",
                redirect: null,
                name: "Role",
                meta: {
                    title: "角色管理",
                    icon: "role",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 103,
                path: "menu",
                component: "system/menu/index",
                redirect: null,
                name: "Menu",
                meta: {
                    title: "菜单管理",
                    icon: "menu",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 104,
                path: "dict",
                component: "system/dict/index",
                redirect: null,
                name: "Dict",
                meta: {
                    title: "字典管理",
                    icon: "dict",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 105,
                path: "notice",
                component: "system/notice/index",
                redirect: null,
                name: "Notice",
                meta: {
                    title: "通知公告",
                    icon: "dict",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
        ],
    },
    {
        id: 2,
        path: "/monitor",
        component: "Layout",
        redirect: "/monitor/online",
        name: "/monitor",
        meta: {
            title: "系统监控",
            icon: "monitor",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
        },
        children: [
            {
                id: 106,
                path: "online",
                component: "monitor/online/index",
                redirect: null,
                name: "Online",
                meta: {
                    title: "在线用户",
                    icon: "online",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 107,
                path: "druid",
                component: "monitor/druid/index",
                redirect: null,
                name: "Druid",
                meta: {
                    title: "数据监控",
                    icon: "druid",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 108,
                path: "server",
                component: "monitor/server/index",
                redirect: null,
                name: "Server",
                meta: {
                    title: "服务监控",
                    icon: "server",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 109,
                path: "server",
                component: "monitor/server/index",
                redirect: null,
                name: "Server",
                meta: {
                    title: "缓存监控",
                    icon: "server",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 110,
                path: "cacheList",
                component: "monitor/cache/list",
                redirect: null,
                name: "CacheList",
                meta: {
                    title: "缓存列表",
                    icon: "cacheList",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
        ],
    },
    {
        id: 3,
        path: "/article",
        component: "Layout",
        redirect: "/article/list",
        name: "/article",
        meta: {
            title: "文章管理",
            icon: "article",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
        },
        children: [
            {
                id: 111,
                path: "articleList",
                component: "article/list",
                redirect: null,
                name: "ArticleList",
                meta: {
                    title: "文章列表",
                    icon: "articleList",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 112,
                path: "addArticle",
                component: "article/index",
                redirect: null,
                name: "AddArticle",
                meta: {
                    title: "发布文章",
                    icon: "addArticle",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 113,
                path: "tag",
                component: "article/tag",
                redirect: null,
                name: "Tag",
                meta: {
                    title: "标签管理",
                    icon: "tag",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 114,
                path: "category",
                component: "article/category",
                redirect: null,
                name: "Category",
                meta: {
                    title: "分类管理",
                    icon: "category",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
        ],
    },
    {
        id: 4,
        path: "/notice",
        component: "Layout",
        redirect: "/log/operlog",
        name: "/notice",
        meta: {
            title: "日志管理",
            icon: "notice",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
        },
        children: [
            {
                id: 115,
                path: "operlog",
                component: "monitor/operlog",
                redirect: null,
                name: "Operlog",
                meta: {
                    title: "操作日志",
                    icon: "operlog",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [],
            },
            {
                id: 116,
                path: "logininfor",
                component: "monitor/logininfor",
                redirect: null,
                name: "Logininfor",
                meta: {
                    title: "登录日志",
                    icon: "logininfor",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                },
                children: [
                    {
                        id: 100001,
                        path: "1",
                        component: "1",
                        redirect: null,
                        name: "1",
                        meta: {
                            title: "测试1",
                            icon: "123",
                            hidden: false,
                            roles: ["ADMIN"],
                            keepAlive: true,
                        },
                        children: [
                            {
                                id: 1000001,
                                path: "11",
                                component: "11",
                                redirect: null,
                                name: "11",
                                meta: {
                                    title: "测试11",
                                    icon: "123",
                                    hidden: false,
                                    roles: ["ADMIN"],
                                    keepAlive: true,
                                },
                                children: [],
                            },
                            {
                                id: 1000002,
                                path: "12",
                                component: "12",
                                redirect: null,
                                name: "12",
                                meta: {
                                    title: "测试12",
                                    icon: "123",
                                    hidden: false,
                                    roles: ["ADMIN"],
                                    keepAlive: true,
                                },
                                children: [],
                            },
                            {
                                id: 1000003,
                                path: "13",
                                component: "13",
                                redirect: null,
                                name: "13",
                                meta: {
                                    title: "测试13测试13测试13测试13测试13测试13",
                                    icon: "123",
                                    hidden: false,
                                    roles: ["ADMIN"],
                                    keepAlive: true,
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 100002,
                        path: "2",
                        component: "2",
                        redirect: null,
                        name: "2",
                        meta: {
                            title: "测试2",
                            icon: "123",
                            hidden: false,
                            roles: ["ADMIN"],
                            keepAlive: true,
                        },
                        children: [],
                    },
                    {
                        id: 100003,
                        path: "3",
                        component: "3",
                        redirect: null,
                        name: "3",
                        meta: {
                            title: "测试3",
                            icon: "123",
                            hidden: false,
                            roles: ["ADMIN"],
                            keepAlive: true,
                        },
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 117,
        path: "/profile",
        component: "Profile",
        redirect: "/profile/profile",
        name: "/profile",
        meta: {
            title: "个人信息",
            icon: "profile",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
        },
    },
];
function expond() {
    console.log(isCollapse);
    isCollapse.value = !isCollapse.value;
}
</script>
<style scoped>
.logo {
    height: 48px;
    background-color: #147dde;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
}
/* 固定logo,只滑动menu */
.el-scrollbar {
    height: calc(100vh - 70px);
}
.el-aside {
    background-color: #001529;
    /* 折叠动画淡出淡入效果 */
    transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
    border-top-left-radius: 14px;
    padding-bottom: 20px;
    /*
    当选择一级菜单时，子菜单项右侧边有点对不齐的现象
    */
    .el-menu {
        border-right: none;
    }
}
/*
去掉el-menu的滚动条
*/
.el-aside::-webkit-scrollbar {
    display: none;
}
</style>
