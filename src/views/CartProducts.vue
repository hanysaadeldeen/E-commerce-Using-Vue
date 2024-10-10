<template>
  <section>
    <h1>cart</h1>
    <p>{{ Cart }}</p>
    <ul>
      <li v-for="product in products" :key="product.name">
        {{ product.name }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import Store from "../Store/Store";

const store = Store();
const { products } = Store();
const { Cart } = storeToRefs(store);
</script>

<style scoped></style>
