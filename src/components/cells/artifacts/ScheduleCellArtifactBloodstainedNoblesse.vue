<template>
  <schedule-cell title="Momiji-Dyed Court" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_bloodstained_chivalry_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Bloodstained Chivalry</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_noblesse_oblige_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Noblesse Oblige</q-tooltip>
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
  name: 'ScheduleCellArtifactBloodstainedNoblesse'
})
</script>
