import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from '../auth/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authForm/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/authForm/RegisterView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile-dashboard',
      name: 'profile-dashboard',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile-privacy',
      name: 'profile-privacy',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile-appereance',
      name: 'profile-appereance',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})

export default router
