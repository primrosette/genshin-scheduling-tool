<template>
  <div @click="onUpdateTask()" :class="scheduleCellClasses" :style="scheduleCellStyles">
    <!-- Default Content -->
    <slot></slot>
    <!-- Title -->
    <q-tooltip v-if="$q.screen.lt.lg && title">{{title}}</q-tooltip>
    <div v-else-if="title" class="schedule-cell-title q-ml-xs text-center ellipsis">
      <span :class="canDelete && isDone ? 'text-strike' : ''">
        {{title}}
      </span>
    </div>
    <button v-if="canDelete" @click="onDeleteButtonTask()" class="action-btn text-white delete-btn">
      <q-icon name="clear"/>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
const MARGIN = 5;
const CELL_HEIGHT = 20;

export default defineComponent({
  name: 'ScheduleCell',
  props: {
    title: String,
    index: Number,
    dayCreated: Number,
    scheduleId: String,
    isDone: Boolean,
    size: {
      type: Number,
      default: 1
    },
    bgColor: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: "black"
    },
    centered: {
      type: Boolean,
      default: false
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    scheduleCellStyles () {
      let opacity = 1.0
      if (this.canDelete && this.isDone) {
        opacity = 0.5
      }

      let styles = {
        height: `${this.size * CELL_HEIGHT + ((this.size - 1) * MARGIN)}px`,
        margin: `${MARGIN}px`,
        display: 'flex',
        "flex-direction": 'column',
        "background-color": this.bgColor,
        color: this.textColor,
        position: 'relative',
        opacity
      }

      return styles
    },
    scheduleCellClasses () {
      return {
        "justify-center": this.centered,
        "items-center": this.centered,
        "rounded-borders": true
      }
    }
  },
  methods: {
    ...mapMutations(['deleteTask', 'updateTask']),
    onDeleteButtonTask () {
      this.deleteTask({
        taskIndex: this.index,
        dayCreated: this.dayCreated,
        scheduleId: this.scheduleId
      })
    },
    onUpdateTask () {
      if (this.canDelete) {
        this.updateTask({
          isDone: !this.isDone,
          taskIndex: this.index,
          dayCreated: this.dayCreated,
          scheduleId: this.scheduleId
        })
      }
    }
  }
})
</script>
<style>
.schedule-cell-title {
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  width: 180px;
}

.delete-btn {
  opacity: 0.5;
  width: 20px;
  border: none;
  font-size: 10px;
  height: 20px;
  line-height: 10px;
  position: absolute;
  top: -10px;
  border-radius: 3em;;
  right: -10px;
  background-color: #FF6961;
  cursor: pointer;
}

.delete-btn:hover {
  opacity: 1.0;
}

</style>
