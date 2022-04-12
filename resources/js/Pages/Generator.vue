<template>
    <Head title="Generator" />

    <div class="min-h-screen bg-white">
        <div class="container mx-auto wizard-generator">
            <VrWizard 
                :options="options" 
                :id="config.id" 
                :context="config.context" 
                :states="config.states" 
                :initial="config.initial"
                :onComplete="onComplete"
            />
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";

import VrWizard from '@vurian/wizard';
import Intro from './../Components/Wizard/Intro.vue';
import PresidentStep from './../Components/Wizard/PresidentStep.vue';
import VicePresidentStep from './../Components/Wizard/VicePresidentStep.vue';
import SenatorStep from './../Components/Wizard/SenatorStep.vue';
import PartyListStep from './../Components/Wizard/PartyListStep.vue';
import CompletedStep from './../Components/Wizard/CompletedStep.vue';
import { useCandidateStore } from '@/Stores/Candidate'

const props = defineProps({
    candidates: Object
});

const store = useCandidateStore();

// console.log("candidates", JSON.parse(JSON.stringify(props.candidates)))
store.setList(props.candidates);

const config = {
  id: "generator",
  initial: "president",
  context: {
    completedSteps: [],
    senatorVoteLimitValid: true
  },
  states: {
    president: {
      title: 'President',
      id: 'president',
      stepView: PresidentStep,
      order: 0,
    },
    vicePresident: {
      title: 'Vice President',
      id: 'vicePresident',
      stepView: VicePresidentStep,
      order: 1,
    },
    senator: {
      title: 'Senators',
      id: 'senator',
      stepView: SenatorStep,
      order: 2,
      on: {
        /*...*/
        NEXT: {
            cond: 'senatorVoteLimitValid'
        }
      }
    },
    partylist: {
      title: 'Party List',
      id: 'partylist',
      stepView: PartyListStep,
      order: 3,
    },
    success: {
      title: 'Download',
      id: 'success',
      stepView: CompletedStep,
      order: 4,
      meta: {
        description: 'Order confirmed',
      },
    },
  },
} 

const options = {
  guards: {
    senatorVoteLimitValid: (ctx) => {
      let selectionCount = store.myBallot.senators.length;
      let isValid =  selectionCount <= store.votingLimits.senators

      if (!isValid) {
        alert("You've reached the maximum number of allowed selection for senatorial position.")
      }
      return isValid;
    },
  }
}

const onComplete = () => {
    /* do something */
}
</script>

<script>
import SiteLayout from "@/Layouts/SiteLayout.vue";

export default {
    layout: SiteLayout
};
</script>
