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
            Select your Partylist
        </h3>
        <h4 class="text-2xl">Vote for one (1)</h4>
    </div>
    <div class="flex flex-wrap -mx-4">

        <CandidateCard v-for="candidate in store.partylist" :key="candidate.id"  
            :candidate="candidate"
            :hide-picture="true"
            :selected="store.ballot.partylist == candidate.id"
            @click="store.select('partylist', candidate.id)">
        </CandidateCard>

    </div>
</template>