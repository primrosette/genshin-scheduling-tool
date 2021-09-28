<template>
  <schedule-cell title="Hidden Palace of Lianshan Formula" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/talents_liyue_prosperity.png" :class="prosperityActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Prosperity</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_liyue_diligence.png" :class="diligenceActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Diligence</q-tooltip>
      </q-img>
      <q-img src="~/assets/talents_liyue_gold.png" :class="goldActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Gold</q-tooltip>
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
    prosperityActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    diligenceActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    goldActive () {
      return this.isWednesday || this.isSaturday || this.isSunday
    }
  },
  components: { ScheduleCell },
  name: 'ScheduleCellTalentsLiyue'
})
</script>

<style scoped>
  .active {
    opacity: 1.0 !important;
  }
</style>
