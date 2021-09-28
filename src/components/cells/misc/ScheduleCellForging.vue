<template>
  <schedule-cell centered bgColor = "#D9DDDC">
    <q-img src="~/assets/magic_crystal_chunk.png" style="height: 24px; width: 24px;"/>
  </schedule-cell>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  components: { ScheduleCell },
  name: 'ScheduleCellForging'
})
</script>
