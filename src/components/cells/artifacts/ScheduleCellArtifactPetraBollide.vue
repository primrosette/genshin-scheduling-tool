<template>
  <schedule-cell title="Domain Of Guyun" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_archaic_petra_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Archaic Petra</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_retracting_bollide_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Retracting Bollide</q-tooltip>
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
  name: 'ScheduleCellArtifactsPetraBollide'
})
</script>
