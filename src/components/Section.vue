<template>
  <div
    class="w-full p-3 px-4 flex items-center flex-wrap justify-between bg-fb mt-2"
  >
    <div class="grid grid-cols-3 divide-x">
      <div
        v-for="(item, index) in care"
        :key="index"
        class="flex flex-col p-2 px-5"
      >
        <div><img :src="item.img" alt="img" /></div>
        <h1 class="text-base font-bold text-lblack">{{ item.title }}</h1>
        <p class="text-sm font-normal text-72 w-[204px]">{{ item.about }}</p>
      </div>
    </div>
    <div class="flex flex-col items-start w-[31%] gap-3">
      <h1 class="text-lg font-bold text-lblack">
        Would you like to join newsletters?
      </h1>
      <div class="flex relative">
        <input
          class="px-6 py-2 bg-white"
          type="text"
          placeholder="enter email address..."
        />
        <button class="btn absolute -right-16">Join</button>
      </div>
      <p class="font-normal text-sm text-72">
        We usually post offers and challenges in newsletter. We’re your online
        houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  </div>
  <div class="bg-[#46A3581A]">
    <div class="w-full flex items-center px-8 gap-20 py-5">
      <div><img src="/icons/logo.svg" alt="logo" /></div>
      <div
        v-for="(item, index) in contact"
        :key="index"
        class="flex items-center gap-2"
      >
        <img :src="item.logo" alt="location" />
        <p class="text-sm font-normal text-lblack">
          {{ item.title }} <br />
          {{ item.title2 }}
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { care, contact } from "../data/";
</script>
