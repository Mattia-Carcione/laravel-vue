<template>
    <!-- top navigation -->
    <nav class="navbar bg-base-100 hidden md:flex">
        <div class="navbar-start">
            <!-- dropdwown hover -->
            <div class="dropdown dropdown-hover">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/">Homepage</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- logo -->
        <div class="navbar-center hidden md:block">
            <RouterLink to="/" class="btn btn-ghost text-xl">FindEasy</RouterLink>
        </div>

        <!-- nav end -->
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <span class="border-l-2 mx-1 border-current h-5"></span>
            <RouterLink class="mx-1" v-if="!state.authenticated" to="/login">
                <button class="btn btn-md btn-ghost">
                    <div class="indicator">
                        <span>Sign in</span>
                    </div>
                </button>
            </RouterLink>
            <button v-if="state.authenticated" class="btn btn-ghost" @click="logout">
                <div class="indicator">
                    <span class="text-lg">{{ state.user.name }}<i
                            class="fa-solid fa-arrow-right-to-bracket px-1"></i></span>
                </div>
            </button>
        </div>
    </nav>

    <!-- bottom navigation for mobile -->
    <div class="btm-nav btm-nav-sm md:hidden">
        <RouterLink to="/">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </button>
        </RouterLink>

        <!-- search button -->
        <button class="active">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>

        <!-- dropdown top menu -->
        <div class="dropdown dropdown-top">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </label>

            <!-- dropdown list -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                <li>
                    <RouterLink to="/">Homepage</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink v-if="!state.authenticated" to="/login">Sign in</RouterLink>
                    <a v-if="state.authenticated" @click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import useAuth from '../auth/useAuth'
import { reactive } from 'vue';
export default {
    data() {
        const state = reactive({
            authenticated: useAuth().getAuthenticated,
            user: useAuth().getUser,
            errors: useAuth().getErrors,
        });
        return {
            state,
        }
    },
    methods: {
        async logout() {
            await useAuth().logout();
        }
    }
}
</script>