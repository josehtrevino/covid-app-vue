<template>
  <div class="grid md:grid-cols-2 gap-4">

    <div class="shadow-md bg-green-200 p-10 text-center rounded">
      <h3 class="text-3xl text-green-900 font-bold mb-4">Cases</h3>

      <div class="text-2xl text-green-900 mb-4">
        <span class="font-bold">New:</span>
        {{ numberWithCommas(stats.NewConfirmed) }}
      </div>
      <div class="text-2xl text-green-900 mb-4">
        <span class="font-bold">Total:</span>
        {{ numberWithCommas(stats.TotalConfirmed) }}
      </div>
    </div>

    <div class="shadow-md bg-red-200 p-10 text-center rounded">
      <h3 class="text-3xl text-red-900 font-bold mb-4">Deaths</h3>

      <div class="text-2xl text-red-900 mb-4">
        <span class="font-bold">New:</span>
        {{ numberWithCommas(stats.NewDeaths) }}
      </div>
      <div class="text-2xl text-red-900 mb-4">
        <span class="font-bold">Total:</span>
        {{ numberWithCommas(stats.TotalDeaths) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boxes',
  props: ['stats'],
  setup () {
    const numberWithCommas = (num) => num.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return {
      numberWithCommas
    }
  }
}
</script>

<style lang="scss" scoped>

</style>