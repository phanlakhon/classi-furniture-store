<template lang="">
  <AppContainer>
    <p class="text-xl mb-5">New arrivals</p>
    <!-- <div class="grid grid-cols-3 gap-16 mb-20"> -->
    <div class="hidden lg:grid grid-cols-3 gap-16 mb-20">
      <div v-for="(item, index) in items" :key="index">
        <CardsNewArrivals :item="item" />
      </div>
    </div>

    <div class="block lg:hidden">
      <swiper
        :spaceBetween="30"
        :navigation="false"
        :loop="true"
        :modules="modules"
        :breakpoints="{
          375: {
            slidesPerView: 1.5,
            noSwiping: true,
            allowSlidePrev: true,
            allowSlideNext: true,
          },

          992: {
            slidesPerView: 1.5,
            noSwiping: true,
            allowSlidePrev: true,
            allowSlideNext: true,
          },
          1024: {
            noSwiping: false,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <CardsNewArrivals :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </AppContainer>
</template>

<script setup>
const items = [
  {
    title: "Study Table set",
    price: 999,
    image: "/images/new/kari-shea-AMyjxxLEHU4-unsplash.jpg",
  },
  {
    title: "Study Table set",
    price: 999,
    image: "/images/new/scopic-ltd-NLlWwR4d3qU-unsplash.jpg",
  },
  {
    title: "Study Table set",
    price: 999,
    image: "/images/new/jake-nackos-9xnnEpX6HAA-unsplash.jpg",
  },
];
</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang=""></style>
