<script setup>
import {defineProps} from 'vue'
/* eslint-disabled */

const props = defineProps({
  name: String,
  classe: String,   
  task: String,
})
</script>
<template>
    <div class="card">
        <img src="../assets/codage.png" alt="Coding guy">
        <h1>{{props.name}}</h1>
        <h3>{{props.classe}}</h3>
        <h4>Taches : {{props.task}}</h4>
    </div>
</template>
<style>
    .card{
        min-width: 200px;
        margin: 40px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
    }
    .card img{
        max-width: 100px;
    }

    .card:hover{
        transition: ease-in-out 0.1s;
        transform: scale(1.1);
    }
</style>