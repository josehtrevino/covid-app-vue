<template>
  <div>
    <h2>{{ country }} {{ status }}</h2>
  </div>
</template>

<script>
export default {
  props: ['country', 'status'],
  setup () {
    //const url = 'https://api.covid19api.com/dayone/country/south-africa/status/confirmed';

    return {}
  }
}
</script>
