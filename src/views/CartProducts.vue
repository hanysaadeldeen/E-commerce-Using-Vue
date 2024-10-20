<template>
  <section>
    <div class="container">
      <p class="direction ps-2 ps-lg-0">Home > Cart</p>
      <SectionHeader class="ps-2 ps-lg-0" title="YOUR CART" position="right" />
      <div
        v-if="filteredProducts && filteredProducts.length > 0"
        class="mt-4 row"
      >
        <div class="col-lg-7 gap-4">
          <div class="Items">
            <div
              class="item"
              v-for="(info, index) in filteredProducts"
              :key="info.id"
            >
              <ProductCart :data="info" :index="index" />
            </div>
          </div>
        </div>
        <div class="col-lg-5 mt-3 mt-lg-0">
          <div class="Order">
            <h1 class="mb-4">Order Summary</h1>
            <div
              class="subtotal d-flex justify-content-between align-items-center m-0 p-0"
            >
              <p>Subtotal</p>
              <p>${{ subTotal }}</p>
            </div>
            <div
              class="Discount d-flex justify-content-between align-items-center m-0 p-0"
            >
              <p>Discount (-20%)</p>
              <p>-${{ discount }}</p>
            </div>
            <div
              class="Delivery d-flex justify-content-between align-items-center m-0 p-0"
            >
              <p>Delivery Fee</p>
              <p>$15</p>
            </div>
            <div class="mb-3 divider"></div>
            <div
              class="Total d-flex justify-content-between align-items-center m-0 p-0"
            >
              <p>Total</p>
              <p>${{ totalMoney }}</p>
            </div>
            <div
              class="d-flex justify-content-between align-items-center gap-3"
            >
              <div
                class="code d-flex align-items-center justify-content-start gap-3 m-0"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0766 10.4857L11.7653 1.17444C11.5917 0.999696 11.3851 0.861152 11.1576 0.766846C10.93 0.672541 10.686 0.62435 10.4397 0.625069H1.75001C1.45164 0.625069 1.16549 0.743595 0.954513 0.954574C0.743534 1.16555 0.625008 1.4517 0.625008 1.75007V10.4398C0.624289 10.6861 0.67248 10.9301 0.766785 11.1576C0.861091 11.3852 0.999635 11.5918 1.17438 11.7654L10.4856 21.0766C10.8372 21.4281 11.3141 21.6256 11.8113 21.6256C12.3084 21.6256 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3085 21.6255 11.8113C21.6255 11.3141 21.4281 10.8373 21.0766 10.4857ZM11.8113 19.2204L2.87501 10.2813V2.87507H10.2813L19.2175 11.8113L11.8113 19.2204ZM7.37501 5.87507C7.37501 6.17174 7.28703 6.46175 7.12221 6.70842C6.95739 6.9551 6.72312 7.14736 6.44903 7.26089C6.17494 7.37442 5.87334 7.40412 5.58237 7.34625C5.2914 7.28837 5.02413 7.14551 4.81435 6.93573C4.60457 6.72595 4.46171 6.45868 4.40383 6.1677C4.34595 5.87673 4.37566 5.57513 4.48919 5.30104C4.60272 5.02695 4.79498 4.79269 5.04165 4.62786C5.28833 4.46304 5.57834 4.37507 5.87501 4.37507C6.27283 4.37507 6.65436 4.5331 6.93567 4.81441C7.21697 5.09571 7.37501 5.47724 7.37501 5.87507Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
                <input type="search" placeholder="Add promo code" />
              </div>
              <BaseButton style="width: 40%" title="Apply" black />
            </div>

            <BaseButton class="checkOut" full black title="Go To Checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </BaseButton>
          </div>
        </div>
      </div>
      <div v-else class="mt-4">
        <h2 class="text-center">Cart is Empty</h2>
        <div class="text-center my-4">
          <router-link to="/">
            <BaseButton title="Back to Home" black full />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ProductCart from "../components/Product/ProductCart.vue";
import BaseButton from "../components/util/BaseButton.vue";
import SectionHeader from "../components/util/SectionHeader.vue";
import Store from "../Store/Store";
import { storeToRefs } from "pinia";

const store = Store();
const { filteredProducts, subTotal, discount, totalMoney } = storeToRefs(store);

const { fetchLimitedProducts, fetchCartProducts } = Store();

onMounted(() => {
  fetchLimitedProducts();
  fetchCartProducts();
});
</script>

<style scoped>
section {
  padding: 30px 20px 70px;
}
.direction {
  color: #00000099;
  font-weight: 400;
}
.Items,
.Order {
  padding: 20px 24px;
  border: 1px solid #0000001a;
  border-radius: 20px;
  height: fit-content;
}
.Items .item {
  border-bottom: 2px solid #0000001a;
  padding: 30px 0;
}
.Items .item:first-of-type {
  padding: 0 0 30px 0;
}
.Items .item:last-of-type {
  border: none;
  padding: 30px 0 0;
}
.Order h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}
.divider {
  height: 1px;
  background-color: #0000001a;
  width: 100%;
}
p {
  font-weight: 700;
  font-size: 20px;
}
p:nth-child(1) {
  color: #00000099;
  font-weight: 400;
}
.Discount p:nth-child(2) {
  color: red;
  font-weight: 700;
}
.Total p:nth-child(1) {
  color: black;
}
.code {
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 50px;
  width: 70%;
}
.code svg {
  color: #00000066;
}
.code input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
}
.checkOut {
  padding: 13px;
  width: 100%;
  margin-top: 1rem;
}
.checkOut svg {
  margin-left: 10px;
}
.checkOut:hover svg {
  color: black;
}
@media (max-width: 992px) {
  .Order h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
  }
}
@media (max-width: 576px) {
  section {
    padding: 15px 5px 70px;
  }
  .Items,
  .Order {
    padding: 15px 18px;
  }
}
</style>
