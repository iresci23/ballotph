<script setup>
import { computed, onMounted } from 'vue'
import { useCandidateStore } from '@/Stores/Candidate'
import Alert from '@/Components/Alert.vue'

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.saveCompletedSteps(
    props.service.state.context.completedSteps, 
    props.service.state.value
);

const selectedLocale = computed(() => {
  return store.selectedLocale ?? [];
})

const myBallot = computed(() => {
  return store.myBallot ?? [];
})

onMounted(() => {
  document.getElementById('wizard-generator').scrollIntoView({
      behavior: 'smooth', block: 'start'
  });
});
</script>
<template>

    <Alert class="bg-green-500 mb-6 py-4">
        <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        </template>
        <template #text>
            Congrats! Maari mo nang i-download ang iyong sample ballot.
        </template>
    </Alert>

    <div class="flex justify-center">

        <div class="bg-white shadow-md" id="ballot-result">
            <div class="flex flex-col justify-between p-4">
                <div>
                    <h1 class="font-bold text-center">
                        <span>May 9, 2022</span><br>
                        <span>NATIONAL AND LOCAL ELECTIONS</span>
                    </h1>
                </div>
                <!-- <div class="flex">
                    <p>Type: National and Local</p>
                    <p>INSTRUCTIONS FOR VOTING
                        (1) Completely blacken the inside of the circle 
                        beside the name of the desired candidate.
                        (2) Use only the marking pen provided for
                        blackening the circles.
                        (3) Do not blacken more circles that what is intended
                    </p>
                </div> -->
                <div class="flex flex-col items-center p-2 text-center">
                    <img
                        src="/images/SBGLOGO.png"
                        alt="Logo"
                        class="logo mr-5 ml-5"
                    />
                    <p class="pt-2">Sample Ballot Generator</p>
                    <p class="text-sm">phballotgenerator.com</p>
                </div>
            </div>

            <div v-if="selectedLocale.city_dist">
                <h3>{{ selectedLocale.province }} > <b>{{ selectedLocale.city_dist }}</b></h3>
            </div>

            <div class="flex flex-col ballot-border">

                <!-- President -->
                <div class="bg-sky-600 text-white flex ballot-border ballot-center h-14"><h2 class="self-center">PRESIDENT / Vote for 1</h2></div>
                <div>
                    <div v-if="myBallot.president" class="ballot-center">
                        <span>
                            <span class="pr-2">{{ myBallot.president.ballot_number }}.</span>
                            <span>{{ myBallot.president.name }}</span>
                        </span>
                    </div>
                    <div v-else class="ballot-center">
                        <span>--UNDERVOTE--</span>
                    </div>
                </div>

                <!-- Vice President -->
                <div class="bg-green-600 text-white ballot-border ballot-center h-14"><h2>VICE PRESIDENT / Vote for 1</h2></div>
                <div>
                    <div v-if="myBallot.vice_president" class="ballot-center">
                        <span>
                            <span class="pr-2">{{ myBallot.vice_president.ballot_number }}.</span>
                            <span>{{ myBallot.vice_president.name }}</span>
                        </span>
                    </div>
                    <div v-else class="ballot-center">
                        <span>--UNDERVOTE--</span>
                    </div>
                </div>

                <!-- Senators -->
                <div class="bg-sky-600 text-white ballot-border ballot-center h-14"><h2>SENATOR / Vote for 12</h2></div>
                <div class="py-3">
                    <div class="md:ballot-grid px-3 md:pr-0 md:pl-12" v-if="myBallot.senators.length">
                        <div v-for="candidate in myBallot.senators" :key="candidate.id">
                            <div>
                                <span>
                                    <span class="pr-2">{{ candidate.ballot_number }}.</span>
                                    <span>{{ candidate.name }}</span>
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div v-else class="ballot-center">
                        <span>--UNDERVOTE--</span>
                    </div>
                </div>

                <!-- Start local election section -->
                <div v-if="selectedLocale && selectedLocale.id">

                    <!-- MEMBER, HOUSE OF REPRESENTATIVES -->
                    <div class="bg-green-600 text-white ballot-border ballot-center h-14"><h2>MEMBER, HOUSE OF REPRESENTATIVES / Vote for 1</h2></div>
                    <div>
                        <div v-if="myBallot.house_representative" class="ballot-center">
                            <span>
                                <span class="pr-2">{{ myBallot.house_representative.ballot_number }}.</span>
                                <span>{{ myBallot.house_representative.name }}</span>
                            </span>
                        </div>
                        <div v-else class="ballot-center">
                            <span>--UNDERVOTE--</span>
                        </div>
                    </div>

                    <div v-if="selectedLocale.prov_saggunian_member_limit > 0">
                        <!-- PROVINCIAL GOVERNOR -->
                        <div class="bg-sky-600 text-white ballot-border ballot-center"><h2>PROVINCIAL GOVERNOR / Vote for 1</h2></div>
                        <div>
                            <div v-if="myBallot.governor" class="ballot-center">
                                <span>
                                    <span class="pr-2">{{ myBallot.governor.ballot_number }}.</span>
                                    <span>{{ myBallot.governor.name }}</span>
                                </span>
                            </div>
                            <div v-else class="ballot-center">
                                <span>--UNDERVOTE--</span>
                            </div>
                        </div>

                        <!-- PROVINCIAL VICE GOVERNOR -->
                        <div class="bg-green-600 text-white ballot-border ballot-center"><h2>PROVINCIAL VICE-GOVERNOR / Vote for 1</h2></div>
                        <div>
                            <div v-if="myBallot.vice_governor" class="ballot-center">
                                <span>
                                    <span class="pr-2">{{ myBallot.vice_governor.ballot_number }}.</span>
                                    <span>{{ myBallot.vice_governor.name }}</span>
                                </span>
                            </div>
                            <div v-else class="ballot-center">
                                <span>--UNDERVOTE--</span>
                            </div>
                        </div>

                        <!-- MEMBER, SANGGUNIANG PANLALAWIGAN -->
                        <div class="bg-sky-600 text-white ballot-border ballot-center">
                            <h2>MEMBER, SANGGUNIANG PANLALAWIGAN / Vote for {{ selectedLocale.prov_saggunian_member_limit }}</h2>
                        </div>
                        <div class="py-3">
                            <div class="md:ballot-grid px-3 md:pr-0 md:pl-12" v-if="myBallot.prov_sang_members.length">
                                <div v-for="candidate in myBallot.prov_sang_members" :key="candidate.id">
                                    <div>
                                        <span>
                                            <span class="pr-2">{{ candidate.ballot_number }}.</span>
                                            <span>{{ candidate.name }}</span>
                                        </span> 
                                    </div>
                                </div>
                            </div>
                            <div v-else class="ballot-center">
                                <span>--UNDERVOTE--</span>
                            </div>
                        </div>
                    </div>

                    <!-- MAYOR -->
                    <div class="bg-green-600 text-white ballot-border ballot-center"><h2>MAYOR / Vote for 1</h2></div>
                    <div>
                        <div v-if="myBallot.mayor" class="ballot-center">
                            <span>
                                <span class="pr-2">{{ myBallot.mayor.ballot_number }}.</span>
                                <span>{{ myBallot.mayor.name }}</span>
                            </span>
                        </div>
                        <div v-else class="ballot-center">
                            <span>--UNDERVOTE--</span>
                        </div>
                    </div>

                    <!-- VICE MAYOR -->
                    <div class="bg-sky-600 text-white ballot-border ballot-center"><h2>VICE-MAYOR / Vote for 1</h2></div>
                    <div>
                        <div v-if="myBallot.vice_mayor" class="ballot-center">
                            <span>
                                <span class="pr-2">{{ myBallot.vice_mayor.ballot_number }}.</span>
                                <span>{{ myBallot.vice_mayor.name }}</span>
                            </span>
                        </div>
                        <div v-else class="ballot-center">
                            <span>--UNDERVOTE--</span>
                        </div>
                    </div>

                    <!-- MEMBER, SANGGUNIANG BAYAN -->
                    <div class="bg-green-600 text-white ballot-border ballot-center">
                        <h2>MEMBER, SANGGUNIANG BAYAN / Vote for {{ selectedLocale.city_saggunian_member_limit }}</h2>
                    </div>
                    <div class="py-3">
                        <div class="md:ballot-grid px-3 md:pr-0 md:pl-12" v-if="myBallot.city_sang_members.length">
                            <div v-for="candidate in myBallot.city_sang_members" :key="candidate.id">
                                <div>
                                    <span>
                                        <span class="pr-2">{{ candidate.ballot_number }}.</span>
                                        <span>{{ candidate.name }}</span>
                                    </span> 
                                </div>
                            </div>
                        </div>
                        <div v-else class="ballot-center">
                            <span>--UNDERVOTE--</span>
                        </div>
                    </div>

                </div> <!-- End local election -->

                <!-- Partylist -->
                <div class="bg-sky-600 text-white ballot-border ballot-center"><h2>PARTY LIST / Vote for 1</h2></div>
                <div>
                    <div v-if="myBallot.partylist" class="ballot-center">
                        <span>
                            <span class="pr-2">{{ myBallot.partylist.ballot_number }}.</span>
                            <span>{{ myBallot.partylist.name }}</span>
                        </span>
                    </div>
                    <div v-else class="ballot-center">
                        <span>&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center">
        <small>Maari mong <b>i-screenshot</b> ang page na'to, o i-click ang <b>"Download"</b>.</small>
    </div>
</template>