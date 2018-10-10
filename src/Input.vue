<template>
    <div>
        <h3>Is dit het geval?</h3>
       <select v-model="selected">
  <option disabled value="Leeg">Selecteer één antwoord:</option>
  <option>Optie 1</option>
  <option>Optie 2</option>
  <option>Optie 3</option>
</select>
<span>Geselecteerd: {{ selected }}</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selected: 'Nog niets'
        }
    }
}
</script>
