<script setup>
import { computed, onMounted } from 'vue';
import { useCandidateStore } from '@/Stores/Candidate';
import CandidateCard from './CandidateCard.vue';

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.saveCompletedSteps(
    props.service.state.context.completedSteps, 
    props.service.state.value
)

const selectedLocale = computed(() => {
  return store.selectedLocale ?? [];
})

onMounted(() => {
  document.getElementById('wizard-generator').scrollIntoView({
      behavior: 'smooth', block: 'start'
  });
});
</script>

<template>
    <div class="text-center py-4" v-bind="$attrs">
        <div class="flex">
            <div>
                Filter: 
                <select v-model="store.search.province">
                    <option value="">SELECT PROVINCE</option>
                    <option v-for="option in store.provinces" :key="option.province" v-bind:value="option.province">
                        {{ option.province }}
                    </option>
                </select>
            </div>
            <div>
                <select v-model="store.search.citydist" @change="store.fetchCandidates('local_candidates', true)">
                    <option value="">SELECT CITY</option>
                    <option v-for="option in store.citydists" :key="option.city_dist" v-bind:value="option.id">
                        {{ option.city_dist }}
                    </option>
                </select>
            </div>
        </div>
    </div>

    <div v-if="selectedLocale.city_dist">
        <h3>Candidates for {{ selectedLocale.province }} > <b>{{ selectedLocale.city_dist }}</b></h3>
    </div>

    <div v-if="store && selectedLocale.city_dist">
        <!-- MEMBER, HOUSE OF REPRESENTATIVES -->
        <div v-if="store.houseRepresentatives.length">
            <h2 class="bg-green-600 text-white ballot-border ballot-center">MEMBER, HOUSE OF REPRESENTATIVES / Vote for 1</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.houseRepresentatives" :key="'house_rep_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.house_representative == candidate.id"
                    @click="store.select('house_representative', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- PROVINCIAL GOVERNOR  -->
        <div v-if="store.governors.length">
            <h2 class="bg-sky-600 text-white ballot-border ballot-center">PROVINCIAL GOVERNOR / Vote for 1</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.governors" :key="'governor_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.governor == candidate.id"
                    @click="store.select('governor', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- PROVINCIAL VICE GOVERNOR  -->
        <div v-if="store.viceGovernors.length">
            <h2 class="bg-green-600 text-white ballot-border ballot-center">PROVINCIAL VICE-GOVERNOR / Vote for 1</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.viceGovernors" :key="'vice_governor_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.vice_governor == candidate.id"
                    @click="store.select('vice_governor', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- MEMBER, SANGGUNIANG PANLALAWIGAN  -->
        <div v-if="store.provSangMembers.length">
            <h2 class="bg-sky-600 text-white ballot-border ballot-center">MEMBER, SANGGUNIANG PANLALAWIGAN / Vote for {{ selectedLocale.prov_saggunian_member_limit }}</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.provSangMembers" :key="'prov_sang_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.prov_sang_members.includes(candidate.id)"
                    :selected-index="store.ballot.prov_sang_members.findIndex((c) => c === candidate.id) + 1"
                    @click="store.select('prov_sang_members', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- MAYOR  -->
        <div v-if="store.mayors.length">
            <h2 class="bg-green-600 text-white ballot-border ballot-center">MAYOR / Vote for 1</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.mayors" :key="'mayor_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.mayor == candidate.id"
                    @click="store.select('mayor', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- VICE MAYOR  -->
        <div v-if="store.viceMayors.length">
            <h2 class="bg-sky-600 text-white ballot-border ballot-center">VICE-MAYOR / Vote for 1</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.viceMayors" :key="'vice_mayor_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.vice_mayor == candidate.id"
                    @click="store.select('vice_mayor', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- MEMBER, SANGUNIANG BAYAN  -->
        <div v-if="store.citySangMembers.length">
            <h2 class="bg-green-600 text-white ballot-border ballot-center">MEMBER, SANGUNIANG BAYAN / Vote for {{ selectedLocale.city_saggunian_member_limit }}</h2>
            <div class="flex flex-wrap items-center -mx-4">
                <CandidateCard v-for="candidate in store.citySangMembers" :key="'city_sang_'+candidate.id"  
                    :candidate="candidate"
                    :hide-picture="true"
                    :selected="store.ballot.city_sang_members.includes(candidate.id)"
                    :selected-index="store.ballot.city_sang_members.findIndex((c) => c === candidate.id) + 1"
                    @click="store.select('city_sang_members', candidate.id)">
                </CandidateCard>
            </div>
        </div>

        <!-- <CandidateCard v-for="candidate in store.partylist" :key="candidate.id"  
            :candidate="candidate"
            :hide-picture="true"
            :selected="store.ballot.partylist == candidate.id"
            @click="store.select('partylist', candidate.id)">
        </CandidateCard> -->

    </div>
</template>