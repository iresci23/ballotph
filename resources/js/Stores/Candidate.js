import { defineStore } from 'pinia'

export const useCandidateStore = defineStore('candidate', {
  // could also be defined as
  // state: () => ({ count: 0 })
  state: () => {
    return { 
      wizard: {
        lastSavedStep: "president",
        completedSteps: []
      },
      list: [], //list of candidates
      ballot: {
        president: null,
        vice_president: null,
        senators: [],
        partylist: null,
      },
      votingLimits: {
        president: 1,
        vicePresident: 1,
        senators: 8,
        partylist: 1
      },
    }
  },
  actions: {
    setList(candidates) {
      this.list = candidates.data
    },
    select(position, candidate_id) {
      if (position === 'senators') {

        let arr = this.ballot.senators;
        if(arr.includes(candidate_id)){
            arr.splice(arr.indexOf(candidate_id), 1);
            return;
        }

        this.ballot[position].push(candidate_id)

      } else {
        // unselect if the same
        if (this.ballot[position] && 
          this.ballot[position] === candidate_id) {
          this.ballot[position] = null
        } else {
          //select
          this.ballot[position] = candidate_id
        }
      }
    },
    saveCompletedSteps(steps, last_step) {
      let uniq = [...new Set(steps)];
      this.wizard.completedSteps = uniq
      this.wizard.lastSavedStep = last_step
    }
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
    },
    myBallot: (state) => {
      let senators = state.list.filter((c) => state.ballot.senators.includes(c.id))
      return {
        president: state.list.find((c) => c.id === state.ballot.president),
        vice_president: state.list.find((c) => c.id === state.ballot.vice_president),
        senators: senators,
        partylist: state.list.find((c) => c.id === state.ballot.partylist),
      }
    }
  },
  persist: {
    enabled: true
  }
})