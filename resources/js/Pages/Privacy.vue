<template>
    <Head title="Privacy" />

    <section class="bg-white border-b py-10">
        <div class="container mx-auto md:px-8 max-w-6xl">
        <div class="pb-4">
            <h1 class="text-4xl font-bold text-center pb-10">Privacy Policy</h1>
            <p class="">Updated: April 2022</p>
        </div>
        <div class="priv-spacing">
            <p>Codes & Paws (“us”, “we”, or “our”) operates phballotgenerator.com (the “Site”).
                This page informs you of our policies regarding the collection, use and disclosure of information about users of the Site. By using the Site, you agree to the collection, use and disclosure of information (the “Information”) in accordance with this policy.</p>
        </div>
        <div class="priv-spacing">
            <h2>Information Collected</h2>
            <p>
                Personal Information. We value your privacy. We DO NOT collect personally identifiable information that can be used to contact or identify you.
            </p>
        </div>
        <div class="priv-spacing">
            <h2>Site Visit Information</h2>
            <p>
                We may collect information that your browser sends whenever you visit the Site, which may include information such as your computer’s IP address, browser type, browser version, the pages of the Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. We and/or we may engage third parties to use cookies, web beacons and other tracking technologies to collect information about you when you interact with the Site, including information about your browsing behavior on the Site.
            </p>
        </div>
        <div class="priv-spacing">
            <h2>Use of Information</h2>
            <p>We may use the Information to improve the Site and your browsing experience, monitor and analyze trends, usage and activities, see which areas and features of the Sites are popular, count visits etc.</p>
        </div>
        <div class="priv-spacing">
            <h2>Other </h2>
            <p>
                We may use the Information to carry out any other purpose for which the Information was collected.
            </p>
        </div>
        <div class="priv-spacing">
            <h2>Cookies</h2>
            <p>
                Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you choose to remove or reject cookies, this could affect the availability and functionality of the Site.
            </p>
        </div>
        <div class="priv-spacing">
            <h2>Policy Changes</h2>
            <p>
                We may update this Privacy Policy from time-to-time by posting a new version on to this page.
            </p>
        </div>
        <div class="priv-spacing">
            <h2>Contact</h2>
            <p>If you have any questions or concerns, please contact us at codesandpaws@gmail.com</p>
        </div>
    </div>
    </section>

    <!-- <section class="gradient w-full mx-auto text-center pt-6 pb-12">
        <h2
            class="w-full my-2 text-5xl font-black leading-tight text-center text-white">
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
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg button-gradient">
            Generate My Ballot
        </button>
    </section> -->
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
