<template>
  <div>
    <schedule-cell centered bgColor = "black" textColor="white" :canDelete="false"> 
      <q-img src="~/assets/resin.png" style="height: 24px; width: 24px"/> 
    </schedule-cell>
    <schedule-cell centered :bgColor = "resin.color" v-for="resin of resinByTens" :canDelete="false" :key="resin"> 
      {{resin.limit}}
    </schedule-cell>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ScheduleCell from './cells/ScheduleCell.vue';
const LIMIT = 180 + 60*2

function determineColor (resin) {
  if (resin > 180 + 60*4) {
    return '#F6412D'
  }

  if (resin > 180 + 60*2) {
    return '#FF9800'
  }

  if (resin > 180) {
    return '#FFEC19'
  }

  return '#D9DDDC'
}

export default defineComponent({
  name: 'ScheduleResinColumn',
  components: { ScheduleCell },
  computed: {
    resinByTens () {
      const resin = []
      for (let i = 10; i <= LIMIT; i+=10) {
        resin.push({ limit: i, color: determineColor(i) })
      }
      return resin
    }
  }
})
</script>
