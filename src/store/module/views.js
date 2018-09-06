const state = {
    index: 0,
}
const mutations = {
    computeIndex (state, currentIndex) {
        state.index = currentIndex
    }
}
const actions = {
    updateIndex({commit}, index) {
        commit('computeIndex', index)
    }
}
export default {
    state,
    mutations,
    actions
}
