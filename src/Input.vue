<template>
    <div>
        <h3>{{question.question}}</h3>
       <select v-model="selected">
  <option disabled value="Leeg">Selecteer één antwoord:</option>
  <option v-for="option in question.options" v-bind:key="option.id" :option='option'>{{option}}</option>
</select>
<p>Geselecteerd: {{ selected }}</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selected: 'Nog niets'
        }
    },
    props: {
        question: Object
    }
}
</script>
