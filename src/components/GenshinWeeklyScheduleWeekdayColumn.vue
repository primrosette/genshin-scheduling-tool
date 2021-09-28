<template>
  <div>
    <schedule-cell centered bgColor = "black" textColor="white" :canDelete="false"> {{day}} </schedule-cell>
    <component 
      v-for="(task, index) in dailySchedule" 
      :key="index"
      :is="determineComponentFromTask(task)"
      v-bind="propsToBind(task, index)">
    </component>
    <create-schedule :dayCreated="dayInNumber" :scheduleId="scheduleId"></create-schedule>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ScheduleCell from './cells/ScheduleCell.vue';
import CreateSchedule from './cells/ScheduleCellCreate.vue';
import TalentsMondstadt from './cells/talents/ScheduleCellTalentsMondstadt.vue';
import TalentsLiyue from './cells/talents/ScheduleCellTalentsLiyue.vue';
import TalentsInazuma from './cells/talents/ScheduleCellTalentsInazuma.vue';
import WeaponsMondstadt from './cells/weapons/ScheduleCellWeaponsMondstadt.vue';
import WeaponsLiyue from './cells/weapons/ScheduleCellWeaponsLiyue.vue';
import WeaponsInazuma from './cells/weapons/ScheduleCellWeaponsInazuma.vue';
import BlueLeyline from './cells/misc/ScheduleCellBlueLeyline.vue';
import GoldLeyline from './cells/misc/ScheduleCellGoldLeyline.vue';
import CondensedResin from './cells/misc/ScheduleCellCondensedResin.vue';
import Forging from './cells/misc/ScheduleCellForging.vue';
import WeeklyAndrius from './cells/weeklies/ScheduleCellWeeklyAndrius.vue';
import WeeklyAzhdaha from './cells/weeklies/ScheduleCellWeeklyAzhdaha.vue';
import WeeklyChilde from './cells/weeklies/ScheduleCellWeeklyChilde.vue';
import WeeklyDvalin from './cells/weeklies/ScheduleCellWeeklyDvalin.vue';
import WeeklySignora from './cells/weeklies/ScheduleCellWeeklySignora.vue';
import BossAnemoHypostasis from './cells/boss/ScheduleCellBossAnemoHypostasis.vue';
import BossCryoHypostasis from './cells/boss/ScheduleCellBossCryoHypostasis.vue';
import BossCryoRegisvine from './cells/boss/ScheduleCellBossCryoRegisvine.vue';
import BossElectroHypostasis from './cells/boss/ScheduleCellBossElectroHypostasis.vue';
import BossGeoHypostasis from './cells/boss/ScheduleCellBossGeoHypostasis.vue';
import BossHydroHypostasis from './cells/boss/ScheduleCellBossHydroHypostasis.vue';
import BossMaguuKenki from './cells/boss/ScheduleCellBossMaguuKenki.vue';
import BossOceanid from './cells/boss/ScheduleCellBossOceanid.vue';
import BossPerpetualMechanicalArray from './cells/boss/ScheduleCellBossPerpetualMechanicalArray.vue';
import BossPrimoGeovishap from './cells/boss/ScheduleCellBossPrimoGeovishap.vue';
import BossPyroHypostasis from './cells/boss/ScheduleCellBossPyroHypostasis.vue';
import BossPyroRegisvine from './cells/boss/ScheduleCellBossPyroRegisvine.vue';
import BossThunderManifestation from './cells/boss/ScheduleCellBossThunderManifestation.vue';
import ArtifactBlizzardDepth from './cells/artifacts/ScheduleCellArtifactBlizzardDepth.vue';
import ArtifactBloodstainedNoblesse from './cells/artifacts/ScheduleCellArtifactBloodstainedNoblesse.vue';
import ArtifactCrimsonLavawalker from './cells/artifacts/ScheduleCellArtifactCrimsonLavawalker.vue';
import ArtifactFuryThundersoother from './cells/artifacts/ScheduleCellArtifactFuryThundersoother.vue';
import ArtifactPaleflameTenacity from './cells/artifacts/ScheduleCellArtifactPaleflameTenacity.vue';
import ArtifactPetraBollide from './cells/artifacts/ScheduleCellArtifactPetraBollide.vue';
import ArtifactShimenawaSevered from './cells/artifacts/ScheduleCellArtifactShimenawaSevered.vue';
import ArtifactViridiscentMaiden from './cells/artifacts/ScheduleCellArtifactViridiscentMaiden.vue';


const daysOfWeek = {
  "MONDAY": 1, 
  "TUESDAY": 2,
  "WEDNESDAY": 3,
  "THURSDAY": 4,
  "FRIDAY": 5,
  "SATURDAY": 6,
  "SUNDAY": 7
}

const componentMapping = {
  "ARTIFACTS": {
    "BS/HOD": ArtifactBlizzardDepth,
    "BC/NO": ArtifactBloodstainedNoblesse, 
    "CWOF/LW": ArtifactCrimsonLavawalker, 
    "TF/TS": ArtifactFuryThundersoother,
    "PF/TOTM": ArtifactPaleflameTenacity,
    "AP/RB": ArtifactPetraBollide,
    "SR/EOSF": ArtifactShimenawaSevered,
    "VV/MB": ArtifactViridiscentMaiden
  },
  "TALENTS": {
    "TALENTS_MONDSTADT": TalentsMondstadt,
    "TALENTS_LIYUE": TalentsLiyue,
    "TALENTS_INAZUMA": TalentsInazuma
  },
  "WEAPONS": {
    "WEAPONS_MONDSTADT": WeaponsMondstadt,
    "WEAPONS_LIYUE": WeaponsLiyue,
    "WEAPONS_INAZUMA": WeaponsInazuma
  },
  "WEEKLY_BOSS": {
    "DVALIN": WeeklyDvalin,
    "ANDRIUS": WeeklyAndrius, 
    "CHILDE": WeeklyChilde,
    "AZHDAHA": WeeklyAzhdaha,
    "SIGNORA": WeeklySignora
  },
  "BOSS": {
    "ANEMO_HYPOSTASIS": BossAnemoHypostasis,
    "CRYO_HYPOSTASIS": BossCryoHypostasis,
    "CRYO_REGISVINE": BossCryoRegisvine,
    "ELECTRO_HYPOSTASIS": BossElectroHypostasis,
    "GEO_HYPOSTASIS": BossGeoHypostasis,
    "HYDRO_HYPOSTASIS": BossHydroHypostasis,
    "MAGUU_KENKI": BossMaguuKenki,
    "OCEANID": BossOceanid,
    "PERPETUAL_MECHANICAL_ARRAY": BossPerpetualMechanicalArray,
    "PRIMO_GEOVISHAP": BossPrimoGeovishap,
    "PYRO_HYPOSTASIS": BossPyroHypostasis,
    "PYRO_REGISVINE": BossPyroRegisvine,
    "THUNDER_MANIFESTATION": BossThunderManifestation
  },
  "GOLD_LEYLINE": GoldLeyline,
  "BLUE_LEYLINE": BlueLeyline,
  "CONDENSED_RESIN": CondensedResin,
  "FORGING": Forging
}

export default defineComponent({
  props: ['day', 'dailySchedule', 'scheduleId'],
  components: { 
    CreateSchedule,
    TalentsMondstadt,
    TalentsLiyue,
    TalentsInazuma,
    WeaponsMondstadt,
    WeaponsLiyue,
    WeaponsInazuma,
    BlueLeyline,
    GoldLeyline,
    CondensedResin,
    Forging,
    ScheduleCell, 
    WeeklyAndrius, 
    WeeklyAzhdaha, 
    WeeklyChilde,
    WeeklyDvalin,
    WeeklySignora,
    BossAnemoHypostasis,
    BossCryoHypostasis,
    BossCryoRegisvine,
    BossElectroHypostasis,
    BossGeoHypostasis,
    BossHydroHypostasis,
    BossMaguuKenki,
    BossOceanid,
    BossPerpetualMechanicalArray,
    BossPrimoGeovishap,
    BossPyroHypostasis,
    BossPyroRegisvine,
    BossThunderManifestation,
    ArtifactBlizzardDepth,
    ArtifactBloodstainedNoblesse,
    ArtifactCrimsonLavawalker,
    ArtifactFuryThundersoother,
    ArtifactPaleflameTenacity,
    ArtifactPetraBollide,
    ArtifactShimenawaSevered,
    ArtifactViridiscentMaiden
  },
  name: 'ScheduleWeekColumn',
  computed: {
    dayInNumber () {
      return daysOfWeek[this.day.toUpperCase()]
    }
  },
  methods: {
    propsToBind (task, index) {
      switch (task.type) {
        case 'ARTIFACTS':
        case 'WEAPONS':
        case 'TALENTS':
        case 'BLUE_LEYLINE':
        case 'GOLD_LEYLINE':
        case 'CONDENSED_RESIN':
        case 'BOSS':
          return { isDone: task.isDone, "condensed": task.usedCondensed, index, dayOfWeek: this.dayInNumber, dayCreated: this.dayInNumber, scheduleId: this.scheduleId }
        case 'WEEKLY_BOSS':
          return { isDone: task.isDone, "halved": task.halved, index, dayOfWeek: this.dayInNumber, dayCreated: this.dayInNumber, scheduleId: this.scheduleId }
        default:
          console.error("Unsupported task type")
      }
    },
    determineComponentFromTask (task) {
      switch (task.type) {
        case 'ARTIFACTS':
        case 'WEAPONS':
        case 'TALENTS':
          return componentMapping[task.type][task.domain]
        case 'BOSS':
          return componentMapping[task.type][task.boss]
        case 'WEEKLY_BOSS':
          return componentMapping[task.type][task.weeklyBoss]
        default:
          return componentMapping[task.type]
      }
    }
  }
})
</script>
