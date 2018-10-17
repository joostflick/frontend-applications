<template>
<div id="percentage">
    <h2>{{percentage}}%</h2>
    </div>
</template>
<script>

export default {
     data () {
        return {
        }
    }, props: {
        percentage: Number
    }
}
</script>

<style>
#percentage {
    margin: 3em;
    position: fixed;
    margin-left: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#percentage > h2 {
    font-size: 8em;
    border: 2px;
    padding: 0.2em;
    border-color: black;
    border-style:groove;
    border-radius: 25px;
    box-shadow: 10px 10px black;
    background-color: #6290C3;
    color: white;
    -webkit-text-stroke: 2px black;
}
</style>

