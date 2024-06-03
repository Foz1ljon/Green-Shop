<template>
  <div class="flex my-5 justify-between">
    <Category />

    <div class="flex flex-col">
      <div class="flex justify-between my-1">
        <!-- filter  -->
        <div class="flex gap-5">
          <a
            class="border-b-4 pb-2 border-b-white focus:text-gren focus:border-b-gren"
            href="#s"
            >All Plants</a
          >
          <a
            class="border-b-4 pb-2 border-b-white focus:text-gren focus:border-b-gren"
            href="#s"
            >New Arrivals</a
          >
          <a
            class="border-b-4 pb-2 border-b-white focus:text-gren focus:border-b-gren"
            href="#s"
            >Sale</a
          >
        </div>
       

        <div class="flex items-center gap-3">
          <p>Short by:</p>
          <select class="bg-white outline-none">
            <option v-for="item in 5" value="test">Default sorting</option>
          </select>
        </div>
         <!-- filter  end -->
      </div>
      <div class="grid grid-cols-3 gap-10">
        <div v-for="(item, index) in products" :key="index">
          <ProductItem :msg="item" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { products } from "../../data";
import ProductItem from "./Product-Item.vue";
import Category from "./Category.vue";
</script>
