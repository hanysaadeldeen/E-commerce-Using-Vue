<template>
  <div class="container">
    <section>
      <p class="direction">Home > Shop > Men > T-shirts</p>
      <div class="product row">
        <div class="col-12 col-md-6 mb-5">
          <div class="img-box">
            <img
              :src="specificProductItem?.image"
              v-bind:alt="specificProductItem?.title"
            />
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column gap-1">
          <h1 class="product-title">{{ specificProductItem?.title }}</h1>
          <div class="rating d-flex align-items-center">
            <template v-for="_ in fullStar" :key="_">
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
              v-if="halfStar"
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

            <p class="my-0 mx-2">
              {{ specificProductItem?.rating.rate }}/
              <span class="text-body-secondary"> 5</span>
            </p>
          </div>
          <div class="price d-flex align-items-center gap-2">
            <p class="current m-0">${{ specificProductItem?.price }}</p>
            <p class="past m-0">
              <del
                >${{
                  specificProductItem &&
                  (specificProductItem.price * 0.89).toFixed(2)
                }}</del
              >
            </p>
            <p class="discount m-0">-20%</p>
          </div>
          <div class="description">
            {{ specificProductItem?.description }}
          </div>
          <div class="my-2 my-md-3 divider"></div>
          <div class="color">
            <p>Select Colors</p>
            <div class="All-colors d-flex align-items-center gap-3">
              <div
                :class="[
                  'color-box ',
                  ChangeColor === '#4f4631' ? 'active' : '',
                ]"
                class="position-relative"
                @click="ChangeColor = '#4f4631'"
                style="background-color: #4f4631"
              ></div>
              <div
                class="position-relative"
                :class="[
                  'color-box ',
                  ChangeColor === '#314f4a' ? 'active' : '',
                ]"
                @click="ChangeColor = '#314f4a'"
                style="background-color: #314f4a"
              ></div>
              <div
                class="position-relative"
                :class="[
                  'color-box ',
                  ChangeColor === '#31344f' ? 'active' : '',
                ]"
                @click="ChangeColor = '#31344f'"
                style="background-color: #31344f"
              ></div>
            </div>
          </div>
          <div class="my-2 my-md-3 divider"></div>
          <div class="size">
            <p>Select Size</p>
            <div class="d-flex gap-2 flex-wrap">
              <template v-for="size in AllSizes" :key="size.name">
                <BaseButton
                  :title="size.name"
                  :width="'fit-content'"
                  :height="'48px'"
                  :class="[ChangeSize === size.name ? 'black' : 'white']"
                  @click="ChangeSize = size.name"
                />
              </template>
            </div>
          </div>
          <div class="my-3 divider"></div>
          <div class="AddCart row px-3 px-md-0">
            <div class="mb-3 mb-sm-0 col-6 col-lg-4 mx-auto">
              <BaseCounter
                :count="ProductCount"
                @increase-by="(n) => (ProductCount += n)"
                @decrease-by="(n) => ProductCount > 1 && (ProductCount -= n)"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-8">
              <BaseButton
                title="Add To Cart"
                black
                :width="'100%'"
                :height="'48px'"
                @click="AddToCart"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="reviews mt-5">
        <ProductReview :reviewCount="specificProductItem?.rating.count" />
      </div>
      <div class="alsoLike">
        <SectionHeader title="YOU MIGHT ALSO LIKE" position="center" />
        <div class="row">
          <div class="col-12 all-Product">
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
              <swiper-slide
                v-for="(product, index) in products.slice(0, 5)"
                :key="product.id"
              >
                <ProductCard :product="product" :index="index" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ProductReview from "../components/Product/ProductReview.vue";
import BaseButton from "../components/util/BaseButton.vue";
import BaseCounter from "../components/util/BaseCounter.vue";
import ProductCard from "../components/util/ProductCard.vue";
import SectionHeader from "../components/util/SectionHeader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Store from "../Store/Store";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
const props = defineProps<{ ProdId: string }>();
const AllSizes: { name: string }[] = [
  {
    name: "Small",
  },
  {
    name: "Medium",
  },
  {
    name: "Large",
  },
  {
    name: "X-Large",
  },
];

const ChangeColor = ref<string>("");
const ChangeSize = ref<string>("");
const ProductCount = ref<number>(1);

const store = Store();

const { specificProduct } = Store();
const { products, specificProductItem, Loading, cartCount } =
  storeToRefs(store);

var fullStar = ref(0);
var halfStar = ref<boolean | false>(false);

watch(Loading, () => {
  fullStar = ref(Math.floor(specificProductItem.value?.rating.rate || 0));
  halfStar = ref<boolean | false>(
    specificProductItem.value
      ? specificProductItem.value.rating.rate % 1 !== 0
      : false
  );
});
const AddToCart = () => {
  const prevProducts: { id: number; count: number }[] | null = JSON.parse(
    localStorage.getItem("Products") || "null"
  );
  const newProduct = {
    id: specificProductItem.value?.id,
    count: ProductCount.value,
  };
  if (prevProducts) {
    const hasPrevProduct = prevProducts.find(
      (product) => product.id === newProduct.id
    );
    const removeProductFilter = prevProducts.filter(
      (product) => product.id !== newProduct.id
    );
    if (hasPrevProduct) {
      const updatedCount = hasPrevProduct?.count + ProductCount.value;
      hasPrevProduct.count = updatedCount;
      removeProductFilter.push(hasPrevProduct);
      localStorage.setItem("Products", JSON.stringify(removeProductFilter));
      const AllNumber = JSON.parse(localStorage.getItem("Products") || "null");
      cartCount.value = AllNumber.length;
    } else {
      const updateProducts = [...prevProducts, newProduct];
      localStorage.setItem("Products", JSON.stringify(updateProducts));
      const AllNumber = JSON.parse(localStorage.getItem("Products") || "null");
      cartCount.value = AllNumber.length;
    }
  } else {
    localStorage.setItem("Products", JSON.stringify([newProduct]));
    cartCount.value += 1;
  }
};
watch(
  () => props.ProdId,
  (newId) => {
    specificProduct(newId);
    ProductCount.value = 1;
  }
);

onMounted(() => {
  specificProduct(props.ProdId);
});
</script>

<style scoped>
section {
  padding: 30px 0 70px;
}
.img-box {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.all-Product {
  margin-top: 70px;
}
img {
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  border-radius: 20px;
  object-fit: contain;
}

.direction {
  color: #00000099;
  font-weight: 400;
}

.product {
  margin-top: 50px;
}

.product-title {
  font-size: 40px;
  font-weight: 700;
}

.rating svg {
  margin: 0 5px;
}

.rating p {
  margin: 0 10px;
}

.price .current,
.price .past {
  font-family: sans-serif;
  font-size: 32px;
  font-weight: 700;
}

.price .past {
  color: #0000004d;
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

.description {
  font-size: 16px;
  font-weight: 400;
  color: #00000099;
  line-height: 1.5;
}

.divider {
  height: 1px;
  background-color: #0000001a;
  width: 100%;
}

.color p {
  color: #00000099;
  font-weight: 400;
}

.All-colors {
  display: flex;
  align-items: center;
  gap: 3px;
}

.color-box {
  width: 37px;
  height: 37px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-box.active::before {
  content: "\2713";
  position: absolute;
  color: white;
  font-size: 18px;
  z-index: 2;
  font-weight: 700;
}

.size p {
  color: #00000099;
  font-weight: 400;
}

@media (max-width: 992px) {
  .product-title {
    font-size: 24px;
  }

  .price .current,
  .price .past {
    font-size: 24px;
  }

  .discount,
  .description {
    font-size: 14px;
  }

  .all-Product {
    margin-top: 40px;
  }
}
</style>
