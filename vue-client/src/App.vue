<script>
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change';
import { reactive } from 'vue';

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import useAnnouncement from './announcement/useAnnouncement';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    const data = reactive({});
    return {
      data,
      fetch: useAnnouncement(),
    }
  },
  methods: {
    async fetchAnnouncements() {
      await this.fetch.fetchAnnouncements();
      if (!this.fetch.getError) {
        this.data = this.fetch.getData
      }
    }
  },
  mounted() {
    this.fetchAnnouncements();
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
    <RouterView :data="data" />
  </main>

  <Footer />
</template>

<style scoped></style>
