<template>
  <main v-if="!loading">
    <SelectCountry :countries="countries" @get-country="getCountryData" />

    <Title :date="date" :text="title" />

    <Boxes :stats="stats" />

    <button
      v-if="stats.Country"
      class="block mx-auto bg-blue-500 text-white rounded p-3 mt-10 focus:outline-none hover:bg-blue-600"
      @click="clearInfo"
    >
      Clear Info
    </button>
  </main>

  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Loading...
    </div>
    <img :src="require('../assets/hourglass.gif')" alt="" class="w-24 m-auto" />
  </main>
</template>

<script>
import SelectCountry from '@/components/SelectCountry';
import Title from '@/components/Title';
import Boxes from '@/components/Boxes';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    Title,
    Boxes,
    SelectCountry
  },
  setup(){

    const loading = ref(true);
    const title = ref('Global');
    const date = ref('');
    const stats = ref({});
    const countries = ref([]);

    const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary');
      return await res.json();
    };

    const getCountryData = (country) => {
      stats.value = country;
      title.value = country.Country;
    };

    const clearInfo = async () => {
      loading.value = true;
      const data = await fetchCovidData();
      title.value = 'Global';
      stats.value = data.Global;
      loading.value = false;
    };

    const init = async () => {
      const data = await fetchCovidData();
      date.value = data.Date;
      stats.value = data.Global;
      countries.value = data.Countries;
      loading.value = false;
    };

    init();

    return {
      loading,
      title,
      date,
      stats,
      countries,
      getCountryData,
      clearInfo
    };
  }
  
}
</script>
