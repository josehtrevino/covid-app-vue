<template>
  <div class="text-center">
    <h2 class="text-3xl text-blue-900 font-bold">{{ text }}</h2>
    <div  class="text-2xl text-blue-900 mt-4 mb-10">
      {{ timestamp }}
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import { computed } from 'vue';

export default {
  name: 'Title',
  props: ['text', 'date'],
  setup ({date}) {
    

    return {
      timestamp: computed(() => moment(date)
        .format('MMMM Do YYYY, h:mm:ss a'))
    }
  }
}
</script>

