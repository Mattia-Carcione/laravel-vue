<script>
import { RouterLink,RouterView } from 'vue-router'
import useAuth from './auth/useAuth'
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

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink v-if="!state.authenticated" to="/login">Login</RouterLink>
    <button type="submit" v-if="state.authenticated" @click="logout">Logout</button>
  </nav>

  <RouterView />
</template>

<style scoped></style>
