<template>
    <header>
        <nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-4">
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2"
            >
                <div class="md:pl-4 flex lg:items-center">
                    <a
                        class="text-black no-underline hover:no-underline font-bold text-sm flex items-center"
                        href="/">
                        <img
                            src="/images/SBGLOGO.png"
                            alt="Sample Ballot Generator Logo"
                            class="logo mr-5 ml-5 md:ml-0"
                        />
                        <div class="flex flex-col">
                            <span>Sample Ballot</span>
                            <span>Generator</span>
                        </div>
                    </a>
                </div>

                <!-- <Link href="/generator">
                  <button
                      id="navAction"
                      class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient"
                  >
                      Generate My Ballot
                  </button>
                </Link> -->

            </div>
        </nav>
        <!-- <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link> -->
    </header>
    <main>
        <slot />
    </main>

    <footer class="bg-white">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6 md:pb-0">
                <div class="flex-1 flex md:mb-6 flex-row flex-wrap justify-center">
                    <div class="flex md:footer-text-logo footer-text-logo-small">
                        <div class="md:pr-5">
                            <img src="/images/SBGLOGO.png" alt="Logo" class="logo ml-0">
                        </div>
                    </div>
                    <div class="flex flex-col flex-start justify-center xl:items-start">
                        <div class="flex flex-col flex-wrap items-center pt-5 md:pt-0">
                            <a class="text-black no-underline hover:no-underline font-bold text-lg lg:text-md"
                            href="#">
                            Sample Ballot Generator</a>
                        </div>
                        <div class="flex xl:footer-links flex-start">
                            <ul class="list-reset mb-6 text-center md:text-justify">
                                <li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6">
                                    <a
                                    href="/privacy"
                                    class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >Privacy Policy</a>
                                </li>
                                <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6">
                                    <a
                                        href="#"
                                        class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                        >About Us</a
                                    >
                                </li>
                                <li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6">
                                    <a
                                        href="#"
                                        class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                        >Contact Us</a
                                    >
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex-1">
                    <p class="uppercase font-extrabold text-gray-500 md:mb-6">
                        Links
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >FAQ</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Terms</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Privacy</a
                            >
                        </li>
                    </ul>
                </div> -->
                <!-- <div class="flex-1">
                    <p class="uppercase font-extrabold text-gray-500 md:mb-6">
                        Social
                    </p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Facebook</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Linkedin</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Twitter</a
                            >
                        </li>
                    </ul>
                </div> -->
                <div class="flex-1 flex md:m-5 md:ml-5 md:footer-kofi flex-col flex-wrap items-center">
                    <div class="md:pt-5 pb-3">
                        <p class=" text-black text-center md:text-left text-xs">
                        Hi! If this app helped you, <br>
                        maybe you can buy us coffee? ❤</p>
                    </div>
                    <div class="flex">
                        <a href="https://ko-fi.com/codesandpaws" target="blank">
                        <img class="h-6" src="/images/Kofi_pixel_logo_with_text_dark.png" alt="Kofi Logo">
                        </a>
                    </div>
                    <!-- <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >About Us</a
                            >
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Contact</a
                            >
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    }
};
</script>
