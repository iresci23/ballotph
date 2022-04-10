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
import CompletedStep from './../Components/Wizard/CompletedStep.vue';
import { assign } from "xstate";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const config = {
  id: "generator",
  initial: "president",
  context: {
    completedSteps: [],
    president: '',
    vicePresident: '',
    senators: [],
    isAgreeToTerm: false
  },
  states: {
    president: {
      title: 'President',
      id: 'president',
      stepView: PresidentStep,
      order: 0,
      on: {
        /*...*/
        NEXT: {
            cond: 'isAgreeToTerm'
        }
      }
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
    },
    success: {
      title: 'Download',
      id: 'success',
      stepView: CompletedStep,
      order: 3,
      meta: {
        description: 'Order confirmed',
      },
    },
  },
} 

const options = {
  guards: {
    isAgreeToTerm: (ctx) => {
        // alert("validation")
        return true;
        // ctx.agreeToTerms && !!ctx.paymentMethod
    },
  }
}

const onComplete = () => {
    /* do something */
}
</script>

<script>
import SiteLayout from "./../Layouts/SiteLayout";
import IntroVue from '@/Components/Wizard/Intro.vue';

export default {
    // Using the shorthand
    layout: SiteLayout,

    // data() {
    //     return {
    //         currStep: 0,
    //         steps: [
    //             {
    //                 step: 0,
    //                 component: () => import('../Components/Wizard/Intro.vue')
    //             },
    //             {
    //                 step: 1,
    //                 component: () => import('../Components/Wizard/PresidentStep.vue')
    //             },
    //         ]
    //     };
    // }
};
</script>
