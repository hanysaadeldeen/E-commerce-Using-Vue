<template>
  <button
    :class="[{ black, white, 'with-margin': margin, 'full-width': full }]"
    :style="{ width, height }"
  >
    {{ title }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  black?: boolean;
  white?: boolean;
  width?: string;
  height?: string;
  margin?: boolean;
  full?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
button {
  border-radius: 50px;
  padding: 12px 30px;
  text-align: center;
  border: 1px solid #0000001a;
  background: white;
  transition: 0.4s;
}
.with-margin {
  margin: 15px 0 25px;
}

.black {
  background-color: black;
  color: white;
  border: 1px solid black;
}
.black:hover {
  background-color: white;
  color: black;
  border: 1px solid #0000001a;
}
.white {
  background-color: white;
  color: black;
  border: 1px solid #0000001a;
}
.white:hover {
  background-color: black;
  color: white;
  border: 1px solid white;
}

@media (max-width: 576px) {
  .full-width {
    width: 100% !important;
  }
}
</style>
