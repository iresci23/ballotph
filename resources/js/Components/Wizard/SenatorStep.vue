<script setup>
import { computed, onMounted } from 'vue'
import { useCandidateStore } from '@/Stores/Candidate'
import CandidateCard from './CandidateCard.vue'
import CardLoading from '@/Components/CardLoading.vue'
import Alert from '@/Components/Alert.vue'

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.fetchCandidates('senator');

store.saveCompletedSteps(
    props.service.state.context.completedSteps, 
    props.service.state.value
);

const selectionCountValid = computed(() => {
  return store.ballot.senators.length <= store.votingLimits.senators;
})

onMounted(() => {
    console.log("onMounted")
  document.getElementById('wizard-generator').scrollIntoView({
      behavior: 'smooth', block: 'start'
  });
});
</script>

<template>
    <div class="text-center py-4" v-bind="$attrs">
        <h3
            class="my-3 text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
        >
            Sino ang mga Senators mo?
        </h3>
        <div v-if="!selectionCountValid">
            <Alert class="bg-red-500">
                <template #text>
                    Maari lamang bumoto ng hanggang {{ store.votingLimits.senators }} na Senador
                </template>
            </Alert>
        </div>
        <h4 v-else class="text-2xl">Vote for twelve ({{ store.votingLimits.senators }})</h4>
    </div>
    <div class="search-bar">
        <input class="w-full lg:w-60" type="text" placeholder="Search candidate" v-model="store.search.senator">
    </div>

    <div class="flex flex-wrap -mx-4" v-if="!store.senators.length">
        <template v-if="!store.search.senator">
            <CardLoading v-for="index in 5" :key="index"></CardLoading>
        </template>
        <template v-else>
            <Alert class="bg-blue-300 flex-1 m-4">
                <template #text>
                    No results found for <strong>{{ store.search.senator }}</strong>
                </template>
            </Alert>
        </template>
    </div>

    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.senators" 
            :key="candidate.id"  
            :candidate="candidate"
            :selected="store.ballot.senators.includes(candidate.id)"
            :selected-index="store.ballot.senators.findIndex((c) => c === candidate.id) + 1"
            @click="store.select('senators', candidate)">
        </CandidateCard>

    </div>
    <div v-if="!selectionCountValid">
        <Alert class="bg-red-500">
            <template #text>
                Maari lamang bumoto ng hanggang {{ store.votingLimits.senators }} na Senador
            </template>
        </Alert>
    </div>
</template>