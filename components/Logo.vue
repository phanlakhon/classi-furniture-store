<template lang="">
  <div class="flex flex-shrink-0 items-center">
    <!-- <img
      class="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
      alt="Your Company"
    /> -->

    <NuxtLink to="/">
      <p :class="`${fontSize} text-2xl text-white font-['Playfair-Display']`">
        Classi.
      </p>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    fontSize: {
      type: String,
      default: "text-2xl",
      required: false,
    },
  },
};
</script>
<style lang=""></style>
