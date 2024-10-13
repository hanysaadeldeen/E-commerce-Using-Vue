<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String;
}
defineProps<Props>();
</script>

<style scoped>
button {
  width: 210px;
  height: 52px;
  border-radius: 50px;
  padding: 12px 30px;
  text-align: center;
  margin: 15px 0 25px;
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
  button {
    width: 100%;
  }
}
</style>
