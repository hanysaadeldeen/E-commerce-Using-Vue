<template>
  <div class="Product-Cart d-flex flex-wrap flex-sm-nowrap gap-4">
    <div class="img-box">
      <img src="../../assets/cart1.png" alt="cart" />
    </div>
    <div
      class="content d-flex justify-content-between gap-o gap-md-4 w-100 w-sm-75 px-lg-0"
    >
      <div class="info">
        <h1>Gradient Graphic T-shirt</h1>
        <p class="m-0">Size: <span> Large</span></p>
        <p class="m-0">Color: <span> White</span></p>
        <h2 class="mt-2">$145</h2>
      </div>
      <div
        class="control d-flex flex-column justify-content-between align-items-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          class="bi bi-trash3-fill trash"
          viewBox="0 0 16 16"
          stroke-width="1.5"
        >
          <path
            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
          />
        </svg>
        <div class="w-100">
          <BaseCounter
            :count="ProductCount"
            @increase-by="(n) => (ProductCount += n)"
            @decrease-by="(n) => ProductCount > 1 && (ProductCount -= n)"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="my-4 divider"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseCounter from "../util/BaseCounter.vue";
const ProductCount = ref<number>(1);
</script>

<style scoped>
.Product-Cart {
  width: 100%;
}
.img-box {
  height: 124px;
  width: 124px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.info h1 {
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
}
.info p {
  font-size: 14px;
  font-weight: 400;
}
.info p span {
  color: #00000099;
}
.info h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
}
.trash {
  color: #ff3333;
  cursor: pointer;
}
.divider {
  height: 1px;
  background-color: #0000001a;
  width: 100%;
}

.content .info {
  width: 70%;
}
.content .control {
  width: 30%;
}
@media (max-width: 576px) {
  .content .info,
  .content .control {
    width: 50%;
  }
}
</style>
