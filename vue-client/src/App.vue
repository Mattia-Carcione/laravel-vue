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
      categories: null,
      user: auth.getUser,
    }
  },
  beforeCreate() {
    const fetchData = async () => {
      const fetch = useAnnouncement();
      try {
        await fetch.fetchCategories();
        this.categories = fetch.getCategories;
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
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
    <RouterView :categories="categories" :user="user" />
  </main>

  <Footer />
</template>

<style scoped></style>
