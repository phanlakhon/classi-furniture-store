<template lang="">
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="false"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="w-full h-lvh">
        <img
          class="w-full h-full object-cover"
          src="/images/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg"
          alt="Your Company"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full h-lvh">
        <img
          class="w-full h-full object-cover"
          src="/images/inside-weather-OzqieLcs464-unsplash.jpg"
          alt="Your Company"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Pagination],
    };
  },
};
</script>
