import Vue from 'vue'
import Vuex from 'vuex'
import races from './modules/raceData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    races
  }
})
