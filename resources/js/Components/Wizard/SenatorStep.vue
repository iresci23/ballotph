<script setup>
import { useCandidateStore } from '@/Stores/Candidate'
import CandidateCard from './CandidateCard.vue'

const store = useCandidateStore();

</script>

<template>
    <div class="text-center py-4" v-bind="$attrs">
        <h3
            class="my-3 text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
        >
            Who are your Senators?
        </h3>
        <h4 class="text-2xl">Vote for eight (8)</h4>
    </div>
    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.senators" :key="candidate.id"  
            :candidate="candidate"
            :selected="store.ballot.senators.includes(candidate.id)"
            @click="store.select('senators', candidate.id)">
        </CandidateCard>

    </div>
</template>