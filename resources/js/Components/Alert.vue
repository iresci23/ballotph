<template>
    <p class="text-white text-center text-bold bg-red-500 flex justify-center">
        <span class="mr-2">
            <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </slot>
        </span>
        <span>
            <slot name="text"></slot>
        </span>
    </p>
</template>