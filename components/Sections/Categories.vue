<template lang="">
  <div class="my-20">
    <AppContainer>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 xl:gap-10">
        <nuxtLink
          to="/"
          v-for="(item, index) in items"
          :key="index"
          :class="`group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-[560px] ${item.colSpan}`"
        >
          <img
            :src="item.image"
            loading="lazy"
            :alt="item.desc"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          />

          <span
            class="relative ml-2 md:ml-10 mb-4 md:mb-10 inline-block text-sm text-white md:text-lg uppercase tracking-wide"
          >
            {{ item.title }}
          </span>
        </nuxtLink>
      </div>

      <div class="mt-20 text-center">
        <p class="w-full md:w-8/12 lg:w-5/12 m-auto">
          Our lives happen around our furniture. Every day, our bed frames,
          dining tables, dressers, and coffee tables support us, often without
          thanks and appreciation.
        </p>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
const items = [
  {
    title: "Living room",
    desc: "",
    image: "/images/categories/katja-rooke-77JACslA8G0-unsplash.jpg",
    colSpan: "md:col-span-4",
  },
  {
    title: "Bedroom",
    desc: "",
    image: "/images/categories/kam-idris-_HqHX3LBN18-unsplash.jpg",
    colSpan: "md:col-span-2",
  },
  {
    title: "Kitchen",
    desc: "",
    image: "/images/categories/kam-idris-hYb7kbu4x7E-unsplash.jpg",
    colSpan: "md:col-span-3",
  },
  {
    title: "Offices",
    desc: "",
    image: "/images/categories/ellephant-3CAiUdt1RFs-unsplash.jpg",
    colSpan: "md:col-span-3",
  },
];
</script>

<style lang=""></style>
