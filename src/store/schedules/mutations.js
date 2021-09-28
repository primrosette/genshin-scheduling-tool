import { LocalStorage } from 'quasar'

export function addNewTask (state, { task, dayCreated, scheduleId }) {
  state.schedules[scheduleId][dayCreated].push(task)
  LocalStorage.set('schedules', state.schedules)
}

export function deleteTask (state, { taskIndex, dayCreated, scheduleId }) {
  state.schedules[scheduleId][dayCreated].splice(taskIndex, 1)
  LocalStorage.set('schedules', state.schedules)
}

export function updateTask (state, { isDone, taskIndex, dayCreated, scheduleId }) {
  state.schedules[scheduleId][dayCreated][taskIndex].isDone = isDone
  LocalStorage.set('schedules', state.schedules)
}

export function createNewWeeklySchedule (state, { scheduleId }) {
  state.schedules[scheduleId] = {
    id: scheduleId,
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  }

  LocalStorage.set('schedules', state.schedules)
}


