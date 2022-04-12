<script setup>
import { computed } from 'vue'
import { useCandidateStore } from '@/Stores/Candidate'
import CandidateCard from './CandidateCard.vue'

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.saveCompletedSteps(props.service.state.context.completedSteps, props.service.state.value)

const selectionCountValid = computed(() => {
  return store.ballot.senators.length <= store.votingLimits.senators;
})
</script>

<template>
    <div class="text-center py-4" v-bind="$attrs">
        <h3
            class="my-3 text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
        >
            Who are your Senators?
        </h3>
        <h4 class="text-2xl">Vote for eight ({{ store.votingLimits.senators }})</h4>
    </div>
    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.senators" 
            :key="candidate.id"  
            :candidate="candidate"
            :selected="store.ballot.senators.includes(candidate.id)"
            :selected-index="store.ballot.senators.findIndex((c) => c === candidate.id) + 1"
            @click="store.select('senators', candidate.id)">
        </CandidateCard>

    </div>
    <div v-if="!selectionCountValid">
        <p class="text-red-600 text-center text-bold">Maari lamang bomoto ng Senador hanggang {{ store.votingLimits.senators }}</p>
    </div>
</template>