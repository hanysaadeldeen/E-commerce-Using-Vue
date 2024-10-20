import { defineStore } from "pinia";
import { onMounted, reactive, ref, watch } from "vue";

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
  // how many products in the page
  const numberProduct = ref<number>(10);
  // for number product in the navBar
  const cartCount = ref<number>(0);
  // for DRESS STYLE section
  const Category = reactive<string[]>([]);
  // subTotal discount totalMoney => for Order Summary section
  const subTotal = ref<number>();
  const discount = ref<number>();
  const totalMoney = ref<number>();
  // the products in the localStorage
  const filteredProducts = ref<Products[]>([]);
  // ids for products in the localStorage
  const storedIds = ref<number[]>([]);

  // fetch Products by limit
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

  // get Specific Product for Product Details page
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

  // this fetch for DRESS STYLE section
  const fetchCategory = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const res = await response.json();
      Category.push(...res);
    } catch (error) {
      console.log(error);
    }
  };

  // for get products in the localStorage
  const fetchCartProducts = () => {
    const storedProducts = ref(
      JSON.parse(localStorage.getItem("Products") || "null") || []
    );

    if (storedProducts.value.length) {
      storedIds.value = storedProducts.value.map(
        (item: { id: number }) => item.id
      );
      if (products && storedIds.value.length) {
        filteredProducts.value = products.filter((product) =>
          storedIds.value.includes(product.id)
        );

        watch([products, storedIds], ([newProducts, newStoredProductIds]) => {
          if (newProducts.length > 0 && newStoredProductIds.length > 0) {
            filteredProducts.value = products.filter((product) =>
              storedIds.value.includes(product.id)
            );
            updateCartCount();
            updateOrder();
          }
        });

        updateCartCount();
        updateOrder();
      }
    } else {
      filteredProducts.value = [];
      updateCartCount();
    }
  };

  // for money (Order Summary section)
  const updateOrder = () => {
    if (filteredProducts) {
      const storedProducts = ref<{ id: number; count: number }[] | null>(
        JSON.parse(localStorage.getItem("Products") || "null") || []
      );

      if (storedProducts.value && storedProducts.value.length > 0) {
        const productTotals = filteredProducts.value.map(
          (product: { id: number; price: number }) => {
            const matchedProduct = storedProducts.value?.find(
              (storedProduct) => storedProduct.id === product.id
            );
            const count = matchedProduct ? matchedProduct.count : 1;
            return product.price * count;
          }
        );

        if (productTotals.length > 0) {
          subTotal.value = +productTotals
            .reduce((pre, now) => pre + now, 0)
            .toFixed(2);
          discount.value = +(subTotal.value * 0.2).toFixed(2);
          totalMoney.value = +(subTotal.value - discount.value + 15).toFixed(2);
        }
      }
    }
  };

  // cart length => in the navBar
  const updateCartCount = () => {
    const storedProducts = JSON.parse(localStorage.getItem("Products") || "[]");
    cartCount.value = storedProducts.length;
  };

  // how many products can Display on the page
  const UpdateDisplayProducts = (type: string) => {
    if (type === "increase") {
      if (numberProduct.value < 20) {
        numberProduct.value += 5;
      }
    } else {
      if (numberProduct.value > 5) {
        numberProduct.value -= 5;
      }
    }
  };

  watch(numberProduct, () => {
    fetchLimitedProducts();
  });

  onMounted(() => {
    updateCartCount();
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
    fetchCategory,
    Category,
    subTotal,
    discount,
    totalMoney,
    updateOrder,
    UpdateDisplayProducts,
    updateCartCount,
  };
});

export default Store;
