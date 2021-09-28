<template>
  <schedule-cell-boss
    icon="boss_maguu_kenki"
    title="Maguu Kenki"
  >
  </schedule-cell-boss>
</template>


<script>
import { defineComponent } from 'vue'
import ScheduleCellBoss from './ScheduleCellBoss.vue';

export default defineComponent({
  components: { ScheduleCellBoss },
  name: 'ScheduleCellBossMaguuKenki'
})
</script>
