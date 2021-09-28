import { date } from 'quasar'

export default {
  name: 'GenshinDaysMixin',
  data () {
    return {
      DAYS_OF_WEEK: [
        { name: "Monday", value: 1 }, 
        { name: "Tuesday", value: 2 }, 
        { name: "Wednesday", value: 3 }, 
        { name: "Thursday", value: 4 }, 
        { name: "Friday", value: 5 }, 
        { name: "Saturday", value: 6 }, 
        { name: "Sunday", value: 7 }
      ]
    }
  },
  props: {
    dayOfWeek: {
      type: Number,
      default: function() {
        return parseInt(date.formatDate(date.subtractFromDate(new Date(), { hours: 4 }), 'E'))
      }
    }
  },
  computed: {
    isMonday () {
      return this.dayOfWeek == 1
    },
    isTuesday () {
      return this.dayOfWeek == 2
    },
    isWednesday () {
      return this.dayOfWeek == 3
    },
    isThursday () {
      return this.dayOfWeek == 4
    },
    isFriday () {
      return this.dayOfWeek == 5
    },
    isSaturday () {
      return this.dayOfWeek == 6
    },
    isSunday () {
      return this.dayOfWeek == 7
    }
  }
}