<template>
  <schedule-cell title="Court of Flowing Sand" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/weapon_inazuma_branch.png" :class="branchActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Branch</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_inazuma_narukami.png" :class="narukamiActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Narukami</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_inazuma_mask.png" :class="maskActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Mask</q-tooltip>
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
    },
    doubleDrops: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    branchActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    narukamiActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    maskActive () {
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
