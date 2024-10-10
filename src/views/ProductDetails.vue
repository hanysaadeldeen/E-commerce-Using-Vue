<template>
  <div>
    <h1>product Details</h1>
    <h1>{{ ProdId }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ ProdId: string }>();
</script>
<style lang="scss" scoped></style>
