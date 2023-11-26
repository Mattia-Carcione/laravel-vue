<script>
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change';
import useAnnouncement from './announcement/useAnnouncement';

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      categories: [],
      fetch: useAnnouncement()
    }
  },
  methods: {
    async fetchCategories() {
      await this.fetch.fetchCategories();
      if (!this.fetch.getError) {
        this.categories = this.fetch.getCategories
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
  <Navbar :categories="categories" />

  <main class="md:min-h-screen lg:min-h-min">
    <RouterView :categories="categories" />
  </main>

  <Footer />
</template>

<style scoped></style>
