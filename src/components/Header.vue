<script setup>
const menu = ["Home", "Shop", "Plant Care", "Blogs"];
</script>

<template>
  <div class="flex justify-between items-center py-4">
    <img src="/icons/logo.svg" alt="logo" />

    <div class="md:flex gap-4 sm:hidden">
      <div v-for="(item, index) in menu" :key="index">
        <router-link
          class="text-[17px] focus:border-b-4 z-50 focus:border-gren focus:pb-5 focus:text-gren"
          to="/"
        >
          {{ item }}
        </router-link>
      </div>
    </div>

    <div class="flex gap-6">
      <button><img src="/icons/search.svg" alt="search" /></button>
      <button><img src="/icons/cart.svg" alt="search" /></button>
      <button
        class="flex gap-1 btn"
      >
        <img src="/icons/logout.svg" alt="logout" /> Login
      </button>
    </div>
  </div>
  <hr />
</template>
