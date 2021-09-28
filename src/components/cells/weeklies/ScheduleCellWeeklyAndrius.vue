<template>
  <schedule-cell title="Andrius" centered bgColor = "#D9DDDC" :size="halved?3:6">
    <q-img src="~/assets/weekly_andrius.png" style="height: 24px; width: 24px"/>
  </schedule-cell>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  props: {
    halved: {
      type: Boolean,
      default: false
    }
  },
  components: { ScheduleCell },
  name: 'ScheduleCellWeeklyAndrius'
})
</script>
