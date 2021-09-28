<template>
  <schedule-cell title="Forsaken Rift" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/talents_mondstadt_freedom.png" :class="freedomActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Freedom</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_mondstadt_resistance.png" :class="resistanceActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Resistance</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_mondstadt_ballad.png" :class="balladActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Ballad</q-tooltip>
      </q-img>
    </div>
  </schedule-cell>
</template>


<script>
import DaysMixin from '../../$_genshin_days_mixin'
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  mixins: [ DaysMixin ],
  props: {
    condensed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    freedomActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    resistanceActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    balladActive () {
      return this.isWednesday || this.isSaturday || this.isSunday
    }
  },
  components: { ScheduleCell },
  name: 'ScheduleCellTalentsMondstadt'
})
</script>

<style scoped>
  .active {
    opacity: 1.0 !important;
  }
</style>
