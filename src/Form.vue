<template>
    <div id="questionform">
        <app-input v-for="question in questions" v-bind:key="question.id" :question='question' />
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
