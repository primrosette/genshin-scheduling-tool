<template>
  <schedule-cell title="Gold Leyline" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <q-img src="~/assets/mora.png" style="height: 24px; width: 24px"/>
  </schedule-cell>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  props: {
    condensed: Boolean,
    doubleDrops: Boolean
  },
  components: { ScheduleCell },
  name: 'ScheduleCellGoldLeyline'
})
</script>
