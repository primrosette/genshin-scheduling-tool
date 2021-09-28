<template>
  <schedule-cell title="Valley of Remembrance" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_viridiscent_venerer_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Viridiscent Venerer</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_maiden_beloved_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Maiden Beloved</q-tooltip>
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
  name: 'ScheduleCellArtifactViridiscentMaiden'
})
</script>
