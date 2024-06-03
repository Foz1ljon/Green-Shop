<script setup>
import { onMounted } from "vue";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false });

onMounted(() => {
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes()); // Access API
  }
});
</script>

<template>
  <div class="overflow-hidden" ref="emblaRef">
    <div class="flex">
      <div v-for="item in 3" :id="item" class="embla__slide relative">
        <div class="w-full flex items-center bg-f5">
          <div class="flex flex-col w-[60%] px-6 gap-2">
            <p
              class="text-sm uppercase font-medium text-lblack tracking-widest"
            >
              Welcome to GreenShop
            </p>
            <h1
              class="text-lblack font-black text-[70px] leading-[70px] uppercase"
            >
              Let’s Make a Better <b class="text-gren">Planet</b>
            </h1>
            <p class="text-72 text-sm font-normal w-[77%]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div class="flex justify-start mt-5">
              <button class="uppercase btn">shop now</button>
            </div>
          </div>
          <div class="w-[40%]">
            <div class="relative">
              <img src="/big.png" alt="big" />
              <div class="absolute bottom-8 left-9">
                <img src="/min.png" alt="min" width="135" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>
