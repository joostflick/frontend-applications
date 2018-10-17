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
    <app-percentage v-if="showForm" v-bind:percentage="formula"></app-percentage>
</div>
  </div>

</template>

<script>

export default {
  data () {
    var num = 5;
    return {
      formula: Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + num ) ) ) * 100 ).toFixed( 2 ) ),
      showForm: true
    }
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
