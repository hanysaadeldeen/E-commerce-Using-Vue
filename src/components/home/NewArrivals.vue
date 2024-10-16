<template>
  <section>
    <SectionHeader title="NEW ARRIVALS" position="center" />
    <div class="container text-center" style="margin-top: 70px">
      <div class="row">
        <div class="col-12">
          <swiper
            space-between="30"
            :breakpoints="{
              400: { slidesPerView: 1 },
              450: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }"
          >
            <swiper-slide v-for="(product, index) in products" :key="index">
              <ProductCard :product="product" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <BaseButton
        title="View All"
        :width="'210px'"
        :height="'52px'"
        white
        margin
        full
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BaseButton from "../util/BaseButton.vue";
import ProductCard from "../util/ProductCard.vue";
import SectionHeader from "../util/SectionHeader.vue";

interface Product {
  image: string;
}

const products: Product[] = [
  { image: "/src/assets/prod1.png" },
  { image: "/src/assets/product2.png" },
  { image: "/src/assets/product3.png" },
  { image: "/src/assets/prod1.png" },
  { image: "/src/assets/product2.png" },
  { image: "/src/assets/product3.png" },
  { image: "/src/assets/prod1.png" },
  { image: "/src/assets/product2.png" },
  { image: "/src/assets/product3.png" },
];
</script>

<style scoped>
section {
  padding: 70px 0;
}
</style>
