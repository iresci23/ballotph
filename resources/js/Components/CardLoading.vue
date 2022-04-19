<template>
    <div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 p-2">
        <div class="border border-blue-300 shadow rounded-md max-w-sm w-full mx-auto">
            <div class="animate-pulse flex-col">
                <div v-if="!compact" class="bg-slate-700 h-48 w-full"></div>
                <div class="flex-1 space-y-6">
                <div class="space-y-1 p-4">
                    <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed } from 'vue'

const props = defineProps({
    compact: {
        type: Boolean,
        default: false
    }
});
</script>