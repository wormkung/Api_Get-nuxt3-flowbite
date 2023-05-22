<template>
    <div>
        <Title> {{ product.title }}</Title>
        <meta name="description" :content="product.description" />
    </div>
    <div class="flex justify-center mt-28">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{{ product.title
            }}</span>
        </h1>
    </div>
    <div class="flex mx-auto mt-10 w-3/4 justify-center">
        <figure class="max-w-lg">
            <img class="h-auto max-w-full rounded-lg" :src="product.thumbnail" alt="image description" />
            <figcaption class="mt-5 text-sm text-center text-gray-500 dark:text-gray-400">
                {{ product.description }}
            </figcaption>
        </figure>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: product } = await useFetch(
    "https://dummyjson.com/products/" + id
);
console.log(product);
</script>

<style lang="scss" scoped></style>
