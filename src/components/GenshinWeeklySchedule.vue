<template>
  <div v-if="weeklySchedule" class="row">
    <resin-column class="col"></resin-column>
    <weekday-column  
      class="col"
      v-for="day in DAYS_OF_WEEK"
      :key="day.value"
      :scheduleId="weeklySchedule.id"
      :day="day.name"
      :dailySchedule="weeklySchedule[day.value]">
    </weekday-column>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import WeekdayColumn from './GenshinWeeklyScheduleWeekdayColumn.vue';
import ResinColumn from './GenshinWeeklyScheduleResinColumn.vue';
import GenshinDaysMixin from './$_genshin_days_mixin';

export default defineComponent({
  mixins: [GenshinDaysMixin],
  props: ['weeklySchedule'],
  components: { WeekdayColumn, ResinColumn },
  name: 'PageIndex'
})
</script>
