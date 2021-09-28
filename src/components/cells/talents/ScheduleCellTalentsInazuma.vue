<template>
  <schedule-cell title="Violet Court" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/talents_inazuma_transience.png" :class="transienceActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Transience</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_inazuma_elegance.png" :class="eleganceActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Elegance</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_inazuma_light.png" :class="lightActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Light</q-tooltip>
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
    transienceActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    eleganceActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    lightActive () {
      return this.isWednesday || this.isSaturday || this.isSunday
    }
  },
  components: { ScheduleCell },
  name: 'ScheduleCellTalentsInazuma'
})
</script>

<style scoped>
  .active {
    opacity: 1.0 !important;
  }
</style>
