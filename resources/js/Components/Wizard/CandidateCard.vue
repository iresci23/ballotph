<template>
    <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-2">
        <div
            class="c-card md:items-center max-h-28 md:max-h-full relative"
            :class="{'selected-card': selected, 'md:flex-col md:card-minheight-md lg:card-minheight-lg': !hidePicture}"
        >
            <span class="selected-index" v-if="selectedIndex">{{ selectedIndex }}</span>
            <div class="relative w-16 h-16 md:w-full md:h-full" :class="{'hidden': hidePicture}">
                <img
                    class="grayscale hover:grayscale-0"
                    :src="candidate.picture ?? 'https://placehold.co/400x400'"
                    alt=""
                    @error="candidate.picture='https://placehold.co/400x400'" 
                />
            </div>
            <div class="px-2 md:px-0 flex-1 md:flex md:flex-col" :class="{' md:justify-center md:items-center': !hidePicture}">
                <h2 class="font-bold text-xs lg:text-sm" :class="hidePicture ? 'm-1':'mt-1'">
                    <div class="flex items-center" :class="{' items-center md:justify-center': !hidePicture}">
                        <span class="ballot-number" :class="{'pl-margin': hidePicture}">{{ candidate.ballot_number }}.</span>
                        <span class="profile-name">{{ candidate.name }}</span>
                    </div>
                </h2>
                <p class="pl-1 md:text-sm md:text-center leading-none">
                    <span class="profile-party" v-if="!hidePicture">{{ candidate.partylist }}</span>
                </p>
                <div class="md:mb-1" v-if="!hidePicture">
                <a :href="store.getProfileUrl(candidate)" 
                    class="check-profile px-1 rounded-full text-xs bg-gray-100 text-gray-600 hover:text-orange-700 hover:bg-yellow-400" 
                    target="_blank" title="Opens in new tab">Check Profile
                </a>
            </div>
            </div>
        </div>
        <!-- <button @click.stop.prevent="store.showProfile(candidate)">Open Modal</button> -->
    </div>
</template>
<script setup>
import { useCandidateStore } from '@/Stores/Candidate'

const store = useCandidateStore()

const props = defineProps({
    candidate: Object,
    hidePicture: {
        type: Boolean,
        default: false
    },
    selected: {
        type: Boolean,
        default: false
    },
    selectedIndex: {
        type: Number,
        default: null
    }
});
</script>