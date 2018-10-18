<template>
    <div>
        <h3>{{question.question}}</h3>
        <select v-model="selected" @change="addValue(selected, question.id)">
            <option disabled value="Leeg">Selecteer één antwoord:</option>
            <option v-for="option in question.options" v-bind:value="option.value" v-bind:key="option.id" :option='option'>{{option.label}}</option>
        </select>
    </div>
</template>
<script>
import { serverBus } from './main';

export default {
    data () {
        return {
            selected: 'Nog niets',
            
        }
    },
    props: {
        question: Object,
    },
    methods: {
        addValue: function(thevalue, id){
            serverBus.$emit('questionValue', [thevalue, id]);
        },
    }
  }
</script>
<style>

</style>

