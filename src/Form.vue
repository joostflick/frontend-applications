<template>
    <div id="questionform">
        <h1>Beantwoord de volgende vragen:</h1>
        <h2>Vul alle vragen in om een accuraat resultaat te krijgen</h2>
        <app-input v-for="question in questions" v-bind:key="question.question" :question='question' />
    </div>
</template>

<script>
import questions from './questions.js'
export default {
    data () {
        return {
            questions
        }
    }
}
</script>
<style>
#questionform {
    display: flex;
    flex-direction: column;
    margin: 3em;
    margin-top: 1em;
}
</style>
