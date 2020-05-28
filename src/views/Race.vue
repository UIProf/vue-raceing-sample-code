<template>
    <div class="container">
      <h1 class="">Next to go {{totalRaces.race_id}}</h1>
      <div class="show-all-race" v-for="race in totalRaces.slice(0, 5)" :key="race.race_id">
          <div class="cat-id" @click="toggleCategory($e)">{{ race.category_id }} - {{ dateTimeFormate(race.advertised_start.seconds) }}</div>
          <div class="race-details" v-show="showCategoryId">
            <div class="meeting-name">{{race.meeting_name}}</div>
            <div class="race-number">{{race.race_number}}</div>
          </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'container',
  data () {
    return {
      showCategoryId: false,
      minuts: moment(60 * 10 * 1000).format('mm:ss')
    }
  },
  methods: {
    ...mapActions(['fetchRaces']),
    toggleCategory (e) {
      console.log(e.target.classlist)
    },
    dateTimeFormate (value) {
      if (value) {
        return moment(value).format('hh:mm')
      }
    }
  },
  computed: {
    ...mapGetters(['totalRaces'])
  },
  mounted () {
    this.fetchRaces()
  }
}
</script>
