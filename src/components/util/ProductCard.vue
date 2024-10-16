<template>
  <div class="w-100">
    <router-link :to="{ name: 'Details', params: { ProdId: id } }">
      <div class="card-img">
        <img :src="image" :alt="title" />
      </div>
    </router-link>
    <div class="card-body py-4 d-flex flex-column gap-2">
      <h1 class="title m-0">{{ title }}</h1>
      <div class="rating d-flex align-items-center">
        <template v-for="_ in fullStars" :key="_">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-star-fill text-warning mx-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </template>

        <svg
          v-if="hasHalfStar"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-star-half text-warning mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
          />
        </svg>
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-star-fill text-warning mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-star-fill text-warning mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-star-fill text-warning mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-star-half text-warning mx-1"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
          />
        </svg> -->
        <p class="my-0 mx-2">
          {{ rating.rate }}/ <span class="text-body-secondary">5</span>
        </p>
      </div>
      <div class="price d-flex align-items-center gap-2">
        <p class="current">${{ price }}</p>
        <p class="past">
          <del>${{ (price * 0.89).toFixed(2) }}</del>
        </p>
        <p class="discount">-20%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const props = defineProps<{ product: Product; index: number }>();
const { id, title, price, image, rating } = props.product;

const fullStars = Math.floor(props.product.rating.rate);
const hasHalfStar = props.product.rating.rate % 1 !== 0;
</script>

<style scoped>
.card-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

img {
  width: 100%;
  max-height: 100%;
  border-radius: 20px;
  object-fit: cover;
}
.title {
  font-size: 20px;
  white-space: nowrap;
  max-width: 100%;
  font-family: sans-serif;
  overflow: hidden !important;
  text-overflow: ellipsis;
  font-weight: 600;
}

.price .current,
.price .past {
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.price .past {
  color: #00000066;
}

.discount {
  background-color: #ff33331a;
  color: #ff3333;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}
</style>
