
<script setup>
/* eslint-disable */

import { ref } from "vue"
    let prenom = ref('')
    let nom = ref('')
    let email = ref('')
    let avis = ref('')
    let borderPrenom = ref('')
    let borderNom = ref('')
    let borderEmail = ref('')
    let borderAvis = ref('')
    let fontsize = ref()

    let animation = ref('')
    let disabled = ref(false)
    let height = ref()
    let hover = false
    let add = ref(48)
    let size = ref(100)

    let disabledNom = ref(false)
    let disabledPrenom = ref(false)
    let disabledEmail = ref(false)
    let disabledAvis = ref(false)

    let isActive = ref(false);
    let isActiveNom = ref(false);
    let style;
    function changePos(){
        if (prenom.value ==''||nom.value ==''||email.value == ''||avis.value == ''){
            if (prenom.value == ''){
                disabledPrenom.value = true
                warnDisabled(disabledPrenom)            }
            else
            {
                disabledPrenom.value = false
            }
            if (nom.value == ''){
                disabledNom.value = true
                warnDisabled(disabledNom)

            }
            else
            {
                disabledNom.value = false
            }
            if (email.value == ''){
                disabledEmail.value = true
                warnDisabled(disabledEmail)            }
            else
            {
                disabledEmail.value = false
            }
            if (avis.value == ''){
                disabledAvis.value = true
                warnDisabled(disabledAvis)            }
            else
            {
                disabledAvis.value = false
            }
            size.value += 100
            
            fontsize.value = '1.5rem'
            let btn = document.getElementById("btn");
            style = "width: 200 px"
            btn.disabled= true;
            if(hover){
                add.value -= 10
                hover = false
                animationGauche()
            }
            else{
                add.value += 10
                hover = true
                animationDroite();

            }
        }
        else{
            borderAvis.value = ''
            borderEmail.value = ''
            borderNom.value = ''
            borderPrenom.value = ''
            let btn = document.getElementById("btn");
            btn.disabled= false;
        }

        }

        function animationDroite() {
            let id=null;
            let elem = document.getElementById("btn");   
            var pos = elem.getBoundingClientRect().left;
            clearInterval(id);
            id = setInterval(frame, 0.001);
            function frame() {
                if (pos > 800) {
                    clearInterval(id);
                } else {
                    if (pos==800){

                    }
                    pos+=6;
                    elem.style.left = pos + 'px'; 
                }
            }
        }
        function warnDisabled(dis) {
            dis.value = true
            setTimeout(() => {
                dis.value = false
            }, 1500)
        }
        function animationGauche() {
            let id=null;
            let elem = document.getElementById("btn");   
            var pos = elem.getBoundingClientRect().left;
            clearInterval(id);
            id = setInterval(frame, 0.001);
            function frame() {
                if (pos < 600) {
                    clearInterval(id);
                } else {
                    pos-=6;
                    elem.style.left = pos + 'px'; 
                }
            }
        }
        
</script>
<template>
    <div id="form">
        <h1>Feedback sur le jeu </h1>
        <p><label for="name">Nom : </label><input :class="{ shake: disabledNom }"  v-model="nom" type="text" id="name" name="name"  required /></p>
        <p><label for="prenom">Prénom : </label><input :class="{ shake: disabledPrenom }"  v-model="prenom"  type="text" id="prenom" name="prenom"  required /></p>
        <p><label for="email">Email : </label><input :class="{ shake: disabledEmail}" v-model="email" type="text" id="email" name="email" required></p>
        <label for="avis">Votre avis : </label><p><textarea :class="{ shake: disabledAvis }" v-model="avis"  style ="resize : none" name="avis" id="avis" cols="30" rows="10" requiered></textarea></p>
        <p><input style="position:absolute" :style="{ right: add +'%'}" @click="click" v-on:mouseover="changePos" id="btn" type="button" value="Valider" ></p>
    </div>
</template>

<style>

   

    div#form {
        display : flex;
        flex-direction : column;
        justify-content: center;
        border : black solid 1px;
    } 
    input{
        border-radius: 10px;
    }
    
    #btn{
        width: auto;
        color : black;
        background-color: lightgrey;
        border : black solid 1px;
        border-radius: 10px;
    }
    #btn:hover{
        background-color: white;
        color : black;
    }
    #btn:disabled {
        color : black;
        background-color: lightgrey;
        border : black solid 1px;
        border-radius: 10px;
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