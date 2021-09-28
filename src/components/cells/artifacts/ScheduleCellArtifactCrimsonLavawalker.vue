<template>
  <schedule-cell 
    centered 
    title="Hidden Palace of Zhou Formula"
    bgColor = "#D9DDDC" 
    :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_crimson_witch_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Crimson Witch</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_lavawalker_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Lavawalker</q-tooltip>
      </q-img>
    </div>
  </schedule-cell>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  props: {
    condensed: {
      type: Boolean,
      default: false
    }
  },
  components: { ScheduleCell },
  name: 'ScheduleCellArtifactsCrimsonLavawalker'
})
</script>

