<script>
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change';

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            themeChange(savedTheme);
        } else {
            themeChange(false);
        }
    },
}
</script>

<template>
  <Navbar />

  <main class="md:min-h-screen lg:min-h-min">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped></style>
