<template>
  <schedule-cell title="Peak of Vindagnyr" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_blizzard_strayer_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Blizzard Strayer</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_heart_of_depth_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Heart of Depth</q-tooltip>
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
  name: 'ScheduleCellArtifactBlizzardDepth'
})
</script>
