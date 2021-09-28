<template>
  <schedule-cell title="Taishan Mansion" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/weapon_liyue_guyun.png" :class="guyunActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Guyun</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_liyue_elixir.png" :class="elixirActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Elixir</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_liyue_aerosiderite.png" :class="aerosideriteActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Aerosiderite</q-tooltip>
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
    guyunActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    elixirActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    aerosideriteActive () {
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
