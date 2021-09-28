import { LocalStorage } from 'quasar'

let schedulesAssigned = { }

if (LocalStorage.has('schedules')) {
  schedulesAssigned = LocalStorage.getItem('schedules')
} else {
  LocalStorage.set('schedules', schedulesAssigned)
}

export default function () {
  return {
    schedules: schedulesAssigned
  }
}
