<template>
    <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-4">
        <div
            class="c-card md:flex-col md:items-center"
            :class="{'selected-card': selected}"
        >
            <div class="relative w-full" :class="{'hidden' : hidePicture}">
                <img
                    class="w-24 h-full md:w-full md:max-h-48"
                    :src="candidate.picture ?? 'https://placehold.co/400x400'"
                    alt=""
                    @error="candidate.picture='https://placehold.co/400x400'" 
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
    }
});
</script>