<template lang="">
  <div class="bg-footer pt-20 text-white">
    <AppContainer>
      <div
        class="block lg:flex justify-between items-center border-b border-slate-500 pb-10 lg:pb-20 lg:px-10"
      >
        <div class="font-[200] w-full lg:w-3/6 pr-0 lg:pr-8">
          <div class="text-5xl tracking-wider">
            <p>Get 20% discount on</p>
            <p class="tracking-widest">your first purchase</p>
          </div>

          <p class="text-[15.5px] mt-5">
            Just Sign Up & Register it now to become member of TemplatesJungle.
          </p>
        </div>
        <div class="w-full lg:w-3/6 pl-0 lg:pl-8 mt-4 lg:mt-0">
          <input
            type="text"
            name="price"
            id="price"
            class="block w-full max-w-[576px] min-h-[36px] lg:min-h-[56px] rounded-md border-0 py-1.5 px-5 text-gray-900 outline outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Your email address"
          />
          <button
            type="button"
            class="w-full max-w-[576px] min-h-[38px] lg:min-h-[58px] bg-[#83A9AC] hover:bg-[#A67D1E] rounded-md mt-2"
          >
            Register it now
          </button>
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-1 mt-10 lg:mt-20 pb-10 lg:pb-20"
      >
        <div class="items-center mb-5 lg:mb-0">
          <Logo fontSize="text-5xl" />
        </div>

        <div
          class="mb-5 lg:mb-0"
          v-for="(item, index) in MenuItems"
          :key="index"
        >
          <p class="text-sm">{{ item.name }}</p>

          <div class="mt-5 hidden lg:block">
            <NuxtLink
              to="/"
              class="text-[12px] leading-loose hover:text-[#A67D1E] table"
              v-for="(c, index2) in item.children"
              :key="index2"
            >
              <p>{{ c.name }}</p>
            </NuxtLink>
          </div>
        </div>

        <div class="min-w-[300px]">
          <p class="text-sm">Our newsletter</p>

          <p class="my-5 text-[12px] w-10/12">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>

          <div class="relative bg-red-500 w-[300px]">
            <input
              type="text"
              name="price"
              id="price"
              class="block min-h-[36px] lg:min-h-[42px] w-[300px] border-0 px-1.5 pl-4 pr-[98px] text-gray-900 outline outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Your email address"
            />
            <button
              type="button"
              class="bg-[#83A9AC] hover:bg-[#A67D1E] min-h-[36px] lg:min-h-[42px] absolute top-0 right-0 px-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </AppContainer>

    <div class="border-t border-[#1a1919] py-8">
      <AppContainer>
        <p class="text-xs">© 2024 Classi Furnitures. All rights reserved.</p>
      </AppContainer>
    </div>
  </div>
</template>

<script setup>
const MenuItems = [
  {
    name: "Ouick links",
    children: [
      { name: "Home" },
      { name: "About us" },
      { name: "Offers" },
      { name: "Services" },
      { name: "Contact us" },
    ],
  },
  // {
  //   name: "About",
  //   children: [
  //     { name: "How it work" },
  //     { name: "our package" },
  //     { name: "promotions" },
  //     { name: "refer a friend" },
  //   ],
  // },
  {
    name: "Help Centre",
    children: [
      { name: "Payments" },
      { name: "Shipping" },
      { name: "Product" },
      { name: "returns" },
      { name: "FAQs" },
      { name: "Checkout" },
      { name: "Other Issues" },
    ],
  },
];
</script>

<style lang=""></style>
