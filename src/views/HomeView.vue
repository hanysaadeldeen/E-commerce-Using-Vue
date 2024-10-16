<template>
  <HeaderSection />
  <BrandsSection />
  <NewArrivals :Allproducts="products" />
  <Divider />
  <TopSelling :Allproducts="products" />
  <DressStyle />
  <ReviewsSection />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import BrandsSection from "../components/home/BrandsSection.vue";
import DressStyle from "../components/home/DressStyle.vue";
import HeaderSection from "../components/home/HeaderSection.vue";
import NewArrivals from "../components/home/NewArrivals.vue";
import ReviewsSection from "../components/home/ReviewsSection.vue";
import TopSelling from "../components/home/TopSelling.vue";
import Divider from "../components/util/Divider.vue";
import Store from "../Store/Store";
import { onMounted } from "vue";

const store = Store();

const { fetchLimitedProducts } = Store();
const { products } = storeToRefs(store);

onMounted(() => {
  fetchLimitedProducts();
});
</script>

<style scoped>
h1 {
  font-family: "Candal", sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
}

img {
  width: 100%;
}
button {
  width: 210px;
  height: 52px;
  color: white;
  background: black;
  border-radius: 50px;
  padding: 12px 30px;
  text-align: center;
  margin: 15px 0 25px;
}

.status div p {
  margin: 0;
  color: #00000099;
  font-family: sans-serif;
  font-size: 16px;
}

.status div h2 {
  font-family: sans-serif;
  font-weight: 600;
  font-size: 40px;
}

.status div:nth-child(2) {
  border-left: 2px solid #0000001a;
  border-right: 2px solid #0000001a;
  padding-right: 20px;
  padding-left: 20px;
}
@media (max-width: 992px) {
  h1 {
    font-size: 36px;
  }
}
@media (max-width: 797px) {
  .status div:nth-child(2) {
    border-right: none;
  }
  .status div h2 {
    font-size: 35px;
  }
  button {
    width: 100%;
  }
}
</style>
