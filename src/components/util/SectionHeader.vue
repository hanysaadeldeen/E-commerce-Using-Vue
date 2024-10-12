<template>
  <div class="">
    <h1 :class="`m-0 text-${position}`">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String;
  position: String;
}
defineProps<Props>();
</script>

<style scoped>
h1 {
  font-family: "Candal", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
}
@media (max-width: 575.98px) {
  h1 {
    font-size: 40px;
  }
}
</style>
