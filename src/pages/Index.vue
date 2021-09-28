<template>
  <q-page>
    <div class = "q-mx-lg">
      <h6 class = "q-my-lg"> Schedules </h6>
      <div>
        <input v-model="newScheduleID" placeholder="New Schedule ID">
        <button class="add-btn genshin-btn text-center q-px-md q-ml-sm bg-green text-white text-bold" @click="createNewSchedule()">Create New Schedule</button>
        <select class="q-ml-sm" v-model="selectedScheduleID">
          <option :value="null" disabled selected> Select an schedule </option>
          <option v-for="key in scheduleKeys" :key="key"> {{ key }} </option>
        </select>
      </div>
      <genshin-weekly-schedule :weeklySchedule="this.schedules[selectedScheduleID]"></genshin-weekly-schedule>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex'
import GenshinWeeklySchedule from 'src/components/GenshinWeeklySchedule.vue';

export default defineComponent({
  components: { GenshinWeeklySchedule },
  name: 'PageIndex',
  data () {
    return {
      newScheduleID: null,
      selectedScheduleID: null
    }
  },
  computed: {
    ...mapGetters(['schedules']),
    scheduleKeys () {
      return Object.keys(this.schedules)
    }
  },
  methods: {
    ...mapMutations(['createNewWeeklySchedule']),
    createNewSchedule () {
      if (!this.newScheduleID) {
        alert("Empty schedule ID")
        return
      }

      this.createNewWeeklySchedule({ scheduleId: this.newScheduleID })
      this.selectedScheduleID = this.newScheduleID
      this.newScheduleID = null
    }
  }
})
</script>