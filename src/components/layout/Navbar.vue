<template>
  <div>
    navBar

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Details', params: { ProdId: 123 } }">
          Details</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Cart' }">cart</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
