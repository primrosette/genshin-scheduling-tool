<template>
  <schedule-cell centered :canDelete="false" :size="1">
    <button class="add-btn genshin-btn full-width text-center" @click="openedDialog = !openedDialog">
      <span> ADD NEW TASK </span>
      <q-icon size="20px" name="add"/>
    </button>
  </schedule-cell>
  <q-dialog v-model="openedDialog">
    <q-card style="min-width: 500px bg-black text-white">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-bold">    
          <q-img src="~/assets/resin.png" style="height: 24px; width: 24px"/> 
          ADD NEW RESIN TASK
        </div>
      </q-card-section>

      <q-card-section class="q-pa-sm column">
        <div class="input column">
          <label> Type </label>
          <select v-model="formData.type">
            <option :value="null" disabled selected> Select an action </option>
            <option v-for="typeChoice in formChoices.type" :key="typeChoice.value" :value="typeChoice.value"> {{typeChoice.label}} </option>
          </select>
        </div>
        <div v-if="formData.type && formChoices.domains[formData.type]" class="input column">
          <label> Domain </label>
          <select v-model="formData.domain">
            <option :value="null" disabled selected> Select a domain </option>
            <option v-for="domainChoice in formChoices.domains[formData.type]" :key="domainChoice.value" :value="domainChoice.value"> {{domainChoice.label}} </option>
          </select>
        </div>
        <div v-if="canUseCondensed" class="input row items-center">
          <input v-model="formData.usedCondensed" class="q-mr-sm" type="checkbox">
          <span> Condensed</span>
        </div>
        <div v-if="isBoss" class="input column">
          <label> Boss </label>
          <select v-model="formData.boss">
            <option :value="null" disabled selected> Select a boss </option>
            <option v-for="bossChoice in formChoices.bosses" :key="bossChoice.value" :value="bossChoice.value"> {{bossChoice.label}} </option>
          </select>
        </div>
        <div v-if="isWeekly" class="input column">
          <label> Weekly </label>
          <select v-model="formData.weeklyBoss">
            <option :value="null" disabled selected> Select a boss </option>
            <option v-for="weeklyBossChoice in formChoices.weeklies" :key="weeklyBossChoice.value" :value="weeklyBossChoice.value"> {{weeklyBossChoice.label}} </option>
          </select>
        </div>
        <div v-if="isWeekly" class="input row items-center">
          <input v-model="formData.halved" class="q-mr-sm" type="checkbox">
          <span> Halved </span>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <button class="action-btn genshin-btn text-center bg-red text-white q-mr-sm" @click="clearFormData()" v-close-popup> Cancel </button>
        <button :disabled="!formValidated" class="action-btn genshin-btn text-center bg-green text-white" @click="createNewTask()" v-close-popup> Create </button>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import ScheduleCellArtifactFuryThundersootherVue from './artifacts/ScheduleCellArtifactFuryThundersoother.vue';
import ScheduleCell from './ScheduleCell.vue';

export default defineComponent({
  components: { ScheduleCell },
  name: 'ScheduleCellCreate',
  props: {
    scheduleId: {
      type: String
    },
    dayCreated: {
      type: Number,
      default: function() {
        return parseInt(date.formatDate(date.subtractFromDate(new Date(), { hours: 4 }), 'E'))
      }
    }
  },
  computed: {
    type () {
      return this.formData.type
    },
    formValidated () {
      const type = this.type
      if (type == 'ARTIFACTS' || 
          type == 'TALENTS' || 
          type == 'WEAPONS') {
        return this.formData.domain != null
      }

      if (this.isWeekly) {
        return this.formData.weeklyBoss != null
      }

      if (this.isBoss) {
        return this.formData.boss != null 
      }

      return true
    },
    isBoss () {
      return this.formData.type == 'BOSS'
    },
    isWeekly () {
      return this.formData.type == 'WEEKLY_BOSS'
    },
    canUseCondensed () {
      const type = this.formData.type
      return type == 'ARTIFACTS' || 
             type == 'TALENTS' || 
             type == 'WEAPONS' ||
             type == 'BLUE_LEYLINE' || 
             type == 'GOLD_LEYLINE'
    }
  },
  data () {
    return {
      openedDialog: false,
      formChoices: {
        type: [
          { label: 'Artifacts', value: 'ARTIFACTS' },
          { label: 'Boss', value: 'BOSS' },
          { label: 'Weekly Boss', value: 'WEEKLY_BOSS' },
          { label: 'Talent Level-up Materials', value: 'TALENTS' },
          { label: 'Weapon Ascencion Materials', value: 'WEAPONS' },
          { label: 'Condensed Resin', value: 'CONDENSED_RESIN' },
          { label: 'Blue Leyline', value: 'BLUE_LEYLINE' },
          { label: 'Gold Leyline', value: 'GOLD_LEYLINE' },
          { label: 'Forging', value: 'FORGING' }
        ],
        domains: {
          ARTIFACTS: [
            { label: 'Blizzard Strayer / Heart of Depth', value: 'BS/HOD' },
            { label: 'Bloodstained Chivalry / Noblesse Oblige', value: 'BC/NO' },
            { label: 'Crimson Witch of Flames / Lavawalker', value: 'CWOF/LW' },
            { label: 'Thundering Fury / Thundersoother', value: 'TF/TS' },
            { label: 'Paleflame / Tenacity of the Millelith', value: 'PF/TOTM' },
            { label: 'Archaic Petra / Retracting Bollide', value: 'AP/RB' },
            { label: 'Shimenawa\'s Reminiscence / Embled of Severed Fate', value: 'SR/EOSF' },
            { label: 'Viridescent Venerer / Maiden Beloved', value: 'VV/MB' }
          ],
          TALENTS: [
            { label: 'Forsaken Rift: Mondstadt', value: 'TALENTS_MONDSTADT' },
            { label: 'Hidden Palace of Lianshan Formula: Liyue', value: 'TALENTS_LIYUE' },
            { label: 'Violet Court: Inazuma', value: 'TALENTS_INAZUMA' }
          ],
          WEAPONS: [
            { label: 'Cecilia Garden: Mondstadt', value: 'WEAPONS_MONDSTADT' },
            { label: 'Taishan Mansion: Liyue', value: 'WEAPONS_LIYUE' },
            { label: 'Court of Flowing Sand: Inazuma', value: 'WEAPONS_INAZUMA' }
          ]
        },
        bosses:  [
          { label: 'Anemo Hypostasis', value: 'ANEMO_HYPOSTASIS' },
          { label: 'Cryo Hypostasis', value: 'CRYO_HYPOSTASIS' },
          { label: 'Cryo Regisvine', value: 'CRYO_REGISVINE' },
          { label: 'Electro Hypostasis', value: 'ELECTRO_HYPOSTASIS' },
          { label: 'Geo Hypostasis', value: 'GEO_HYPOSTASIS' },
          { label: 'Hydro Hypostasis', value: 'HYDRO_HYPOSTASIS' },
          { label: 'Maguu Kenki', value: 'MAGUU_KENKI' },
          { label: 'Oceanid', value: 'OCEANID' },
          { label: 'Perpetual Mechanical Array', value: 'PERPETUAL_MECHANICAL_ARRAY' },
          { label: 'Primo Geovishap', value: 'PRIMO_GEOVISHAP' },
          { label: 'Pyro Hypostasis', value: 'PYRO_HYPOSTASIS' },
          { label: 'Pyro Regisvine', value: 'PYRO_REGISVINE' },
          { label: 'Thunder Manifestation', value: 'THUNDER_MANIFESTATION' }
        ],
        weeklies:  [
          { label: 'Dvalin', value: 'DVALIN' },
          { label: 'Andrius', value: 'ANDRIUS' },
          { label: 'Childe', value: 'CHILDE' },
          { label: 'Azhdaha', value: 'AZHDAHA' },
          { label: 'Signora', value: 'SIGNORA' }
        ]
      },
      formData: {
        type: null,
        domain: null,
        usedCondensed: null,
        boss: null,
        weeklyBoss: null,
        halved: null
      }
    }
  },
  methods: {
    ...mapMutations(['addNewTask']),
    clearFormData () {
      this.formData.domain = null
      this.formData.usedCondensed = null
      this.formData.boss = null
      this.formData.weeklyBoss = null
      this.formData.halved = null
    },
    cleanFormData () {
      const cleanData = Object.keys(this.formData)
                            .filter((k) => this.formData[k] != null)
                            .reduce((a, k) => ({ ...a, [k]: this.formData[k] }), {});
      return cleanData
    },
    createNewTask () {
      const data = this.cleanFormData()
      
      // Do something with the data
      this.addNewTask({
        task: {
          ...data,
          isDone: false
        },
        dayCreated: this.dayCreated,
        scheduleId: this.scheduleId
      })
    }
  },
  watch: {
    type () {
      this.clearFormData()
    }
  }
})
</script>

<style scoped>
* {
  opacity: 0.95;
  cursor: pointer;
}

.add-btn {
  color: white;
  background-color: #286758;
}

.action-btn {
  padding: 5px 15px;
  margin: 0px;
}

</style>
