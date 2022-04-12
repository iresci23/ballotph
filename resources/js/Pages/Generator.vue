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
                doneText="Download"
            />
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import VrWizard from '@vurian/wizard';

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
  initial: store.wizard.lastSavedStep ?? "president",
  context: {
    completedSteps: store.wizard.completedSteps ?? [],
    senatorVoteLimitValid: true
  },
  states: {
    president: {
      title: 'President',
      id: 'president',
      stepView: PresidentStep,
      order: 0,
    },
    vice_president: {
      title: 'Vice President',
      id: 'vice_president',
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
      order: 4
    },
  },
} 

const options = {
  guards: {
    senatorVoteLimitValid: (ctx) => {
      let selectionCount = store.myBallot.senators.length;
      let isValid =  selectionCount <= store.votingLimits.senators
      return isValid;
    },
  }
}

const onComplete = () => {
  console.log("onComplete download")
  html2canvas(document.querySelector("#ballot-result")).then(canvas => {
    canvas.toBlob(function(blob) {
      window.saveAs(blob, 'my_image.jpg');
    });
  });
}
</script>

<script>
import SiteLayout from "@/Layouts/SiteLayout.vue";

export default {
    layout: SiteLayout
};
</script>
