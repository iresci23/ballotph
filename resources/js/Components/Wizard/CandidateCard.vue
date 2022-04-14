<template>
    <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-2">
        <div
            class="c-card md:card-minheight-md lg:card-minheight-lg md:flex-col md:items-center max-h-28 md:max-h-full"
            :class="{'selected-card': selected}"
        >
            <div class="relative w-16 h-16 md:w-full md:h-full" :class="{'hidden' : hidePicture}">
                <span class="selected-index" v-if="selectedIndex">{{ selectedIndex }}</span>
                <img
                    class="grayscale hover:grayscale-0"
                    :src="candidate.picture ?? 'https://placehold.co/400x400'"
                    alt=""
                    @error="candidate.picture='https://placehold.co/400x400'" 
                />
            </div>
            <div class="px-2 md:px-0 flex-1 md:flex md:flex-col md:justify-center">
                <h2 class="mt-2 font-bold text-xs lg:text-sm">
                    <div class="flex items-center md:justify-center">
                        <span class="ballot-number">{{ candidate.ballot_number }}.</span>
                        <span class="profile-name">{{ candidate.name }}</span>
                    </div>
                </h2>
                <p class="pl-1 md:pl-0 md:text-sm md:text-center leading-none">
                    <span class="profile-party">{{ candidate.partylist }}</span>
                </p>
            </div>
        </div>
    </div> 
</template>
<script setup>
import { reactive, computed } from 'vue'

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