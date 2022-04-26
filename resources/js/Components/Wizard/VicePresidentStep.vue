<script setup>
import { onMounted } from 'vue';
import { useCandidateStore } from '@/Stores/Candidate'
import CandidateCard from './CandidateCard.vue';
import CardLoading from '@/Components/CardLoading.vue';

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.fetchCandidates('vice_president');

store.saveCompletedSteps(
    props.service.state.context.completedSteps, 
    props.service.state.value
);

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
            Sino ang Vice President mo?
        </h3>
        <h4 class="text-2xl">Vote for one (1)</h4>
    </div>

    <div class="flex flex-wrap -mx-4" v-if="!store.vicePresidents.length">
        <CardLoading  v-for="index in 5" :key="index"></CardLoading>
    </div>

    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.vicePresidents" :key="candidate.id"  
            :candidate="candidate"
            :selected="store.ballot.vice_president == candidate.id"
            @click="store.select('vice_president', candidate)">
        </CandidateCard>

    </div>
</template>