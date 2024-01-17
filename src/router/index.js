import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../backend/firebase/index.js'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/newAccount',
            name: 'newAccount',
            component: () => import('../views/NewAccount.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/registerProvider',
            name: 'RegisterProvide',
            component: () => import('../views/RegisterProView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return
    }
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currenUser) {
        next('/login')
        return
    }
    next()
})

export default router
