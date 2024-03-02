import { createRouter ,createWebHashHistory} from 'vue-router'
const constantRoutes = [
    { path: '/', component: () => import('../views/home.vue') },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

export default router