<template>
  <section>
    <SectionHeader title="TOP SELLING" position="center" />
    <div class="container text-center" style="margin-top: 70px">
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
      </div>
      <BaseButton title="View All" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "../util/BaseButton.vue";
import ProductCard from "../util/ProductCard.vue";
import SectionHeader from "../util/SectionHeader.vue";
</script>

<style scoped>
section {
  padding: 70px 0;
}
</style>
