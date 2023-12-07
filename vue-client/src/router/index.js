import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from '../auth/useAuth'

import Profile from '../templateUser/Profile.vue';
import AccountView from '../views/authView/AccountView.vue';
import DashboardView from '../views/authView/DashboardView.vue';
import ShowPreviewView from '../views/revisorView/ShowPreviewView.vue';
import UpdateUserView from '../views/authView/UpdateUserView.vue';
import PrivacySecurityView from '../views/authView/PrivacySecurityView.vue';
import AppereanceView from '../views/authView/AppereanceView.vue';

const auth = useAuth()

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('../views/HomeView.vue')
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: () => import('../components/authForm/LoginView.vue')
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: () => import('../components/authForm/RegisterView.vue')
//     },
//     {
//       path: '/profile',
//       name: 'profile',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/profile/dashboard',
//       name: 'profile/dashboard',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/profile/dashboard/create',
//       name: 'profile/table',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/profile/revisor',
//       name: 'revisor',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           if (auth.getUser.value.is_revisor) {
//             next()
//           } else {
//             next({ name: 'home' })
//           }
//         } 
//       }
//     },
//     {
//       path: '/profile/edit',
//       name: 'profile/edit',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/profile/privacy',
//       name: 'profile/privacy',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/profile/appereance',
//       name: 'profile/appereance',
//       component: () => import('../templateUser/Profile.vue'),
//       beforeEnter: (to, from, next) => {
//         if (auth.getAuthenticated.value) {
//           next()
//         } else {
//           next('/login')
//         }
//       }
//     },
//     {
//       path: '/announcements',
//       name: 'announcements',
//       component: () => import('../views/announceView/Index.vue'),
//     },
//     {
//       path: '/announcements/:name',
//       name: 'announcement/show',
//       component: () => import('../views/announceView/Show.vue'),
//     },
//     {
//       path: '/category/:name',
//       name: 'category',
//       component: () => import('../views/CategoryView.vue'),
//     },
//     {
//       path: '/:pathMatch(.*)*',
//       name: 'not-found',
//       component: () => import('../views/404View.vue'),
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/authViews/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/authForm/RegisterView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (auth.getAuthenticated.value) {
        next();
      } else {
        next('/login');
      }
    },
    children: [
      { path: '', name: 'profile', component: AccountView },
      { path: 'dashboard', name: 'dashboard', component: DashboardView },
      { path: 'dashboard/create', name: 'createAnnouncements', component: DashboardView },
      { path: 'dashboard/update/:name', name: 'updateAnnouncements', component: DashboardView },
      { path: 'revisor', name: 'revisor', component: ShowPreviewView, beforeEnter: (to, from, next) => { if (auth.getAuthenticated.value) { if (auth.getUser.value.is_revisor) { next() } else { next({ name: 'home' }) } } } },
      { path: 'edit', name: 'edit', component: UpdateUserView },
      { path: 'privacy', name: 'privacy', component: PrivacySecurityView },
      { path: 'appereance', name: 'appereance', component: AppereanceView }
    ]
  },
  {
    path: '/announcements',
    name: 'announcements',
    component: () => import('../views/announceView/Index.vue'),
  },
  {
    path: '/announcement/:name',
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
