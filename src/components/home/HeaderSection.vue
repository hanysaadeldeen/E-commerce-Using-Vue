<template>
  <section style="background-color: #f0f0f0">
    <div class="container">
      <div class="row px-4 px-sm-0 pt-4 d-flex align-items-center">
        <div class="col-12 col-lg-6 pt-sm-0 pt-4 px-0">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p style="color: #00000099; margin-top: 15px">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button>Shop Now</button>
          <div class="status d-flex mb-1 row px-4 px-sm-0">
            <div class="col-6 col-md-4">
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div class="col-6 col-md-4">
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div class="col-md-4 col-12 text-center text-md-start mt-md-0 mt-4">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 px-0">
          <img src="../../assets/head.svg" alt="header Image " />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
