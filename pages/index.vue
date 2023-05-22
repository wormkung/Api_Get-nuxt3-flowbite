<template>
  <div class="container mx-auto mt-24">
    <a href="/">
      <h1 class="text-3xl mb-6 font-bold dark:text-white ml-12">
        All<small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">Product</small>
      </h1>
    </a>
    <form class="flex items-center mx-12">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <input v-model="searchQuery" type="text" id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search" required />
      </div>
      <button @click.prevent="api" type="submit"
        class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>

    <div class="grid grid-cols-1 container mx-auto px-4 mt-8 justify-items-center md:grid-cols-3 lg:grid-cols-5 sm:gap-2">
      <div v-for="product in articles"
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// const { data: data } = await useFetch("https://dummyjson.com/products");

useHead({
  title: "หน้าแรก",
  meta: [
    {
      name: "description",
      content: "All Products",
    },
  ],
});

const searchQuery = ref("");
const articles = ref([]);

const api = () => {
  axios
    .get(`https://dummyjson.com/products/search?q=${searchQuery.value}`)
    .then((res) => {
      articles.value = res.data.products;
      console.log(articles);
    });
};

onMounted(() => api());
</script>

<style lang="scss" scoped></style>
