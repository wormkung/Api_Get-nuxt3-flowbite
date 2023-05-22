<template>
  <div class="mt-24">
    <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay"
      class="mx-auto flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button">
      Dropdown Category
      <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdownDelay" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
        <li v-for="pro in cat">
          <a @click="feat(pro)" href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ pro }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="grid grid-cols-1 container mx-auto px-4 mt-8 justify-items-center md:grid-cols-3 lg:grid-cols-5 sm:gap-2">
    <div v-for="product in product"
      class="bg-[#Fff] border-gray-300 max-w-sm p-3 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-[#fff]">
      <NuxtLink :to="`/products/${product.id}`">
        <img class="p-8 rounded-t-lg w-58 h-40 mx-auto" :src="product.thumbnail" alt="product image " />
      </NuxtLink>
      <div class="">
        <NuxtLink :to="`/products/${product.id}`">
          <h5 class="font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ product.title }}
          </h5>
        </NuxtLink>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 my-3">
          {{ product.description }}
        </p>

        <div class="flex items-center">
          <span class="font-bold text-red-900 dark:text-white">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import axios from "axios";

const product = ref({});

onMounted(() => {
  initFlowbite();
});

const { data: cat } = await useFetch(
  "https://dummyjson.com/products/categories"
);

const feat = (va) => {
  axios.get(`https://dummyjson.com/products/category/${va}`).then((res) => {
    product.value = res.data.products;
  });
};

// initialize components based on data attribute selectors
</script>

<style></style>
