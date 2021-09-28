<template>
  <schedule-cell title="Midsummer Courtyard" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_thundering_fury_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Thundering Fury</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_thundersoother_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Thundersoother</q-tooltip>
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
  name: 'ScheduleCellArtifactFuryThundersoother'
})
</script>
