<template>
    <Head title="Terms" />

    <section class="bg-white border-b py-10">
        <div class="container mx-auto px-8">
        Some content here
        </div>
    </section>

    <section class="gradient w-full mx-auto text-center pt-6 pb-12">
        <h2
            class="w-full my-2 text-5xl font-black leading-tight text-center text-white"
        >
            Are You Election Ready?
        </h2>
        <div class="w-full mb-4">
            <div
                class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
            ></div>
        </div>

        <h3 class="my-4 text-3xl font-extrabold">
            Be prepared for the election,
        </h3>
        <h3 class="my-4 text-3xl font-extrabold">
            generate a sample ballot based on your selections.
        </h3>

        <button
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg button-gradient"
        >
            Generate My Ballot
        </button>
    </section>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<script>
import SiteLayout from "./../Layouts/SiteLayout";

export default {
    // Using the shorthand
    layout: SiteLayout,
};
</script>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
    color: #718096;
    color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
    color: #1a202c;
    color: rgba(26, 32, 44, var(--tw-text-opacity));
}

/* Browser mockup code
    * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
    * Live example: https://updown.io
    */

.browser-mockup {
    border-top: 2em solid rgba(230, 230, 230, 0.7);
    position: relative;
    height: 100%;
}

.browser-mockup:before {
    display: block;
    position: absolute;
    content: "";
    top: -1.25em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f44;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
}

.browser-mockup > * {
    display: block;
}

/* Custom code for the demo */
@media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
}
</style>
