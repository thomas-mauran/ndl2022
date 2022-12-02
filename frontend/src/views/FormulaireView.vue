<script setup>
/* eslint-disable */
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter()

let prenom = ref("");
let nom = ref("");
let email = ref("");
let avis = ref("");
let borderPrenom = ref("");
let borderNom = ref("");
let borderEmail = ref("");
let borderAvis = ref("");

let hover = false;
let add = ref(48);

let disabledNom = ref(false);
let disabledPrenom = ref(false);
let disabledEmail = ref(false);
let disabledAvis = ref(false);


function changePos() {
  if (
    prenom.value == "" ||
    nom.value == "" ||
    email.value == "" ||
    avis.value == ""
  ) {
    if (prenom.value == "") {
      disabledPrenom.value = true;
      warnDisabled(disabledPrenom);
    } else {
      disabledPrenom.value = false;
    }
    if (nom.value == "") {
      disabledNom.value = true;
      warnDisabled(disabledNom);
    } else {
      disabledNom.value = false;
    }
    if (email.value == "") {
      disabledEmail.value = true;
      warnDisabled(disabledEmail);
    } else {
      disabledEmail.value = false;
    }
    if (avis.value == "") {
      disabledAvis.value = true;
      warnDisabled(disabledAvis);
    } else {
      disabledAvis.value = false;
    }

    let btn = document.getElementById("btn");
    btn.disabled = true;
    if (hover) {
      console.log("caca");
      hover = false;
      animationGauche();
    } else {
      console.log("prout");

      hover = true;
      animationDroite();
    }
  } else {
    borderAvis.value = "";
    borderEmail.value = "";
    borderNom.value = "";
    borderPrenom.value = "";
    let btn = document.getElementById("btn");
    btn.disabled = false;
  }
}

function animationDroite() {
  let id = null;
  let elem = document.getElementById("btn");
  var pos = elem.getBoundingClientRect().left;
  var temp = pos;
  clearInterval(id);
  id = setInterval(frame, 0.001);
  function frame() {
    if (pos > temp + 200) {
      clearInterval(id);
    } else {
      pos += 6;
      elem.style.left = pos + "px";
    }
  }
}

function click(){
    router.push({ path: '/formSubmitted' })
}
function warnDisabled(dis) {
  dis.value = true;
  setTimeout(() => {
    dis.value = false;
  }, 1500);
}
function animationGauche() {
  let id = null;
  let elem = document.getElementById("btn");
  var pos = elem.getBoundingClientRect().left;
  var temp = pos;
  clearInterval(id);
  id = setInterval(frame, 0.001);
  function frame() {
    if (pos < temp - 200) {
      clearInterval(id);
    } else {
      pos -= 6;
      elem.style.left = pos + "px";
    }
  }
}
</script>
<template>
  <div id="form">
    <h1>Feedback sur le jeu</h1>
    <h2>
      <label for="name">Nom : </label
      ><input
        :class="{ shake: disabledNom }"
        v-model="nom"
        type="text"
        id="name"
        name="name"
        placeholder="Nom"
        required
      />
    </h2>
    <h2>
      <label for="prenom">Prénom : </label
      ><input
        :class="{ shake: disabledPrenom }"
        v-model="prenom"
        type="text"
        id="prenom"
        name="prenom"
        placeholder="Prenom"
        required
      />
    </h2>
    <h2>
      <label for="email">Email : </label
      ><input
        :class="{ shake: disabledEmail }"
        v-model="email"
        type="text"
        id="email"
        name="email"
        placeholder="email"
        required
      />
    </h2>
    <h2><label for="avis">Votre avis : </label></h2>
    <h2>
      <textarea
        :class="{ shake: disabledAvis }"
        v-model="avis"
        style="resize: none"
        name="avis"
        id="avis"
        cols="30"
        rows="10"
        requiered
      ></textarea>
    </h2>
    <h2>
      <input
        style="position: absolute"
        :style="{ right: add + '%' }"
        @click="click"
        v-on:mouseover="changePos"
        id="btn"
        type="button"
        value="Valider"
      />
    </h2>
  </div>
</template>

<style>
div#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input {
  padding: 5px 0px;
  border: none;
  border-bottom: 1px solid black;
}

input::placeholder{
    font-size: 1.2em;
}

#btn {
  padding: 15px 25px;
  width: auto;
  color: white;
  background-color: rgb(59, 131, 52);
  border-radius: 10px;
  font-weight: bold;
}

#btn:disabled {
  padding: 15px 25px;
  width: auto;
  color: white;
  background-color: rgb(59, 131, 52);
  border-radius: 10px;
  font-weight: bold;
}

#btn:hover {
  background-color: darkgreen;
  color: white;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 0 0.5em red;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
