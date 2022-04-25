import { defineStore } from 'pinia'

export const useCandidateStore = defineStore('candidate', {
  // could also be defined as
  // state: () => ({ count: 0 })
  state: () => {
    return { 
      wizard: {
        lastSavedStep: "president",
        completedSteps: [],
        bottomOfPage: false
      },
      dataSource: {
        president: [],
        vice_president: [],
        senator: [],
        partylist: [],
        localities: [], //list of provinces...
        local_candidates: [] //local candidates based on filters selected
      },
      ballot: {
        president: null,
        vice_president: null,
        senators: [],
        partylist: null,
        house_representative: null,
        governor: null,
        vice_governor: null,
        mayor: null,
        vice_mayor: null,
        prov_sang_members: [],
        city_sang_members: [],
      },
      votingLimits: {
        president: 1,
        vicePresident: 1,
        senators: 12,
        partylist: 1
      },
      search: {
        senator: '',
        partylist: '',
        province: '',
        citydist: '',
      },
      showModal: false,
      modalCandidate: []
    }
  },
  actions: {
    async fetchCandidates(position, reload) {
      try {
          // get data if empty
          if ((this.dataSource[position] && this.dataSource[position].length == 0) || reload === true) {
            const data = await window.axios.get('/json/candidates', {
              params: {
                position: position,
                locality_id: this.search.citydist
              }
            })
            this.dataSource[position] = data.data
          }
        }
        catch (error) {
          console.log(error)
      }
    },
    setLocalities(data) {
      this.dataSource.localities = data;
    },
    reset(callback) {
      this.wizard = {
        lastSavedStep: "president",
        completedSteps: []
      };

      this.ballot = {
        president: null,
        vice_president: null,
        senators: [],
        partylist: null,
        house_representative: null,
        governor: null,
        vice_governor: null,
        mayor: null,
        vice_mayor: null,
        prov_sang_members: [],
        city_sang_members: [],
      };

      this.search = {
        senator: '',
        partylist: '',
        province: '',
        citydist: '',
      };

      callback();
    },
    select(position, candidate_id) {
      
      let positions = ['senators', 'prov_sang_members', 'city_sang_members'];
      // multi select
      if (positions.includes(position)) {

        let arr = this.ballot[position];
        if(arr.includes(candidate_id)){
            arr.splice(arr.indexOf(candidate_id), 1);
            return;
        }
        this.ballot[position].push(candidate_id)

      } else {
        // single select
        if (this.ballot[position] && 
          this.ballot[position] === candidate_id) {
          //unselect if the same
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
    },
    getProfileUrl(candidate) {
      if (candidate.profile_url) {
        return candidate.profile_url;
      }
      let position = (candidate.position).replace(/_/g," ");
      return `https://www.google.com/search?q=${candidate.name} candidate running for ${position}`;
    },
  },
  getters: {
    presidents: (state) => {
      return state.dataSource.president
    },
    vicePresidents: (state) => {
      return state.dataSource.vice_president
    },
    senators: (state) => {
      // check if there is a search query
      let filtered = state.dataSource.senator;
      if (state.search.senator) {
        return filtered.filter((c)=>{
          return state.search.senator.toLowerCase().split(' ').every(v => c.name.toLowerCase().includes(v))
        })
      }
      return filtered;
    },
    partylist: (state) => {
      // check if there is a search query
      let filtered = state.dataSource.partylist;
      if (state.search.partylist) {
        return filtered.filter((c)=>{
          return state.search.partylist.toLowerCase().split(' ').every(v => c.name.toLowerCase().includes(v))
        })
      }
      return filtered;
    },
    provinces: (state) => {
      const provinces = [...new Map(state.dataSource.localities.map(item =>[item['province'], item])).values()];

      provinces.sort((a, b) => a.province.localeCompare(b.province))

      return provinces;
    },
    citydists: (state) => {
      if (state.search.province) {
        const citydists = state.dataSource.localities;
        return citydists.filter((c)=>{
          return c.province === state.search.province;
        })
      }
      return [];
    },
    houseRepresentatives: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'house_representative');
    },
    governors: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'governor');
    },
    viceGovernors: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'vice_governor');
    },
    provSangMembers: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'prov_saggunian_member');
    },
    mayors: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'mayor');
    },
    viceMayors: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'vice_mayor');
    },
    citySangMembers: (state) => {
      return state.dataSource.local_candidates.filter((c) => c.position === 'city_saggunian_member');
    },
    selectedLocale: (state) => {
      return state.dataSource.localities.find((c) => c.id === state.search.citydist)
    },
    myBallot: (state) => {
      let senators = state.dataSource.senator.filter((c) => state.ballot.senators.includes(c.id))
      let prov_sang_members = state.provSangMembers.filter((c) => state.ballot.prov_sang_members.includes(c.id))
      let city_sang_members = state.citySangMembers.filter((c) => state.ballot.city_sang_members.includes(c.id))
      return {
        president: state.dataSource.president.find((c) => c.id === state.ballot.president),
        vice_president: state.dataSource.vice_president.find((c) => c.id === state.ballot.vice_president),
        senators: senators,
        partylist: state.dataSource.partylist.find((c) => c.id === state.ballot.partylist),

        house_representative: state.houseRepresentatives.find((c) => c.id === state.ballot.house_representative),
        governor: state.governors.find((c) => c.id === state.ballot.governor),
        vice_governor: state.viceGovernors.find((c) => c.id === state.ballot.vice_governor),
        prov_sang_members: prov_sang_members,
        mayor: state.mayors.find((c) => c.id === state.ballot.mayor),
        vice_mayor: state.viceMayors.find((c) => c.id === state.ballot.vice_mayor),
        city_sang_members: city_sang_members,
      }
    }
  },
  persist: {
    enabled: true
  }
})