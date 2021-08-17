<template>
  <div>
    <div class="flex flex-col">
      <h1 class="font-bold mt-3 ml-3 p-0">
        <span class="text-v-blue">Visa</span>
        <span class="text-v-orange">Neutral</span>
      </h1>
      <p class="text-gray-400 ml-3 p-0">Environmentally optimize your trips</p>
    </div>
    <nav class="mt-3">
      <ul
        class="
          flex flex-row
          mx-auto
          px-3
          justify-between
          w-full
          md:w-5/6
          lg:w-2/4
        "
      >
        <li>
          <nuxt-link
            class="px-3 py-2 text-xl text-gray-300 pointer-events-none"
            to="/flights"
            >Flights</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="px-3 py-2 text-xl hover:bg-gray-100 rounded-lg"
            to="/"
            >Cars</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="px-3 py-2 text-xl text-gray-300 pointer-events-none"
            to="/hotels"
            >Hotels</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nuxt-link-exact-active {
  color: #1a2adf;
  font-weight: bold;
}
</style>
