import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    // 临时路由，记得删除哦
    {
        path: '/', // 这个页面不需要 只是方便你们查看所有页面的入口
        component: () => import('@/views/template/Navigation')
    },
    // 临时路由,记得删除哦
    {
        path: '/activity', // 这个页面不需要 只是方便你们查看所有页面的入口
        component: () => import('@/views/activity/index'),
        children: [{ path: 'jigsawPuzzle', component: ()=>import('@/views/activity/jigsawPuzzle') }]

    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;
