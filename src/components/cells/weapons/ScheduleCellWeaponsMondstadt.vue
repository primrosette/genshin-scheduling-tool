<template>
  <schedule-cell title="Cecilia Garden" centered bgColor = "#D9DDDC" :size="condensed?4:2">
    <div>
      <q-img src="~/assets/weapon_mondstadt_decarabian.png" :class="decarabianActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Decarabian</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_mondstadt_boreal.png" :class="borealActive?'active':''" style="height: 24px; width: 24px; opacity:0.4">
        <q-tooltip>Boreal</q-tooltip>
      </q-img>
      <q-img src="~/assets/weapon_mondstadt_gladiator.png" :class="gladiatorActive?'active':''" style="height: 24px; width: 24px; opacity:0.4;">
        <q-tooltip>Dandelion Gladiator</q-tooltip>
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
    decarabianActive () {
      return this.isMonday || this.isThursday || this.isSunday
    },
    borealActive () {
      return this.isTuesday || this.isFriday || this.isSunday
    },
    gladiatorActive () {
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
