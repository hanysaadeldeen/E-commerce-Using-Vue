import { defineStore } from "pinia";
import { reactive, ref } from "vue";

interface Products {
  name: string;
  age: number;
}

const Store = defineStore("Products", () => {
  const products = reactive<Products[]>([
    { name: "hany", age: 55 },
    { name: "mohamed", age: 55 },
    { name: "saad", age: 88 },
  ]);

  const Cart = ref<number>(50);

  return {
    products,
    Cart,
  };
});

export default Store;
