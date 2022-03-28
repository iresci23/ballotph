<template>
    <header>
        <nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-6">
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
            >
                <div class="pl-4 flex items-center">
                    <a
                        class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="/"
                    >
                        <img
                            src="/images/Ballot_Logo.png"
                            alt="Logo"
                            class="logo"
                        />
                        Sample Ballot Generator
                    </a>
                </div>

                <Link href="/generator">
                  <button
                      id="navAction"
                      class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient"
                  >
                      Generate My Ballot
                  </button>
                </Link>
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
            <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6">
                    <a
                        class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        Sample Ballot Generator
                    </a>
                </div>

                <div class="flex-1">
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
                </div>
                <div class="flex-1">
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
                </div>
                <div class="flex-1">
                    <p class="uppercase font-extrabold text-gray-500 md:mb-6">
                        Company
                    </p>
                    <ul class="list-reset mb-6">
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
                    </ul>
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
    },
};
</script>
