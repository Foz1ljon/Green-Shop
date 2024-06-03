<template>
  <div class="w-[310px]  bg-fb p-2 py-3 flex flex-col gap-4">
    <h1 class="text-lg font-bold text-lblack">Categories</h1>
    <div
      class="flex justify-between px-2  text-sm font-normal focus:text-gren"
      v-for="(item, index) in categories"
      :key="index"
    >
      <a class="focus:text-gren" href="#a">{{ item.title }}</a>
      <a class="focus:text-gren" href="#a" >({{ item.count }})</a>
    </div>
    <div class="flex flex-col gap-1 justify-start">
        <h1 class="text-lg font-bold text-lblack">Price Range</h1>
        <input
          class="bg-green-500 h-1 w-full rounded-lg"
          type="range"
          min="2"
        />
        <p class="flex gap-2 " ><p>Price:</p>
        <p class="text-gren"><b>$39 - $1230</b></p> </p>
        <button class="btn w-[110px]"><b>Filter</b></button>
    </div>

    <div>
        <h1 class="text-lg font-bold text-lblack">Size</h1>
<a class="flex justify-between text-sm font-normal py-1 focus:text-gren" v-for="item, index in size" :key="index" href="#r">
    <p>{{ item.title  }}</p>
    <p>({{ item.count }})</p>
</a>
    </div>

   <div class="flex items-center flex-col relative z-10"> <img class="z-10" src="../../assets/sale.svg" alt="sale">
<h1 class="text-2xl font-bold z-10 text-lblack">UP TO 75% OFF</h1>
<img class="absolute top-[66px] -z-[1]" src="/imgcat.png" alt="img">

</div>
  </div>
</template>

<script setup>
import { categories, size } from "../../data";
</script>
