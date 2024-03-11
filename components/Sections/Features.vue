<template lang="">
  <AppContainer>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-20 lg:px-10">
      <nuxtLink
          to="/"
          v-for="(item, index) in features"
          :key="index"
          class="relative top-0 hover:top-[-1rem] hover:border-b cursor-pointer pb-8"
        >
   
        <Icon :icon="item.icon" class="text-2xl mb-5" />
        <p class="text-sm font-semibold mb-2">{{ item.title }}</p>
        <p class="text-xs leading-5 line-clamp-2">{{ item.desc }}</p>
      </nuxtLink>
    </div>
  </AppContainer>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const features = [
  {
    title: "Free Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
    icon: "ion:cart-outline",
  },
  {
    title: "100% secure payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
    icon: "heroicons:shield-check",
  },
  {
    title: "Quality guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
    icon: "solar:medal-ribbons-star-outline",
  },
  {
    title: "Guaranteed savings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
    icon: "formkit:usdc",
  },
  {
    title: "Daily offers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
    icon: "carbon:tag",
  },
];
</script>

<style lang=""></style>
