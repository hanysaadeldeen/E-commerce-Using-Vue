<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped></style>
