<script>
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change';
import useAnnouncement from './announcement/useAnnouncement';
import useAuth from './auth/useAuth';

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    const auth = useAuth();
    return {
      user: auth.getUser,
      categories: null,
    }
  },
  methods: {
    async fetchCategories() {
      const fetch = useAnnouncement();
      await fetch.fetchCategories();
      if (!fetch.getError.value) {
        this.categories = fetch.getCategories
      } else {
        this.categories = null
      }
    }
  },
  beforeMount() {
    this.fetchCategories();
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      themeChange(savedTheme);
    } else {
      themeChange(false);
    }
  }
}
</script>

<template>
  <Navbar :categories="categories" :user="user" />

  <main class="md:min-h-screen lg:min-h-min">
    <RouterView :categories="categories" />
  </main>

  <Footer />
</template>

<style scoped></style>
