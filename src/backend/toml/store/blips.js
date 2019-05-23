/* global BLIPS_TOML */ // gets pre filled by vue.config.js via Webpack plugin

const actions = {
  getBlips ({ commit }) {
    let blipsArray = BLIPS_TOML.blips
      .map(b => {
        b.title = b.name
        delete b.name
        return b
      })
      .filter(b => b.title)
      .filter(b => b.changes && b.changes.length > 0)
      .map((b, ix) => {
        b.index = ix + 1
        b.id = ix + 1
        b.state = b.changes.sort((a, b) => a.date < b.date)[0].newState
        return b
      })
    commit('setBlips', blipsArray)
  },
  addBlip ({ commit, dispatch }, { blip, change }) {
    console.error('Mutating actions not permitted with static backend, this method should not be reachable')
  },
  updateBlip ({ commit }, blip) {
    console.error('Mutating actions not permitted with static backend, this method should not be reachable')
  },
  deleteBlip ({ commit }, blip) {
    console.error('Mutating actions not permitted with static backend, this method should not be reachable')
  },
  addChange ({ commit }, { blip, change }) {
    console.error('Mutating actions not permitted with static backend, this method should not be reachable')
  },
  deleteChange ({ commit }, { blip, change }) {
    console.error('Mutating actions not permitted with static backend, this method should not be reachable')
  }
}

export default {
  actions
}
