<template>
  <select
    v-model="selected"
    class="form-select mt-10 block w-full mb-5 border p-3 rounded"
    @change="onChange()"
  >
    <option value="0">Select a country</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SelectCountry',
  props: ['countries'],
  setup ({ countries }, { emit }) {
    const selected = ref(0);

    const onChange = () => {
      const country = countries.find((item) => item.ID === selected.value);
      
      emit('get-country', country);
    }

    return {
      selected,
      onChange
    }
  }
}
</script>
