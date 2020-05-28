import axios from 'axios'
import { API_PATH } from '@/constants/path'
import _ from 'lodash'

const state = {
  races: []
}

const getters = {
  totalRaces: state => _.orderBy(state.races, 'advertised_start.seconds', 'asc')
}

const actions = {
  async fetchRaces ({ commit }) {
    const response = await axios.get(API_PATH)
    const raceid = response.data.data

    commit('setRaces', _.toArray(raceid.race_summaries))
  }

}

const mutations = {
  setRaces: (state, races) => (state.races = races)
}

export default {
  state,
  getters,
  actions,
  mutations
}
