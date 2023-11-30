import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from '../auth/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      component: () => import('../components/authForm/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/authForm/RegisterView.vue')
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
      path: '/profile/dashboard',
      name: 'profile/dashboard',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        if (useAuth().getAuthenticated.value) {
          next()
        } else {
          next('/login')
        }
      }
    }, ,
    {
      path: '/profile/revisor',
      name: 'profile/revisor',
      component: () => import('../templateUser/Profile.vue'),
      beforeEnter: (to, from, next) => {
        const auth = useAuth()
        if (auth.getAuthenticated.value) {
          if (auth.getUser.value.is_revisor) {
            next()
          } else {
            next({ name: 'home' })
          }
        } 
      }
    },
    {
      path: '/profile/edit',
      name: 'profile/edit',
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
      path: '/profile/privacy',
      name: 'profile/privacy',
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
      path: '/profile/appereance',
      name: 'profile/appereance',
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
      path: '/announcements',
      name: 'announcements',
      component: () => import('../views/announceView/Index.vue'),
    },
    {
      path: '/announcements/:name',
      name: 'announcement/show',
      component: () => import('../views/announceView/Show.vue'),
    },
    {
      path: '/category/:name',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/404View.vue'),
    }
  ]
})

export default router
