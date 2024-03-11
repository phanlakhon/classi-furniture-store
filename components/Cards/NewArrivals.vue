<template lang="">
  <nuxtLink to="/">
    <div
      class="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-[380px] lg:h-[480px]"
    >
      <img
        :src="item.image"
        loading="lazy"
        :alt="item.title"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
      />
    </div>

    <div class="flex justify-between items-center mt-8 text-sm">
      <p class="text-gray-700 font-medium">{{ item.title }}</p>
      <p class="text-gray-500">
        $
        {{ parseFloat(item.price).toFixed(2) }}
      </p>
    </div>
  </nuxtLink>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang=""></style>
