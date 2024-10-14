<template>
  <div class="px-3 px-md-0">
    <div class="row header mb-4">
      <div class="col text-center">Product Details</div>
      <div class="col text-center">Rating & Reviews</div>
      <div class="col text-center">FAQs</div>
    </div>
    <div class="reviewSection">
      <div class="row">
        <div
          class="col-12 mb-3 mb-md-0 col-md-4 gap-md-3 d-flex align-items-center flex-column flex-md-row gap-0 justify-content-start"
        >
          <h3 class="m-0">All Reviews</h3>
          <span>(523)</span>
        </div>
        <div
          class="col-12 col-md-8 d-flex justify-content-md-end justify-content-center align-items-center gap-3"
        >
          <div>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#F0F0F0" />
              <path
                d="M25.125 23.625V32.25C25.125 32.5484 25.0065 32.8345 24.7955 33.0455C24.5845 33.2565 24.2984 33.375 24 33.375C23.7016 33.375 23.4155 33.2565 23.2045 33.0455C22.9935 32.8345 22.875 32.5484 22.875 32.25V23.625C22.875 23.3266 22.9935 23.0405 23.2045 22.8295C23.4155 22.6185 23.7016 22.5 24 22.5C24.2984 22.5 24.5845 22.6185 24.7955 22.8295C25.0065 23.0405 25.125 23.3266 25.125 23.625ZM30.75 30C30.4516 30 30.1655 30.1185 29.9545 30.3295C29.7435 30.5405 29.625 30.8266 29.625 31.125V32.25C29.625 32.5484 29.7435 32.8345 29.9545 33.0455C30.1655 33.2565 30.4516 33.375 30.75 33.375C31.0484 33.375 31.3345 33.2565 31.5455 33.0455C31.7565 32.8345 31.875 32.5484 31.875 32.25V31.125C31.875 30.8266 31.7565 30.5405 31.5455 30.3295C31.3345 30.1185 31.0484 30 30.75 30ZM33 26.25H31.875V15.75C31.875 15.4516 31.7565 15.1655 31.5455 14.9545C31.3345 14.7435 31.0484 14.625 30.75 14.625C30.4516 14.625 30.1655 14.7435 29.9545 14.9545C29.7435 15.1655 29.625 15.4516 29.625 15.75V26.25H28.5C28.2016 26.25 27.9155 26.3685 27.7045 26.5795C27.4935 26.7905 27.375 27.0766 27.375 27.375C27.375 27.6734 27.4935 27.9595 27.7045 28.1705C27.9155 28.3815 28.2016 28.5 28.5 28.5H33C33.2984 28.5 33.5845 28.3815 33.7955 28.1705C34.0065 27.9595 34.125 27.6734 34.125 27.375C34.125 27.0766 34.0065 26.7905 33.7955 26.5795C33.5845 26.3685 33.2984 26.25 33 26.25ZM17.25 27C16.9516 27 16.6655 27.1185 16.4545 27.3295C16.2435 27.5405 16.125 27.8266 16.125 28.125V32.25C16.125 32.5484 16.2435 32.8345 16.4545 33.0455C16.6655 33.2565 16.9516 33.375 17.25 33.375C17.5484 33.375 17.8345 33.2565 18.0455 33.0455C18.2565 32.8345 18.375 32.5484 18.375 32.25V28.125C18.375 27.8266 18.2565 27.5405 18.0455 27.3295C17.8345 27.1185 17.5484 27 17.25 27ZM19.5 23.25H18.375V15.75C18.375 15.4516 18.2565 15.1655 18.0455 14.9545C17.8345 14.7435 17.5484 14.625 17.25 14.625C16.9516 14.625 16.6655 14.7435 16.4545 14.9545C16.2435 15.1655 16.125 15.4516 16.125 15.75V23.25H15C14.7016 23.25 14.4155 23.3685 14.2045 23.5795C13.9935 23.7905 13.875 24.0766 13.875 24.375C13.875 24.6734 13.9935 24.9595 14.2045 25.1705C14.4155 25.3815 14.7016 25.5 15 25.5H19.5C19.7984 25.5 20.0845 25.3815 20.2955 25.1705C20.5065 24.9595 20.625 24.6734 20.625 24.375C20.625 24.0766 20.5065 23.7905 20.2955 23.5795C20.0845 23.3685 19.7984 23.25 19.5 23.25ZM26.25 18.75H25.125V15.75C25.125 15.4516 25.0065 15.1655 24.7955 14.9545C24.5845 14.7435 24.2984 14.625 24 14.625C23.7016 14.625 23.4155 14.7435 23.2045 14.9545C22.9935 15.1655 22.875 15.4516 22.875 15.75V18.75H21.75C21.4516 18.75 21.1655 18.8685 20.9545 19.0795C20.7435 19.2905 20.625 19.5766 20.625 19.875C20.625 20.1734 20.7435 20.4595 20.9545 20.6705C21.1655 20.8815 21.4516 21 21.75 21H26.25C26.5484 21 26.8345 20.8815 27.0455 20.6705C27.2565 20.4595 27.375 20.1734 27.375 19.875C27.375 19.5766 27.2565 19.2905 27.0455 19.0795C26.8345 18.8685 26.5484 18.75 26.25 18.75Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="latest d-flex align-items-center gap-4">
            <p class="mb-1">Latest</p>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z"
                fill="black"
              />
            </svg>
          </div>

          <button class="Add-comment">Write a Review</button>
        </div>
      </div>
      <div class="my-4 reviewCard">
        <div class="row">
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
          <div class="col-12 col-md-6 my-2">
            <ReviewCard />
          </div>
        </div>
        <div class="text-center">
          <BaseButton title="Load More Reviews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../util/BaseButton.vue";
import ReviewCard from "../util/ReviewCard.vue";
</script>

<style scoped>
.header {
  border-bottom: 1px solid #0000001a;
}
.header .col {
  padding-bottom: 20px;
  color: #00000099;
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  cursor: pointer;
}
.header .col:hover {
  color: black;
  border-bottom: 2px solid black;
}
.reviewSection .h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}
.reviewSection span {
  color: #00000099;
  font-weight: 400;
}
.latest {
  background: #f0f0f0;
  padding: 10px 30px;
  border-radius: 50px;
}
button {
  color: #00000099;
  background: #f0f0f0;
  border-radius: 50px;
  padding: 12px 30px;
  border: 1px solid black;
  cursor: pointer;
}

button:hover {
  background: black;
  color: white;
  transition: 0.5s;
}
.Add-comment {
  background: black;
  color: white;
}

.Add-comment:hover {
  background: #f0f0f0;
  color: black;
  border: 1px solid black;
}
@media (max-width: 797px) {
  .header .col {
    font-size: 16px;
    font-weight: 400;
  }
  .reviewSection .h3 {
    font-size: 20px;
    line-height: 27px;
  }
  .reviewSection span {
    font-size: 14px;
  }
  button {
    font-size: 14px;
  }
}
</style>
