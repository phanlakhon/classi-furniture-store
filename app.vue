<script setup lang="ts">
const route = useRoute();

useHead({
  title: `CFS - ${route.meta.title}`,
  meta: [{ name: "description", content: `App Name - ${route.meta.title}` }],
  bodyAttrs: {
    class: "test",
  },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
