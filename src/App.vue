<template>
  <div id="app">
    <app-header></app-header>
    <button v-on:click="showForm = true">Risico indicator</button>
    <button v-on:click="showForm = false">Second opinion</button>
    <div id="body">
    <div v-if="showForm">
      <app-form></app-form>
    </div>
    <div v-else>
      <app-secondopinion></app-secondopinion>
    </div>
    <app-percentage v-if="showForm" v-bind:percentage="answer"></app-percentage>
</div>
  </div>

</template>

<script>
import { serverBus } from './main';
import { questions } from './questions';

export default {
  data () {
    return {
      questions,
      optionsArray: new Array(21),
      showForm: true,
      answer: 0,
      percentage: 1
    }
  },
 created() {
  // receive in bus
    serverBus.$on('questionValue', (value) => {
      //add to total array
   this.$data.optionsArray.splice(value[1], 1, value[0])
   // sum of array in the formula credits
   var answer = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + (this.$data.optionsArray.reduce((a, b) => a + b, 0)) ) ) ) * 100 ).toFixed( 2 ) )
    //change data 
   this.$data.answer = answer
  })
 }
  }

</script>

<style>
html {
font-family: system-ui;
}

#body {
  display: flex;
}
#app > button {
  margin-left: 3em;
  margin-top: 3em;
  font-style: roboto;
  font-size: 1em;
}


</style>
