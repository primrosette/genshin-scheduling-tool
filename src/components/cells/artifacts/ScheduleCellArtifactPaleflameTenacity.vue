<template>
  <schedule-cell title="Valley Of Remembrance" centered bgColor="#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/artifact_pale_flame_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Pale Flame</q-tooltip>
      </q-img>
      <q-img src="~/assets/artifact_tenacity_of_the_millelith_flower.png" style="height: 24px; width: 24px">
        <q-tooltip>Tenacity of the Millelith</q-tooltip>
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
  name: 'ScheduleCellArtifactPaleflameTenacity'
})
</script>
