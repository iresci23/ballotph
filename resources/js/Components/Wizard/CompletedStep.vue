<script setup>
import { computed } from 'vue'
import { useCandidateStore } from '@/Stores/Candidate'

const store = useCandidateStore()

const props = defineProps({
    service: Object
});

store.saveCompletedSteps(props.service.state.context.completedSteps, props.service.state.value)
</script>
<template>
    <div class="w-full bg-white" id="ballot-result">
        <div class="flex">
            <div>
                <h1>May 9, 2022 NATIONAL AND LOCAL ELECTIONS</h1>
            </div>
            <div>
                <img
                    src="/images/SBGLOGO.png"
                    alt="Logo"
                    class="logo mr-5 ml-5 md:ml-0"
                />
                <p>Sample Ballot Generator</p>
                <p>phballotgenerator.com</p>
            </div>
        </div>
        <div class="flex flex-col">

            <!-- President -->
            <div class="bg-sky-600 text-white h-10 flex"><h2 class="self-center">PRESIDENT / Vote for 1</h2></div>
            <div>
                <div v-if="store.myBallot.president">
                    <span>
                        <span>{{ store.myBallot.president.ballot_number }}.</span>
                        <span>{{ store.myBallot.president.name }}</span>
                    </span>
                </div>
                <div v-else>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- Vice President -->
            <div class="bg-teal-600 text-white"><h2>VICE PRESIDENT / Vote for 1</h2></div>
            <div>
                <div v-if="store.myBallot.vice_president">
                    <span>
                        <span>{{ store.myBallot.vice_president.ballot_number }}.</span>
                        <span>{{ store.myBallot.vice_president.name }}</span>
                    </span>
                </div>
                <div v-else>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- Senators -->
            <div class="bg-sky-600 text-white"><h2>SENATOR / Vote for 12</h2></div>
            <div>
                <div class="grid grid-cols-3 gap-3"  v-if="store.myBallot.senators">
                    <div v-for="candidate in store.myBallot.senators" :key="candidate.id">
                        <div>
                            <span>
                                <span>{{ candidate.ballot_number }}.</span>
                                <span>{{ candidate.name }}</span>
                            </span> 
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- MEMBER, HOUSE OF REPRESENTATIVES -->
            <div class="bg-teal-600 text-white"><h2>MEMBER, HOUSE OF REPRESENTATIVES / Vote for 1</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- PROVINCIAL GOVERNOR -->
            <div class="bg-sky-600 text-white"><h2>PROVINCIAL GOVERNOR / Vote for 1</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- PROVINCIAL VICE GOVERNOR -->
            <div class="bg-teal-600 text-white"><h2>PROVINCIAL VICE-GOVERNOR / Vote for 1</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- MEMBER, SANGGUNIANG PANLALAWIGAN -->
            <div class="bg-sky-600 text-white"><h2>MEMBER, SANGGUNIANG PANLALAWIGAN / Vote for 2</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- MAYOR -->
            <div class="bg-teal-600 text-white"><h2>MAYOR / Vote for 1</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- VICE MAYOR -->
            <div class="bg-sky-600 text-white"><h2>VICE-MAYOR / Vote for 1</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- MEMBER, SANGGUNIANG BAYAN -->
            <div class="bg-teal-600 text-white"><h2>MEMBER, HOUSE OF REPRESENTATIVES / Vote for 8</h2></div>
            <div>
                <div>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

            <!-- Partylist -->
            <div class="bg-sky-600 text-white"><h2>PARTY LIST / Vote for 1</h2></div>
            <div>
                <div v-if="store.myBallot.partylist">
                    <span>
                        <span>{{ store.myBallot.partylist.ballot_number }}.</span>
                        <span>{{ store.myBallot.partylist.name }}</span>
                    </span>
                </div>
                <div v-else>
                    <span>--UNDERVOTE--</span>
                </div>
            </div>

        </div>
    </div>
</template>