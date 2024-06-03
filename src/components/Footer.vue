<template>
  <div class="flex  gap-[160px] bg-fb px-6 p-2">
    <div v-for="(item, index) in footer" :key="index">
      <h1 class="text-lg font-bold text-lblack">{{ item.title }}</h1>
      <p
        class="text-sm font-normal text-lblack"
        v-for="(item, index) in item.data"
        :key="key"
      >
        {{ item }}
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col">
        <h1 class="text-lg font-bold text-lblack" >Social Media</h1>
        <div class="flex items-center gap-3"> <img  v-for="item, index in sm" :key="index" class="border-2 p-2 rounded-md" :src="item.img" alt="img"> </div>
      </div>
      <div class="flex flex-col">
        <h1 class="text-lg font-bold text-lblack" >We accept</h1>
        <div><img src="/pay.png" alt="payment-img" width="224"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-center py-3">
    <p class="text-lblack text-sm font-normal">
      © 2021 GreenShop. All Rights Reserved.
    </p>
  </div>
</template>

<script setup>
import { footer, sm } from "../data";
</script>
