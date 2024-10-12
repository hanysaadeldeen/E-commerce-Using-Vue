<template>
  <div class="container">
    <section>
      <SectionHeader title="BROWSE BY DRESS STYLE" position="center" />
      <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
          <div class="box-img">
            <img src="../../assets/style2.png" class="reverse" alt="style2" />
            <span> Casual</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-7 mb-4 mb-md-0">
          <div class="box-img">
            <img src="../../assets/style1.png" alt="style1" />
            <span> Gym</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-7 mt-4">
          <div class="box-img">
            <img src="../../assets/style3.png" alt="style1" />
            <span>Party</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 mt-4">
          <div class="box-img">
            <img src="../../assets/style4.png" class="reverse" alt="style2" />
            <span>Formal</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from "../util/SectionHeader.vue";
</script>

<style scoped>
.container {
  padding-bottom: 70px;
}

section {
  padding: 70px 60px;
  background: #f0f0f0;
  border-radius: 40px;
}
.box-img {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: end;
  border-radius: 20px;
  background: white;
}
.box-img img {
  height: 280px;
  object-fit: cover;
}
.reverse {
  transform: scaleX(-1);
}
.box-img span {
  position: absolute;
  top: 16px;
  left: 24px;
  font-size: 38px;
  font-weight: 600;
}

@media (max-width: 576px) {
  .box-img img {
    height: 200px;
  }
}
@media (max-width: 992px) {
  .box-img span {
    font-size: 24px;
  }
  section {
    padding: 40px 20px;
  }
}
</style>
