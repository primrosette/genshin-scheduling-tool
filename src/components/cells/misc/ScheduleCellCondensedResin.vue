<template>
  <schedule-cell title="Condensed Resin" centered bgColor = "#D9DDDC" :size="4">
    <q-img src="~/assets/condensed_resin.png" style="height: 24px; width: 24px"/>
  </schedule-cell>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  components: { ScheduleCell },
  name: 'ScheduleCellBlueLeyline'
})
</script>
