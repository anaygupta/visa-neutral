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
        <img class="h-20 rounded-md" :src="pic" alt="" />
        <div class="flex flex-col justify-start">
          <h2>{{ make }} {{ model }}</h2>
          <p>{{ mpg }} mpg</p>
          <p class="text-sm">
            Powered by Avis, a
            <a
              class="underline text-v-blue"
              target="_blank"
              href="https://usa.visa.com/"
              >Visa</a
            >
            Partner
          </p>
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.avis.com/en/home"
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
        >Book this car</a
      >
    </div>
    <div class="space-y-1">
      <p class="font-bold">{{ total_co2 }} g CO2</p>
      <p class="font-bold">$ {{ total_price }}</p>
      <div class="pt-2 space-y-1">
        <p class="text-white bg-v-blue p-2 rounded-lg">
          CO2 Savings: {{ savings }} g CO2
        </p>
        <p class="text-black bg-v-orange p-2 rounded-lg">
          Rewards: {{ rewards }} points
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total_co2: 0,
      total_co22: 0,
      total_price: 0,
      savings: 0,
      rewards: 0,
    }
  },
  mounted() {
    // console.log(typeof.distance)
    const cars = this.$store.state.cars
    for (const car in cars) {
      const temp = cars[car].make + ' ' + cars[car].model
      if (this.make + ' ' + this.model === temp) {
        this.total_co2 = this.distance * parseInt(cars[car].co2)
      }
    }
    this.total_co22 = this.total_co2
    this.total_co2 = this.total_co2
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    this.total_price = this.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    const currentCost = parseInt(this.currentCost.replace(',', ''))
    this.savings = currentCost - this.total_co22
    this.rewards = 0.01 * this.savings
    if (this.rewards < 0) {
      this.rewards = 0
    }
    if (this.savings < 0) {
      this.savings = 0
    }

    this.savings = this.savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // console.log(this.total_co2 - currentCost)
    // console.log('\n')
    // this.savings = parseInt(this.total_co2) - parseInt(currentCost)
  },
  props: {
    make: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
    mpg: {
      type: String,
      default: '',
    },
    pic: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    distance: {
      type: String,
      default: '',
    },
    currentCost: {
      type: String,
      default: '',
    },
  },
}
</script>
