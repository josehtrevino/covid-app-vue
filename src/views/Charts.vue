<template>
  <main>
    <h2 class="text-center text-2xl font-bold mt-3">Coming soon...</h2>
    <line-chart />
    <router-link 
      to="/"
      class="mx-auto bg-blue-700 text-white rounded p-3 mt-3 focus:outline-none hover:bg-blue-400"
    >
      Go Back
    </router-link>
  </main>
</template>

<script>
//import moment from 'moment';
import LineChart from "@/components/LineChart";

export default {
  name: 'Charts',
  components: {
    LineChart
  },
  props: ['country', 'status'],
  setup () {
    /* const dayOne = ref([]);
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false
    }
   
    const fetchData = async () => {
      const response = await fetch(`https://api.covid19api.com/dayone/country/${country}/status/${status}`);
      const data = await response.json();

      dayOne.value = data.map(item => {
        const date = moment(item.Date, "YYYYMMDD").format("MM/DD");
        return {
          date,
          cases: item.Cases
        }
      });
    }

    fetchData();
 */
    return {
     /*  dayOne,
      chartOptions */
    }
  }
}
</script>
