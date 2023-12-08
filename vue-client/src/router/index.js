import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from '../auth/useAuth'

import Profile from '../templateUser/Profile.vue';
import AccountView from '../views/userViews/AccountView.vue';
import DashboardView from '../views/userViews/DashboardView.vue';
import ShowPreviewView from '../views/revisorViews/ShowPreviewView.vue';
import UpdateUserView from '../views/userViews/UpdateUserView.vue';
import PrivacySecurityView from '../views/userViews/PrivacySecurityView.vue';
import AppereanceView from '../views/userViews/AppereanceView.vue';

const auth = useAuth()

const isAuthenticated = (to, from, next) => {
  if (auth.getAuthenticated.value) {
    next('/');
  } else {
    next();
  }
}

const routes = [
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
    component: () => import('../views/authViews/LoginView.vue'),
    beforeEnter: (isAuthenticated)
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/authViews/RegisterView.vue'),
    beforeEnter: (isAuthenticated)
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
    component: () => import('../views/announceViews/Index.vue'),
  },
  {
    path: '/announcement/:name',
    name: 'announcement/show',
    component: () => import('../views/announceViews/Show.vue'),
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
