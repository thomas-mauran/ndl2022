<script setup>
import cardComponent from "../components/CardComponent.vue";

let team = [
  {
    name: "Damien Mathieu",
    classe: "Iut de montpellier 2 eme année",
    task: "Formulaire intéractif",
  },
  {
    name: "Quentin Berel",
    classe: "Iut de montpellier 2 eme année",
    task: "Défi global (jeu visual novel)",
  },
  {
    name: "Frache Axel",
    classe: "Iut de montpellier 2 eme année",
    task: "Formulaire intéractif",
  },
  {
    name: "Gonfiantini Gaëtan",
    classe: "Iut de montpellier 2 eme année",
    task: "Formulaire intéractif",
  },
  {
    name: "Bouzayen Hamza",
    classe: "Iut de montpellier 2 eme année",
    task: "Défi global (jeu visual novel)",
  },
  {
    name: "Mauran Thomas",
    classe: "Polytech DO 3eme année",
    task: "host + défis empreinte écologique",
  },
];
</script>
<template>
  <div class="main">
    <h2>Notre équipe !</h2>

    <div class="grid">
      <cardComponent
        v-for="guy in team"
        :key="guy.name"
        :name="guy.name"
        :classe="guy.classe"
        :task="guy.task"
      />
    </div>
  </div>
</template>

<style>
.main{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.grid {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 70px;
  grid-row-gap: 0px;
}

@media only screen and (max-width: 1000px) {
  .grid{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
