
<template>
  <div class="flex flex-col items-center">
    <div
      class="
        m-4
        p-5
        flex flex-col
        items-center
        w-full
        md:w-5/6
        lg:w-2/4
        bg-white
        shadow-md
        rounded-md
        border-2 border-black border-opacity-10
      "
    >
      <form class="flex flex-col space-y-6">
        <div class="location flex flex-row justify-around space-x-5">
          <div class="origin flex flex-col">
            <label class="ml-1 my-1 font-bold" for="origin">From</label>
            <select
              class="
                p-2
                w-full
                h-full
                border-1 border-silver
                rounded-lg
                outline-none
                focus:border-black
                cursor-pointer
              "
              key=""
              name=""
              id="origin"
            >
              <option value="" selected disabled hidden>Choose Origin</option>
              <option value="Austin, TX">Austin, TX</option>
              <option value="Foster City, CA">Foster City, CA</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="New York, NY">New York, NY</option>
            </select>
          </div>
          <div class="destination flex flex-col">
            <label class="ml-1 my-1 font-bold" for="destination">To</label>
            <select
              class="
                p-2
                w-full
                h-full
                border-1 border-silver
                rounded-lg
                outline-none
                focus:border-black
                cursor-pointer
              "
              key=""
              name=""
              id="destination"
            >
              <option value="" selected disabled hidden>
                Choose Destination
              </option>
              <option value="Austin, TX">Austin, TX</option>
              <option value="Foster City, CA">Foster City, CA</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="New York, NY">New York, NY</option>
            </select>
          </div>
        </div>
        <div class="time flex flex-row space-x-5">
          <div class="pickup flex flex-col w-1/2 space-y-1">
            <label class="font-bold ml-1" for="pickup-date">Pickup Date</label>
            <date-picker v-model="pickupDate" color="blue" is-required="true">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="
                    w-full
                    px-2
                    py-1
                    border-1 border-m-silver
                    rounded-lg
                    outline-none
                    focus:border-m-blue
                  "
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </date-picker>
          </div>
          <div class="dropoff flex flex-col w-1/2 space-y-1">
            <label class="font-bold ml-1" for="dropoff-date"
              >Dropoff Date</label
            >
            <date-picker v-model="dropoffDate" color="blue" is-required="true">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="
                    w-full
                    px-2
                    py-1
                    border-1 border-m-silver
                    rounded-lg
                    outline-none
                    focus:border-m-blue
                  "
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </date-picker>
          </div>
        </div>

        <div class="carType flex flex-row justify-around space-x-5">
          <div class="carSize flex flex-col">
            <label class="ml-1 my-1 font-bold" for="carSize">Car Size</label>
            <select
              class="
                p-2
                w-full
                h-full
                border-1 border-silver
                rounded-lg
                outline-none
                focus:border-black
                cursor-pointer
              "
              key=""
              name=""
              id="carSize"
            >
              <option value="" selected disabled hidden>Choose Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div class="carType flex flex-col">
            <label class="ml-1 my-1 font-bold" for="carType">Car Type</label>
            <select
              class="
                p-2
                w-full
                h-full
                border-1 border-silver
                rounded-lg
                outline-none
                focus:border-black
                cursor-pointer
              "
              key=""
              name=""
              id="carType"
            >
              <option value="" selected disabled hidden>Choose Type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <button
          class="
            self-center
            w-60
            bg-v-blue
            px-4
            py-2
            rounded-xl
            text-white
            hover:opacity-80
            focus:outline-none
            shadow-xl
          "
        >
          Optimize My Trip
        </button>
      </form>
    </div>
    <div
      class="
        results-container
        w-full
        md:w-5/6
        lg:w-2/4
        h-96
        overflow-y-auto
        space-y-3
        p-3
      "
    >
      <Car></Car>
      <Car></Car>
      <Car></Car>
      <Car></Car>
      <Car></Car>
      <Car></Car>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: ' | Home',
      meta: [
        {
          name: 'description',
          content: 'this is where description goes',
          hid: 'description',
        },
      ],
    }
  },
  data() {
    return {
      pickupDate: '08/17/2021',
      dropoffDate: '08/24/2021',
    }
  },
}
</script>
