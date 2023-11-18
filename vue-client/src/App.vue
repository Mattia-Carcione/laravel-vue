<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar: Navbar,
    Footer: Footer
  }
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
