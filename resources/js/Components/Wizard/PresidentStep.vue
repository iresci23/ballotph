<script setup>
import { useCandidateStore } from '@/Stores/Candidate'

const store = useCandidateStore();
console.log("store.pres", store.presidents)
</script>

<template>
    <div class="text-center py-4">
        <h3
            class="my-3 text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
        >
            Who is your President?
        </h3>
        <h4 class="text-2xl">Vote for one (1)</h4>
    </div>
    <div class="flex flex-wrap -mx-4">

        <div v-for="candidate in store.presidents" :key="candidate.id" 
            class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
            <a
                href="#"
                class="c-card md:flex-col md:items-center"
            >
                <div class="relative">
                    <img
                        class="w-24 h-full md:w-full"
                        :src="candidate.picture"
                        alt=""
                    />
                </div>
                <div class="p-4 flex-1">
                    <h2 class="mt-2 mb-2 font-bold h-12 flex flex-col flex-wrap content-center items-center">
                        <span class="ballot-number">{{ candidate.ballot_number }}.</span>
                        <span class="profile-name">{{ candidate.name }}</span>
                        <span class="profile-party">{{ candidate.partylist }}</span>
                    </h2>
                    <p class="text-sm">
                    </p>
                </div>
            </a>
        </div> 

    </div>
</template>