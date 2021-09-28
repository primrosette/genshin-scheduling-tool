<template>
  <schedule-cell :title="title" centered bgColor = "#D9DDDC" :size="4">
    <q-img :src="imageURL" style="height: 24px; width: 24px"/>
  </schedule-cell>
</template>


<script>
const images = require.context('../../../assets/', false, /\.png$/)
import { defineComponent } from 'vue'
import ScheduleCell from '../ScheduleCell.vue';

export default defineComponent({
  props: {
    icon: String,
    title: String
  },
  components: { ScheduleCell },
  name: 'ScheduleCellBoss',
  computed: {
    imageURL: function () {
      return images('./' + this.icon + ".png")
    }
  }
})
</script>
