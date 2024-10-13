<template>
  <div class="container">
    <section class="row">
      <div class="col-12 col-lg-6 text-white mb-5 mb-lg-0">
        <SectionHeader
          title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
          position="right"
        />
      </div>

      <div
        class="col-12 col-lg-6 d-flex flex-column gap-3 justify-content-center align-items-center"
      >
        <div
          class="search d-flex align-items-center justify-content-start gap-3 m-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
            stroke="currentColor"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
          <input type="search" placeholder="Enter your email address" />
        </div>
        <button>Subscribe to Newsletter</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from "./SectionHeader.vue";
</script>

<style scoped>
section {
  background: #000000;
  border-radius: 20px;
  padding: 40px;
}
@media (max-width: 797px) {
  section {
    padding: 20px;
  }
}
.search {
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 50px;
  width: 350px;
  height: 48px;
}
.search svg {
  color: #00000066;
}
.search input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
}
button {
  height: 48px;
  width: 350px;
  border-radius: 50px;
  padding: 12px 30px;
  text-align: center;
  border: 1px solid #0000001a;
  background: white;
}

button:hover {
  background-color: black;
  color: white;
  border: 1px solid white;
  transition: 0.4s;
}
@media (max-width: 797px) {
  button,
  .search {
    width: 100%;
  }
}
</style>
