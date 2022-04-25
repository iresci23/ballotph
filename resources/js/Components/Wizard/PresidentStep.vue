<script setup>
import { onMounted } from 'vue';
import { useCandidateStore } from '@/Stores/Candidate'
import CandidateCard from './CandidateCard.vue';
import CardLoading from '@/Components/CardLoading.vue';

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.fetchCandidates('president');

store.saveCompletedSteps(
    props.service.state.context.completedSteps, 
    props.service.state.value
)

onMounted(() => {
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
            Sino ang President mo?
        </h3>
        <h4 class="text-2xl">Vote for one (1)</h4>
    </div>

    <div class="flex flex-wrap -mx-4" v-if="!store.presidents.length">
        <CardLoading  v-for="index in 5" :key="index"></CardLoading>
    </div>

    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.presidents" :key="candidate.id"  
            :candidate="candidate"
            :selected="store.ballot.president == candidate.id"
            @click="store.select('president', candidate.id )">
        </CandidateCard>

    </div>
</template>