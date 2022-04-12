import { defineStore } from 'pinia'

export const useCandidateStore = defineStore('candidate', {
  // could also be defined as
  // state: () => ({ count: 0 })
  state: () => {
    return { 
      list: [] //list of candidates
    }
  },
  actions: {
    setList(candidates) {
      this.list = candidates.data
    },
  },
  getters: {
    presidents: (state) => {
      return state.list.filter((c) => c.position === 'president')
    },
    vicePresidents: (state) => {
      return state.list.filter((c) => c.position === 'vice_president')
    },
    senators: (state) => {
      return state.list.filter((c) => c.position === 'senator')
    },
    partylist: (state) => {
      return state.list.filter((c) => c.position === 'partylist')
    }
  },
})