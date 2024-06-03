<script setup>
import { defineProps } from "vue";

const item = defineProps({
  msg: {
    type: Array,
    required: true,
  },
});

const { msg } = item;
</script>

<template>
  <div
    class="flex flex-col w-[258px] h-[300px] border-t my-1 border-fb hover:border-gren"
  >
    <div class="bg-fb p-2 bg-cover">
      <img :src="msg.img" alt="img" />
    </div>
    <h1 class="font-normal text-base text-lblack" >{{ msg.title }}</h1>
    <div class="flex gap-2  text-lg text-gren">
      <p>${{ msg.price }}</p>
      <p v-if="msg.oldprice" class="text-a5 line-through font-bold" >{{ '$' + msg.oldprice }}</p>
    </div>
  </div>
</template>
