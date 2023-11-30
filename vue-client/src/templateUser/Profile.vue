<script lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { reactive } from 'vue';

import AccountView from '../views/authView/AccountView.vue';
import DashboardView from '../views/authView/DashboardView.vue';
import RevisorView from '../views/revisoreView/RevisorView.vue';
import UpdateUserView from '../views/authView/UpdateUserView.vue';
import UpdateEmailPasswordView from '../views/authView/PrivacySecurityView.vue';
import AppereanceView from '../views/authView/AppereanceView.vue';

import useAuth from '../auth/useAuth';
import useAnnouncement from '../announcement/useAnnouncement';

export default {
    props: {
        categories: Array
    },
    data() {
        const state = reactive({
            user: useAuth().getUser,
            errors: useAuth().getErrors,
            authenticated: useAuth().getAuthenticated,
            success: useAuth().getMessage
        });
        return {
            sidebarOpen: false,
            state,
            showMenu: false,
            showMenuRevisor: false,
            fetch: useAnnouncement()
        }
    },
    computed: {
        path() {
            return useRoute().path;
        },
        showProfile() {
            return !this.path.includes('/profile/');
        },
        showDashboard() {
            return this.path.includes('/profile/dashboard');
        },
        showRevisor() {
            return this.path.includes('/profile/revisor');
        },
        showEdit() {
            return this.path.includes('/profile/edit');
        },
        showUpdatePassword() {
            return this.path.includes('/profile/privacy');
        },
        showAppereance() {
            return this.path.includes('/profile/appereance');
        }
    },
    methods: {
        toggleDashboard() {
            this.showMenu = !this.showMenu;
        },
        toggleRevisor() {
            this.showMenuRevisor = !this.showMenuRevisor;
        },
        getImageSource() {
            const image = "http://localhost:8000/storage/avatars/" + this.state.user.path_image;
            const defaultImage = `http://localhost:8000/storage/default/file.jpeg`;
            return image !== null && image !== '' && image !== "http://localhost:8000/storage/avatars/null" ? image : defaultImage;
        },
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
        logout() {
            useAuth().logout();
            this.$router.push({ name: 'home' })
        }
    },
    components: {
        AccountView,
        DashboardView,
        RevisorView,
        UpdateUserView,
        UpdateEmailPasswordView,
        AppereanceView
    },
}
</script>

<template>
    <div class="font-sans h-full flex overflow-hidden">
        <!-- Offcanvas -->
        <aside :class="{ 'visible-sidebar': sidebarOpen, 'hidden-sidebar': !sidebarOpen }"
            class="fixed border-r lg:w-1/5 lg:block settings-sidebar hidden w-screen p-4 min-h-screen">

            <div class="flex justify-end">
                <button class="lg:hidden btn btn-circle btn-outline" @click="toggleSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="mb-3">
                <h2 class="tex-2xl font-semibold">Menu</h2>
            </div>

            <ul class="menu">
                <li class="mb-2">
                    <RouterLink @click="() => sidebarOpen = false" to="/profile" class="block">
                        <i class="pe-1 fa-regular fa-user"></i>Profile
                    </RouterLink>
                </li>

                <li class="mb-2 dr">
                    <div @click="toggleDashboard" class="cursor-pointer">
                        <i class="fas fa-pie-chart"></i>Dashboard
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                </li>

                <li v-if="showMenu">
                    <RouterLink @click="() => { sidebarOpen = false, showMenu = false }" to="/profile/dashboard">
                        <div class="ml-3">
                            <i class="pe-1 fa-solid fa-circle-plus"></i>Create Announcements
                        </div>
                    </RouterLink>
                </li>

                <li v-if="state.user.is_revisor" class="mb-2 dr">
                    <div @click="toggleRevisor" class="cursor-pointer">
                        <i class="fas fa-eye"></i>Revisor
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                </li>

                <li v-if="showMenuRevisor">
                    <RouterLink @click="() => { sidebarOpen = false, showMenuRevisor = false }" to="/profile/revisor">
                        <div class="ml-3">
                            <i class="pe-1 fa-solid fa-square-check"></i>Review Announcements
                        </div>
                    </RouterLink>
                </li>
            </ul>

            <hr class="my-4 border-t border-gray-700 me-20">

            <div class="mb-3">
                <h2 class="tex-2xl font-semibold">Settings</h2>
            </div>

            <ul class="menu">
                <li class="mb-2">
                    <RouterLink @click="() => sidebarOpen = false" to="/profile/edit" class="block">
                        <i class="pe-1 fa-solid fa-user-pen"></i>Account
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink @click="() => sidebarOpen = false" to="/profile/privacy" class="block">
                        <i class="pe-1 fa-solid fa-shield-halved"></i>Privacy and Security
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink @click="() => sidebarOpen = false" to="/profile/appereance" class="block">
                        <i class="pe-1 fa-solid fa-palette"></i>Appearance
                    </RouterLink>
                </li>
            </ul>

            <hr class="my-4 border-t border-gray-700 me-20">

            <ul class="menu">
                <li class="mb-2">
                    <RouterLink @click="() => sidebarOpen = false" to="/" class="block">
                        <i class="pe-1 fa-solid fa-house"></i>Home
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <button class="block" @click="logout">
                        <i class="fa-solid pe-1 fa-arrow-right-from-bracket"></i>
                        Logout
                    </button>
                </li>
            </ul>
        </aside>

        <!-- Template User -->
        <main class="margin-custom flex-1" :class="{ 'visible-sidebar': !sidebarOpen, 'hidden-sidebar': sidebarOpen }">
            <!-- Navbar -->
            <nav class="navbar sticky z-10 top-0 border-b">
                <div class="lg:hidden p-2 cursor-pointer" @click="toggleSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </div>
                <div class="flex-1 items-start">
                    <form action="" method="POST">
                        <div class="relative">
                            <button class="absolute top-1/2 left-0 -translate-y-1/2">
                                <svg class="fill-primary" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                        fill=""></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                        fill=""></path>
                                </svg>
                            </button>

                            <input type="tex" placeholder="Type to search..."
                                class="w-full xl:w-125 bg-transparent pr-4 pl-9 focus:outline-none">
                        </div>
                    </form>
                </div>
                <div class="flex-none gap-2">
                    <ul class="menu items-center menu-horizontal -inherit rounded-box">
                        <li class="px-1 hidden tex-end md:block">
                            {{ state.user.name }} <br> {{ state.user.email }}
                        </li>
                    </ul>
                    <div class="dropdown dropdown-end dropdown-hover">
                        <label tabindex="0" class="z-20 btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" :src="getImageSource()" />
                            </div>
                        </label>
                        <ul tabindex="0" class="z-[1] p-2 shadow menu menu-sm dropdown-content rounded w-52 drop-shadow">
                            <li>
                                <RouterLink to="/profile" class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </RouterLink>
                            </li>
                            <li><RouterLink to="/profile/edit">Settings</RouterLink  ></li>
                            <li><div type="button" @click="logout">Logout</div></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Main content -->
            <div class="margin-top p-4 min-h-screen">
                <!-- Qui richiamo i contenuti -->
                <AccountView :user="state.user" v-if="showProfile" />
                <DashboardView :user="state.user" v-if="showDashboard" :categories="categories" />
                <RevisorView :user="state.user" v-if="showRevisor" />
                <UpdateUserView :user="state.user" v-if="showEdit" />
                <UpdateEmailPasswordView :user="state.user" v-if="showUpdatePassword" />
                <AppereanceView v-if="showAppereance" />
            </div>
        </main>
    </div>
</template>

<style>
@media (max-width: 1023px) {

    .hidden-sidebar {
        display: none !important;
    }

    .visible-sidebar {
        display: block !important;
    }

    .navbar {
        position: fixed;
        top: 0;
        z-index: 10;
    }

    .margin-top {
        margin-top: 4.5rem;
        margin-bottom: 4.5rem;
    }
}

@media (min-width: 1024px) {
    .margin-custom {
        margin-left: 20%;
    }
}
</style>