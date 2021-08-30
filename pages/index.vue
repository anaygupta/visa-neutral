
<template>
  <div class="flex flex-col items-center">
    <div
      class="
        m-2
        p-3
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
      <form class="flex flex-col space-y-3 w-full">
        <div class="location flex flex-row w-full space-x-5">
          <div class="origin flex flex-col w-1/2">
            <label class="ml-1 my-1 font-bold" for="origin">From</label>
            <select
              v-model="origin"
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
              required
            >
              <option value="" selected disabled hidden>Choose Origin</option>
              <option value="AUS">Austin, TX</option>
              <option value="BOS">Boston, MA</option>
              <option value="SFO">San Francisco, CA</option>
              <option value="SAN">San Diego, CA</option>
              <option value="PHX">Phoenix, AZ</option>
              <option value="LAX">Los Angeles, CA</option>
              <option value="JFK">New York, NY</option>
            </select>
          </div>
          <div class="destination flex flex-col w-1/2">
            <label class="ml-1 my-1 font-bold" for="destination">To</label>
            <select
              v-model="destination"
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
              required
            >
              <option value="" selected disabled hidden>
                Choose Destination
              </option>
              <option value="AUS">Austin, TX</option>
              <option value="BOS">Boston, MA</option>
              <option value="SFO">San Francisco, CA</option>
              <option value="SAN">San Diego, CA</option>
              <option value="PHX">Phoenix, AZ</option>
              <option value="LAX">Los Angeles, CA</option>
              <option value="JFK">New York, NY</option>
            </select>
          </div>
        </div>
        <div class="time flex flex-row w-full space-x-5">
          <div class="pickup flex flex-col w-1/2 space-y-1">
            <label class="font-bold ml-1" for="pickup-date">Pickup Date</label>
            <date-picker v-model="pickupDate" color="blue" is-required="true">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  required
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
                  required
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

        <div class="carType flex flex-row w-full space-x-5">
          <div class="carMake flex flex-col w-1/2">
            <label class="ml-1 my-1 font-bold" for="carMake"
              >Current Car Make</label
            >
            <select
              v-model="currentMake"
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
              id="carMake"
              required
            >
              <option value="" selected disabled hidden>Choose Make</option>
              <option v-for="make in makes" :key="make.index" :value="make">
                {{ make }}
              </option>
            </select>
          </div>
          <div class="carModel flex flex-col w-1/2">
            <label class="ml-1 my-1 font-bold" for="carModel"
              >Current Car Model</label
            >
            <select
              v-model="currentModel"
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
              id="carModel"
              required
            >
              <option value="" selected disabled hidden>Choose Model</option>
              <option v-for="car in cars" :key="car.index" :value="car.model">
                {{ car.model }}
              </option>
            </select>
          </div>
        </div>
        <button
          type="button"
          @click="callCarAPI"
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
        <button
          type="button"
          @click="clearResults()"
          class="
            self-center
            w-40
            border-2 border-red-200
            px-4
            rounded-xl
            text-red-200
            hover:bg-red-200
            hover:text-white
            focus:outline-none
          "
        >
          Clear Results
        </button>
      </form>
    </div>
    <div class="current-cost-container w-full md:w-5/6 lg:w-2/4">
      <div
        v-if="showCurrentCost === 'betterOption'"
        class="
          flex flex-row
          justify-between
          items-center
          bg-white
          shadow-md
          rounded-md
          border-2 border-black border-opacity-10
          p-5
        "
      >
        <div class="flex flex-col space-y-1">
          <h2>Your {{ currentMake }} {{ currentModel }}</h2>
          <p>Trip from {{ origin }} to {{ destination }}: {{ distance }} mi</p>
        </div>
        <div class="text-lg bg-red-500 text-white text-center p-2 rounded-md">
          {{ current_total_co2 }} g CO2
        </div>
      </div>
      <!-- <div v-else-if="showCurrentCost === 'bestOption'">
        <h2>You have the best car for your trip</h2>
      </div> -->
    </div>
    <div
      class="
        results-container
        border-2 border-v-blue border-opacity-50
        rounded-md
        shadow-md
        w-full
        md:w-5/6
        lg:w-2/4
        h-sm
        overflow-y-auto
        space-y-3
        p-3
        mt-3
      "
      v-if="availableVehicles"
    >
      <div v-for="vehicle in vehicles" :key="vehicle.index">
        <Car
          :make="vehicle['category']['make']"
          :model="vehicle['category']['model']"
          :mpg="vehicle['category']['mpg']"
          :pic="vehicle['category']['image_url']"
          :price="vehicle['rate_totals']['pay_later']['reservation_total']"
          :distance="distance"
          :currentCost="current_total_co2.toString()"
        ></Car>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
      origin: '',
      destination: '',
      pickupDate: '08/27/2021',
      dropoffDate: '09/10/2021',
      showCurrentCost: '',
      availableVehicles: false,
      vehicles: {},
      distance: 0,
      makes: [],
      cars: [],
      currentMake: '',
      currentModel: '',
      current_co2_rate: '',
      current_total_co2: '',
    }
  },
  mounted() {
    this.cars = this.$store.state.cars
    const cars = this.$store.state.cars
    for (const car in cars) {
      this.makes.push(cars[car].make)
    }
    this.makes = [...new Set(this.makes)]
  },
  methods: {
    clearResults() {
      this.currentMake = ''
      this.currentModel = ''
      this.availableVehicles = false
      this.pickupDate = '08/27/2021'
      this.dropoffDate = '09/10/2021'
      this.showCurrentCost = ''
      this.origin = ''
      this.destination = ''
    },
    // formatDates() {
    //   let date1 = this.pickupDate
    //   date1 = date1.split('/')
    //   let date2 = this.dropoffDate
    //   date2 = date2.split('/')

    //   this.pickupDate = date1[2] + '-' + date1[0] + '-' + date1[1] + 'T00:00:00'
    //   this.dropoffDate =
    //     date2[2] + '-' + date2[0] + '-' + date2[1] + 'T00:00:00'
    // },
    callCarAPI() {
      const distances = this.$store.state.distances
      for (const distance in distances) {
        // console.log(distance)
        if (this.origin + '-' + this.destination === distance) {
          this.distance = distances[distance]
        } else if (this.destination + '-' + this.origin === distance) {
          this.distance = distances[distance]
        }
      }
      const cars = this.$store.state.cars
      //   console.log(this.currentMake + this.currentModel)
      for (const car in cars) {
        if (
          cars[car].make + cars[car].model ===
          this.currentMake + this.currentModel
        ) {
          this.current_co2_rate = cars[car].co2
        }
      }

      this.current_total_co2 = this.distance * parseInt(this.current_co2_rate)
      this.current_total_co2 = this.current_total_co2
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      this.pickupDate = moment(this.pickupDate).format('YYYY-MM-DD')
      this.dropoffDate = moment(this.dropoffDate).format('YYYY-MM-DD')
      this.pickupDate += 'T00:00:00'
      this.dropoffDate += 'T00:00:00'
      //   console.log(this.dropoffDate)
      //   this.formatDates()
      //   console.log(this.pickupDate)
      //   console.log(this.dropoffDate)

      try {
        this.$axios
          .$get(
            // 'https://stage.abgapiservices.com/cars/catalog/v1/vehicles?brand=Avis&pickup_date=2021-08-27T00:00:00&pickup_location=BOS&country_code=US&dropoff_date=2021-09-10T00:00:00&dropoff_location=JFK',
            'https://stage.abgapiservices.com/cars/catalog/v1/vehicles',
            // 'https://stage.abgapiservices.com/cars/catalog/v1/vehicles?brand=Avis&pickup_date=2021-10-30T00:00:00&pickup_location=EWR&country_code=US&dropoff_date=2021-10-31T00:00:00&dropoff_location=EWR',
            {
              headers: {
                client_id: 'c12f6065',
                Authorization:
                  'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwem5vRHdsYlNUcmFwM2FTQzdSUUl3anpzb2NJWGlaTUQ2cUxBakh5X0NVIn0.eyJqdGkiOiI4MTBiOTRjOS01M2RjLTQzZDQtYTQ1OC04MzA3NjBiMzNhZDUiLCJleHAiOjE2Mjk4NTIwNjgsIm5iZiI6MCwiaWF0IjoxNjI5ODQ0OTI4LCJpc3MiOiJodHRwczovL3Nzby1zc28uYXBwcy5hcGktbnAuYWJnYXBpc2VydmljZXMuY29tL2F1dGgvcmVhbG1zLzNzY2FsZS1zdGFnaW5nLWFwaS1vaWRjIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImQ4YjYzZDQ3LWU0NzAtNGQxMC05YjAwLWQxNzg4NDgwNGU3MiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImMxMmY2MDY1IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiODZlNDI5ZWMtOTViYi00NDZhLTg4N2ItZGVhZDI0Yzc4MmMxIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxOC4yMjUuMTIuMjE2IiwiY2xpZW50SWQiOiJjMTJmNjA2NSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWMxMmY2MDY1IiwiY2xpZW50QWRkcmVzcyI6IjE4LjIyNS4xMi4yMTYifQ.d0tnFWvFgt-nNw4YAeYw61BEVmFh8l_0UWogcMAsBQN4djq6T7czDqFSEtIzNqI7zUlBSHTS2jyk0pW--vaNZcwkX9hrzoiM3gqFrHkeC_3g3cU-iHdGUgIBSFFL8h9J34zuygqatvBXYaxb6tFmZs7nEAEmMyIopv2xFRs9WL0ku5QQpuHJk0F0BoSd8aqhVtIFbhv9vavMoXdnKjZ3m-BPlDcQbOLbtqR5sPNxRDHOioveJk5zPi5DW5g7Ikji8wDArnZx-qNQdVLpPQheCmPLOboZMn-VXvFdt-aZo4WFYbzpFZw-93XJGZpiEc0cnpmN918b59CGRQL3OyHisQ',
              },
              params: {
                brand: 'Avis',
                pickup_date: this.pickupDate,
                pickup_location: this.origin,
                country_code: 'US',
                dropoff_date: this.dropoffDate,
                dropoff_location: this.destination,
              },
            }
          )
          .then((response) => {
            this.vehicles = response.vehicles
            console.log(this.vehicles)
            if (this.vehicles.length > 0) {
              this.showCurrentCost = 'betterOption'
              this.availableVehicles = true
            } else {
              this.showCurrentCost = 'bestOption'
            }
            console.log(this.vehicles[0].category)
          })
      } catch (error) {
        console.log(error)
      }

      //     const options = {
      //       hostname: 'stage.abgapiservices.com:443/cars/catalog/v1',
      //       port: 443,
      //       path: '/vehicles',
      //       method: 'GET',
      //       headers: {
      //         client_id: 'c12f6065',
      //         Authorization:
      //           'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwem5vRHdsYlNUcmFwM2FTQzdSUUl3anpzb2NJWGlaTUQ2cUxBakh5X0NVIn0.eyJqdGkiOiJiMWVkMjUzMC1jMGViLTRjYmItYWE1Mi04ODMyNjc5MWFkMzkiLCJleHAiOjE2MzAzNjIzNjIsIm5iZiI6MCwiaWF0IjoxNjMwMzU1MjIyLCJpc3MiOiJodHRwczovL3Nzby1zc28uYXBwcy5hcGktbnAuYWJnYXBpc2VydmljZXMuY29tL2F1dGgvcmVhbG1zLzNzY2FsZS1zdGFnaW5nLWFwaS1vaWRjIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImQ4YjYzZDQ3LWU0NzAtNGQxMC05YjAwLWQxNzg4NDgwNGU3MiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImMxMmY2MDY1IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiZmY0YTU0ZmUtMTQ3Ni00ZTNjLWFlMjQtMTE4YTNlYWMzOWE2IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxOC4yMjUuMTIuMjE2IiwiY2xpZW50SWQiOiJjMTJmNjA2NSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWMxMmY2MDY1IiwiY2xpZW50QWRkcmVzcyI6IjE4LjIyNS4xMi4yMTYifQ.PZASjy8e-UONMe1akSnAfBcz8j0aRaSctCQ6368w6B5TLBIB5HK58HkZ5hb2NAPDbCuhudhqt7EE1zPUd5L849RUHMsu63g_Hy460vK1k-oDC7qGl_AcKA4arYdhWi7rfZ_CsnroMqMf8p5T0rfUZIXEpLZfhEK1jokw5Ci1Y_9M0HVjDx9jKlsffMyBC9-dzc91WN4XfkdNYqg1J635vbWTt2M7cj0io9ZKWBpuvqMoOVq5uGvDIkVndxwHAxZ259slzT8bR1enXiToMMap1F50PBMNsz89vlOa8jRq79t-CtBU62rPS7O6nCBS8Ywb26VquDN_0-WJ_vlMiQan1A',
      //       },

      //       params: {
      //         brand: 'AVIS',
      //         pickup_date: '2021-12-30T00:00:00',
      //         pickup_location: 'EWR',
      //         country_code: 'US',
      //         dropoff_date: '2021-12-30T00:00:00',
      //         dropoff_location: 'EWR',
      //       },
      //     }

      //     // var propertiesObject = { brand:'AVIS',

      //     // pickup_date:'2021-12-30T00:00:00',

      //     // pickup_location:'EWR',

      //     // country_code:'US',

      //     // dropoff_date:'2021-12-30T00:00:00',

      //     // dropoff_location:'EWR',

      //     // };

      //     const req = https.request(options, (res) => {
      //       console.log(`statusCode: ${res.statusCode}`)

      //       res.on('data', (d) => {
      //         console.log(d)

      //         // process.stdout.write(d)
      //       })
      //     })

      //     req.on('error', (error) => {
      //       console.error(error)
      //     })

      //     req.end()
    },
  },
}
</script>
