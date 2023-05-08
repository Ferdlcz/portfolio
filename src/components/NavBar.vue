

<template>

    <v-app-bar app color="black" dark flat class="px-12">

        <v-btn>
        Fernando De La Cruz Zapata
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn text @click="scroll('home')" class="text-yellow">Inicio</v-btn>
        <v-btn text @click="scroll('about')">¿Quien soy?</v-btn>
        <v-btn text @click="scroll('skills')">Habilidades</v-btn>
        <v-btn text @click="scroll('projects')">Proyectos</v-btn>
        <v-btn text @click="scroll('contact')">Contactame</v-btn>
    </v-app-bar>

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    methods:{
        scroll(refName){
            const element = document.getElementById(refName)
            element.scrollIntoView({behavior: "smooth"})
        }
    }
})



</script>

<style>


</style>