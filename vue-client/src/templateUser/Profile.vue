<script lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { reactive } from 'vue';

import ProfileView from '../views/userView/ProfileView.vue';
import UpdateUserView from '../views/userView/UpdateUserView.vue';

import useAuth from '../auth/useAuth';

export default {
    data() {
        const state = reactive({
            user: useAuth().getUser,
        })
        return {
            sidebarOpen: false,
            state
        }
    },
    computed: {
        path() {
            return useRoute().path;
        },
        showProfile() {
            return !this.path.includes('/profile-');
        },
        showEdit() {
            return this.path.includes('/profile-edit');
        }
    },
    methods: {
        getImageSource() {
            const image = "http://localhost:8000/storage/storage/" + this.state.user.path_image;
            const defaultImage = `http://localhost:8000/storage/storage/file.jpeg`;
            return image !== null && this.image !== '' && image !== "http://localhost:8000/storage/storage/null" ? image : defaultImage;
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
        ProfileView,
        UpdateUserView
    }
}
</script>

<template>
    <div class="font-sans bg-gray-100 h-full flex overflow-hidden">
        <!-- Offcanvas -->
        <aside :class="{ 'visible-sidebar': sidebarOpen, 'hidden-sidebar': !sidebarOpen }"
            class="fixed lg:w-1/5 lg:block settings-sidebar hidden w-screen bg-gray-800 text-white p-4 min-h-screen">
            <div class="flex justify-end">
                <div class="lg:hidden p-2 border-white hover:border-white cursor-pointer btn btn-circle btn-outline" @click="toggleSidebar">
                    <svg class="swap-on fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
                </div>
            </div>
            <div class="mb-3 lg:mt-12">
                <h2 class="text-2xl font-semibold">Menu</h2>
            </div>
            <ul>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="/profile" class="block hover:text-blue-300">
                        <i class="pe-1 fa-regular fa-user"></i>Account
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="#" class="block hover:text-blue-300">
                        <i class="pe-1 fas fa-th-large"></i>Dashboard
                    </RouterLink>
                </li>
            </ul>
            <hr class="my-4 border-t border-gray-700 me-20">
            <div class="mb-3">
                <h2 class="text-2xl font-semibold">Settings</h2>
            </div>
            <ul>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="/profile-edit" class="block hover:text-blue-300">
                        <i class="pe-1 fa-solid fa-user-pen"></i>Edit Profile
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="#" class="block hover:text-blue-300">
                        <i class="pe-1 fa-solid fa-shield-halved"></i>Privacy
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="#" class="block hover:text-blue-300">
                        <i class="pe-1 fa-solid fa-palette"></i>Appearance
                    </RouterLink>
                </li>
            </ul>
            <hr class="my-4 border-t border-gray-700 me-20">
        <ul>
                <li class="mb-2">
                    <RouterLink @click="toggleSidebar" to="/" class="block hover:text-blue-300">
                        <i class="pe-1 fa-solid fa-house"></i>Home
                    </RouterLink>
                </li>
                <li class="mb-2">
                    <button class="block hover:text-blue-300" @click="logout">
                        <i class="fa-solid pe-1 fa-arrow-right-from-bracket"></i>
                        Logout
                    </button>
                </li>
            </ul>
        </aside>

        <!-- Template User -->
        <main class="margin-custom flex-1" :class="{ 'visible-sidebar': !sidebarOpen, 'hidden-sidebar': sidebarOpen }">
            <!-- Navbar -->
            <nav class="navbar bg-white sticky z-999 top-0 drop-shadow">
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
                                <svg class=" fill-slate-800 hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                        fill=""></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                        fill=""></path>
                                </svg>
                            </button>

                            <input type="text" placeholder="Type to search..."
                                class="w-full xl:w-125 bg-transparent pr-4 pl-9 focus:outline-none">
                        </div>
                    </form>
                </div>
                <div class="flex-none gap-2">
                    <ul class="menu items-center menu-horizontal bg-inherit rounded-box">
                        <!-- Aggiungere poi gli item -->
                        <!-- <li class="px-1">Item 1li>
                            <li class="px-1">Item 2</li> -->
                        <li class="px-1 hidden text-end md:block">{{ state.user.name }} <br> {{ state.user.email }}</li>
                    </ul>
                    <div class="dropdown dropdown-end dropdown-hover">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" :src="getImageSource()" />
                            </div>
                        </label>
                        <ul tabindex="0"
                            class="z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded w-52 drop-shadow">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="bg-white badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Main content -->
            <div class="p-4 min-h-screen">
                <!-- Qui richiamo i contenuti -->
                <ProfileView :user="state.user" v-if="showProfile" />
                <UpdateUserView :user="state.user" v-if="showEdit" />
            </div>
        </main>
    </div>
</template>

<style scoped>
@media (max-width: 1023px) {
    .hidden-sidebar {
        display: none !important;
    }

    .visible-sidebar {
        display: block !important;
    }
}

@media (min-width: 1024px) {
    .margin-custom {
        margin-left: 20%;
    }
}
</style>