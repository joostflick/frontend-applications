<template>
    <div>
        <h3>{{question.question}}</h3>
        <select v-model="selected" @change="addValue(selected)">
            <option disabled value="Leeg">Selecteer één antwoord:</option>
            <option v-for="option in question.options" v-bind:value="option.value" v-bind:key="option.id" :option='option'>{{option.label}}</option>
        </select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selected: 'Nog niets',
            
        }
    },
    props: {
        question: Object
    },
    methods: {
        addValue: function(test){
            var riskfactor = test
            console.log(riskfactor)
        },
    }
  }
</script>
<style>

</style>

