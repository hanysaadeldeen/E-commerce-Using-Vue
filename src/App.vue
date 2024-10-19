<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
import Offers from "./components/layout/Offers.vue";
</script>

<template>
  <main>
    <Offers />
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped></style>
