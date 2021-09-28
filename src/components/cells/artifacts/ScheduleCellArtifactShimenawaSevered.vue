<template>
  <schedule-cell title="Momiji-Dyed Court" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_shimenawas_reminiscence_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Shimenawa's Reminiscence</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_emblem_of_severed_fate_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Emblem of Severed Fate</q-tooltip>
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
  name: 'ScheduleCellArtifactShimenawaSevered'
})
</script>
