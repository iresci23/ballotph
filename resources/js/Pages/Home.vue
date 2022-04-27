<template>
    <Head title="Home" />

    <div class="container mx-auto h-screen">
        <div class="text-center px-3 lg:px-0">
            <h1
                class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                Election Ready ka na ba?
            </h1>
            <div class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mt-8 mb-8">
                <p class="font-medium p-2">
                    Hindi na pwede ang hula-hula!
                </p>
                <p>
                    Mag generate ng sample ballot para tama ang mailagay sa balota. Tara na!
                </p>
            </div>

            <Link href="/generator" @click.prevent="store.gtag('home_generate_button_click')">
                  <button
                      id="navAction"
                      class="mx-auto lg:mx-0 hover:underline text-black font-bold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient drop-shadow-md">
                      Generate My Ballot
                  </button>
            </Link>
        </div>

        <div class="flex items-center w-full mx-auto content-end">
            <div
                class="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
            >
                <img
                    src="/images/Sample_Ballot_Comelec.png"
                    alt="Sample Ballot"
                />
            </div>
        </div>
    </div>

    <section class="bg-white border-b pt-10 xl:pt-72 lg:pt-40">
        <div
            class="container mx-auto flex flex-wrap items-center justify-between pb-12">
            <h2
                class="w-full my-2 lg:text-3xl text-2xl font-black leading-tight text-center text-gray-800 md:pt-4 xl:pt-2">
                Paano gamitin ang Generator
            </h2>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
                </div>
            </div>

            <div class="w-full">
                <div class="p-5 pb-0">
                    <p class="text-center lg:text-2xl text-xl pb-4">
                        Hindi na kailangan mag sign-up. <strong>Libre 'to!</strong>
                    </p>
                    <p class="text-center lg:text-2xl text-xl">
                        Madali lang mag generate ng personalized sample ballot with these easy steps:
                    </p>
                </div>
                <div class="w-full p-5 flex justify-center">
                    <ul class="list-decimal md:max-w-3xl text-left">
                        <li class="p-3 text-lg">I-click ang "Create My Ballot" button para mag simula.</li>
                        <img class="md:max-w-2xl mx-auto" src="/images/step-one.png" alt="">
                        <li class="p-3 text-lg">Piliin ang kandidatong gusto mong iboto at i-click ang "Next" button.</li>
                        <img class="md:max-w-2xl mx-auto" src="/images/step-two.png" alt="">
                        <li class="p-3 text-lg">I-check ang listahan at i-click ang “Download” button para ma-save sa'yong device ang personalized sample ballot mo.</li>
                        <img class="md:max-w-2xl mx-auto" src="/images/step-three.png" alt="">
                        <li class="p-3 text-lg">At 'yun na! <strong>Mayroon ka ng sample ballot para sa May 9!</strong></li>
                        <!-- <img src="https://placehold.co/600x400" alt=""> -->
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="gradient border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <h2
                class="w-full my-2 text-2xl md:text-4xl font-black leading-tight text-center text-gray-800">
                Useful Links
            </h2>
            <div class="w-full mb-4"> <!--grayline-->
                <div
                    class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                ></div>
                <div class="usefullinksdiv">
                    <a class="my-4 md:mx-4" href="https://comelec.gov.ph/" target="_blank">
                        <img class="md:usefullinksimg" src="/images/COMELECLOGO.png" alt="COMELEC Logo">
                    </a>
                    <a class="my-4 md:mx-4" href="https://eboto.ph/" target="_blank">
                        <img class="md:usefullinksimg" src="/images/EBOTOLOGO.svg" alt="eBoto Logo">
                    </a>
                    <a class="my-4 md:mx-4" href="https://votepilipinas.com/" target="_blank">
                        <img class="md:usefullinksimg" src="/images/VOTEPILIPINASLOGO.png" alt="Vote Pilipinas Logo">
                    </a>
                    <a class="my-4 md:mx-4" href="https://voterverifier.comelec.gov.ph/voter_precinct" target="_blank">
                        <img class="md:usefullinksimg" src="/images/precinct4.png" alt="Precinct Finder">
                    </a>
                </div>
            </div>

            <div class="flex flex-col items-center text-justify p-1">
                <h3 class="font-bold">Disclaimer:</h3>
                <p class="py-4">
                    We are not affiliated, associated, authorized or in any way officially connected with the <strong>Commissions on Elections (COMELEC)</strong>. 
                    The official COMELEC website can be found at <a class="hover:underline" href="https://comelec.gov.ph/" target="_blank">https://comelec.gov.ph/</a>. 
                </p>
                <p>
                    This website aims to provide convenience to Filipino voters for the upcoming 2022 Elections.
                </p>
            </div>
        </div>
    </section>
    <!-- <section class="bg-white w-full mx-auto text-center pt-6 pb-12">
        <h2
            class="w-full my-2 text-5xl font-black leading-tight text-center text-bl">
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
    </section> -->
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import { useCandidateStore } from '@/Stores/Candidate'

const store = useCandidateStore();
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
