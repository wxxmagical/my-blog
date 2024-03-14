import { createRouter ,createWebHashHistory} from 'vue-router'
const constantRoutes = [
    { path: '/', component: () => import('../views/home.vue') ,redirect:'home'},
    { path: '/home', component: () => import('../views/home.vue')},
    
    { 
        path: '/goStudy/componentDemo', 
        component: () => import('../views/goStudy/componentDemo.vue') ,
        children:[
            {
                path:'calendar',
                component: () => import('../views/goStudy/components/calendar.vue')
            },
            {
                path:'time',
                component: () => import('../views/goStudy/components/time.vue')
            },
        ]

    },
    { 
        path: '/goStudy/commonSyntax', 
        component: () => import('../views/goStudy/commonSyntax.vue'),
        children: [
        {
          path: 'handleData',
          component: () => import('../views/goStudy/components/demo.vue')
        },
      ], },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
})

export default router