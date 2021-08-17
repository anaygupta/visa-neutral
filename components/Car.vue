<template>
  <div
    class="
      flex flex-row
      justify-between
      w-full
      bg-white
      shadow-md
      rounded-md
      border-2 border-black border-opacity-10
      p-5
    "
  >
    <div class="flex flex-col justify-between">
      <div class="flex flex-row space-x-3 items-start">
        <div class="w-20 h-20 bg-black rounded-lg"></div>
        <h2>Honda Accord</h2>
      </div>
      <button
        class="
          text-white
          bg-green-500
          w-40
          text-center
          p-2
          rounded-lg
          shadow-lg
          hover:opacity-80
          focus:outline-none
        "
      >
        Book this car
      </button>
    </div>
    <div class="space-y-1">
      <p class="font-bold">$60 per day</p>
      <p class="font-bold">179 g/km CO2</p>
      <div class="pt-2 space-y-1">
        <p class="text-white bg-v-blue p-2 rounded-lg">CO2 Savings: 20 g/km</p>
        <p class="text-black bg-v-orange p-2 rounded-lg">Rewards: 20 points</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
