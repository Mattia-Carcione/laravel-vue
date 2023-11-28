<script lang="ts">
import useAuth from '../auth/useAuth'
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
export default {
    props: {
        categories: Array
    },
    data() {
        const state = reactive({
            authenticated: useAuth().getAuthenticated,
            user: useAuth().getUser,
            errors: useAuth().getErrors,
        });
        return {
            state,
            dropdownVisible: false,
        }
    },
    computed: {
        ShowNavbar() {
            const path = useRoute().path;
            return !path.includes('/profile')
        }
    },
    methods: {
        async logout() {
            await useAuth().logout();
            this.$router.push({ name: 'home' })
        },
        closeMenu() {
            const details = this.$el.querySelector('details');
            if (details) {
                details.removeAttribute('open');
            }
        },
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        }
    }
}
</script>

<template>
    <div v-if="ShowNavbar">
        <!-- Top navigation -->
        <nav class="navbar fixed top-0 hidden lg:flex z-40">
            <div class="navbar-start">

                <!-- Nav start -->
                <ul class="menu menu-horizontal">
                    <li :class="$route.path === '/' ? 'disabled' : ''">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li :class="$route.path === '/announcements' ? 'disabled' : ''">
                        <RouterLink to="/announcements">Announcements</RouterLink>
                    </li>
                    <li>
                        <!-- Category -->
                        <details>
                            <summary>Category</summary>
                            <ul class="rounded-none category-grid">
                                <li v-for="category in categories" :key="category.id">
                                    <RouterLink @click="closeMenu" :to="`/category/${category.slug}`">
                                        {{ category.name }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <!-- logo -->
            <div class="navbar-center hidden md:block">
                <RouterLink to="/" class="btn btn-ghost text-xl">SnapList</RouterLink>
            </div>

            <!-- Nav end -->
            <div class="navbar-end">
                <!-- Search -->
                <button class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <span class="border-l-2 mx-1 border-current h-5"></span>

                <!-- Sign in -->
                <RouterLink class="mx-1" v-if="!state.authenticated" to="/login">
                    <button class="btn btn-md btn-ghost">
                        <div class="indicator">
                            <span>Sign in</span>
                        </div>
                    </button>
                </RouterLink>

                <!-- Sign out -->
                <div v-if="state.authenticated" class="dropdown dropdown-hover">
                    <label tabindex="0">
                        <button class="btn btn-ghost" @click="logout">
                            <div class="indicator">
                                <span class="text-lg">{{ state.user.name }}
                                <i class="fa-solid fa-arrow-right-to-bracket px-1"></i>
                            </span>
                        </div>
                    </button>
                </label>

                <!-- Dropdown list -->
                <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow rounded-none">
                    <li>
                        <RouterLink to="/profile">Profile</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/profile/dashboard">Dashboard</RouterLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        <!-- Bottom navigation for mobile -->
        <div class="btm-nav btm-nav-sm lg:hidden z-40">
            <!-- Home -->
            <RouterLink to="/">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </button>
            </RouterLink>

            <!-- Search button -->
            <button class="active">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            <!-- Dropdown top menu -->
            <div class="dropdown dropdown-top">
                <label tabindex="0" class="btn btn-ghost btn-circle" @click="toggleDropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>


                <!-- Dropdown list -->
                <ul v-if="dropdownVisible" tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none"
                    @click="toggleDropdown">
                    <li>
                        <RouterLink to="/announcements">Announcements</RouterLink>
                    </li>
                    <li v-if="state.authenticated">
                        <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
                    </li>
                    <li>
                        <RouterLink v-if="!state.authenticated" to="/login">Sign in</RouterLink>
                        <div v-if="state.authenticated" @click="logout">Logout</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Tre colonne con larghezza flessibile */
    gap: 8px;
    /* Spaziatura tra le categorie */
}

.category-grid li {
    list-style-type: none;
    /* Rimuovi i bullet points */
    padding: 8px;
}
</style>