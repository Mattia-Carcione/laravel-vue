<template>
    <nav class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/">Homepage</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <RouterLink to="/" class="btn btn-ghost text-xl">FindEasy</RouterLink>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <RouterLink v-if="!state.authenticated" to="/login">
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <i class="fa-regular fa-user btn-ghost"></i>
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