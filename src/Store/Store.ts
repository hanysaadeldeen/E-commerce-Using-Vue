import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

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

const Store = defineStore("Products", () => {
  const products = reactive<Products[]>([]);
  const specificProductItem = ref<Products>();
  const Loading = ref<boolean>(false);
  const numberProduct = ref<number>(10);
  const cartCount = ref<number>(0);
  const filteredProducts = ref<Products[]>([]);

  const fetchLimitedProducts = async () => {
    products.length = 0;
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${numberProduct.value}`
      );
      const data = await response.json();
      products.push(...data);
    } catch (error) {
      console.log("fetch limited Product Error: ", error);
    }
  };

  const specificProduct = async (prodId: string) => {
    Loading.value = true;
    await fetchLimitedProducts();
    if (products.length > 0) {
      const productItem = products.find((item) => item.id === +prodId);
      if (productItem) {
        specificProductItem.value = productItem;
        Loading.value = false;
      }
    } else {
      Loading.value = false;
    }
  };

  const fetchCartProducts = async () => {
    const storedProducts = ref(
      JSON.parse(localStorage.getItem("Products") || "null") || []
    );

    const storedProductIds = ref(
      storedProducts.value &&
        storedProducts.value.map((item: { id: number }) => item.id)
    );

    watch(
      [products, storedProductIds],
      ([newProducts, newStoredProductIds]) => {
        if (newProducts.length > 0 && newStoredProductIds.length > 0) {
          filteredProducts.value = products.filter((product) =>
            storedProductIds.value.includes(product.id)
          );
        }
      }
    );
  };

  watch(numberProduct, () => {
    fetchLimitedProducts();
  });

  return {
    fetchLimitedProducts,
    specificProduct,
    specificProductItem,
    products,
    Loading,
    cartCount,
    fetchCartProducts,
    filteredProducts,
  };
});

export default Store;
