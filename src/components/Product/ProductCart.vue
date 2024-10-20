<template>
  <div class="Product-Cart d-flex flex-wrap flex-sm-nowrap gap-4">
    <div class="img-box">
      <router-link :to="`/${id}`">
        <img :src="image" alt="cart" />
      </router-link>
    </div>
    <div
      class="content d-flex justify-content-between gap-o gap-md-4 w-100 w-sm-75 px-lg-0"
    >
      <div class="info">
        <h1>{{ title }}</h1>
        <p class="m-0">Size: <span> Large</span></p>
        <p class="m-0">Color: <span> White</span></p>
        <h2 class="mt-2">${{ price }}</h2>
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
          @click="deleteProduct(id)"
        >
          <path
            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
          />
        </svg>
        <div class="w-100">
          <BaseCounter
            :count="ProductCount"
            @increase-by="updateQuantity('increase', 1)"
            @decrease-by="updateQuantity('decrease', 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Store from "../../Store/Store";
import BaseCounter from "../util/BaseCounter.vue";
// @increase-by="(n:number) => (ProductCount += n)"
// @decrease-by="(n:number) => ProductCount > 1 && (ProductCount -= n)"
const ProductCount = ref<number>(1);

interface Products {
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

const props = defineProps<{ data: Products; index: number }>();
const { id, title, price, image } = props.data;

const { fetchCartProducts, updateOrder } = Store();

const prevProducts = ref<{ id: number; count: number }[]>(
  JSON.parse(localStorage.getItem("Products") || "[]")
);
const specificProduct = ref(
  prevProducts.value.find((product) => product.id === id)
);
if (specificProduct) {
  ProductCount.value = specificProduct.value?.count || 1;
}

const deleteProduct = (prodId: number) => {
  const storedProducts = JSON.parse(localStorage.getItem("Products") || "[]");
  if (storedProducts) {
    localStorage.setItem(
      "Products",
      JSON.stringify(
        storedProducts.filter((item: { id: number }) => item.id !== prodId)
      )
    );
    fetchCartProducts();
  }
};

const updateQuantity = (type: string, num: number) => {
  if (type === "increase") {
    ProductCount.value += num;
  } else if (type === "decrease") {
    if (ProductCount.value <= 1) {
      deleteProduct(id);
    } else {
      ProductCount.value -= num;
    }
  }
};

watch(ProductCount, () => {
  const prevProducts = ref<{ id: number; count: number }[]>(
    JSON.parse(localStorage.getItem("Products") || "[]")
  );
  if (prevProducts.value) {
    const currentProduct = prevProducts.value.find(
      (product: { id: number }) => product.id === id
    );

    if (currentProduct) {
      currentProduct.count = ProductCount.value;
      const updatedProducts = prevProducts.value.map((product) =>
        product.id === id ? { ...product, count: ProductCount.value } : product
      );
      localStorage.setItem("Products", JSON.stringify(updatedProducts));
    }
    updateOrder();
  }
});
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
  object-fit: contain;
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
