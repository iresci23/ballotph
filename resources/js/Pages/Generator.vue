<template>
    <Head title="Generator" />

    <div class="min-h-screen bg-white">
        <div class="container mx-auto wizard-generator" id="wizard-generator">
            <VrWizard 
                :options="options" 
                :id="config.id" 
                :context="config.context" 
                :states="config.states" 
                :initial="config.initial"
                :onComplete="onComplete"
                doneText="Download"
            />
            <div class="text-center py-4" v-if="store.wizard.lastSavedStep != 'president'">
              <a href="" @click.prevent="store.reset(() => { reload() })" class="underline">Click here to start over</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import VrWizard from '@vurian/wizard';

import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';

import PresidentStep from './../Components/Wizard/PresidentStep.vue';
import VicePresidentStep from './../Components/Wizard/VicePresidentStep.vue';
import SenatorStep from './../Components/Wizard/SenatorStep.vue';
import LocaleStep from './../Components/Wizard/LocaleStep.vue';
import PartyListStep from './../Components/Wizard/PartyListStep.vue';
import CompletedStep from './../Components/Wizard/CompletedStep.vue';
import { useCandidateStore } from '@/Stores/Candidate'

const props = defineProps({
    localities: Object
});

const store = useCandidateStore();

store.setLocalities(props.localities);

// console.log("localities", JSON.parse(JSON.stringify(props.localities)))

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
    locale: {
      title: 'Local Election',
      id: 'locale',
      stepView: LocaleStep,
      order: 3,
    },
    partylist: {
      title: 'Party List',
      id: 'partylist',
      stepView: PartyListStep,
      order: 4,
    },
    success: {
      title: 'Download',
      id: 'success',
      stepView: CompletedStep,
      order: 5
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
  let ballotDiv = document.getElementById('ballot-result');

  htmlToImage.toJpeg(ballotDiv, { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my_sample_ballot.jpeg';
    link.href = dataUrl;
    link.click();
  });

  console.log("download ballot")
}

function reload() {
  window.location.reload()
}
</script>

<script>
import SiteLayout from "@/Layouts/SiteLayout.vue";

export default {
    layout: SiteLayout
};
</script>
