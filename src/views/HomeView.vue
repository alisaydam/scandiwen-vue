<template>
  <Navbar
    title="Product List"
    leftItem="ADD"
    rightItem="MASS DELETE"
    @rightEvent="massDelete"
    @leftEvent="addProduct"
  />
  <Products v-model:value="checkedProducts" :products="products" />
  <!-- <div class="mt-4 text-gray-800 font-bold">{{ checkedProducts }}</div> -->
</template>

<script>
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ref, onMounted } from "vue";

export default {
  name: "HomeView",
  setup() {
    let checkedProducts = ref([]);
    let products = ref([]);

    const getProducts = async () => {
      const res = await fetch("api/api/product/read.php");
      const data = await res.json();

      products.value = data.data;
    };
    const massDelete = async () => {
      const res = await fetch("api/api/product/delete.php", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          products: Object.values(checkedProducts.value),
        }),
      });
      const data = await res.json();
      getProducts();
    };

    onMounted(() => {
      getProducts();
    });

    return {
      massDelete,
      checkedProducts,
      getProducts,
      products,
    };
  },
  components: {
    Products,
    Navbar,
  },
  methods: {
    addProduct() {},
  },
};
</script>

<style></style>
