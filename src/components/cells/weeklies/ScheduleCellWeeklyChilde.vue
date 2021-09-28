<template>
  <schedule-cell title="Childe" centered bgColor="#D9DDDC" :size="halved?3:6">
    <q-img src="~/assets/weekly_childe.png" style="height: 24px; width: 24px"/>
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
  name: 'ScheduleCellWeeklyChilde'
})
</script>
