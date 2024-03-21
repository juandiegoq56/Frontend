<template>
    <v-container>
      <h2>Participantes</h2>  
      <v-row justify="center">
        <v-col v-for="(element, index) in testimonials" :key="index" class="column" cols="auto">
            <v-card class="testimonialCard mx-auto" max-width="344">
                <div class="testimonialContent">
                    <div class="contentInfo">
                        <v-card-title>{{ element.equipo }}</v-card-title>
                        <v-card-subtitle>{{ element.fundacion }}</v-card-subtitle>
                    </div>
                </div>
            <v-card-text>{{ element.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          { equipo: "Equipo1", fundacion: "1943"},
          { equipo: "Equipo2", fundacion: "1989"},
          { equipo: "Equipo3", fundacion: "1989"},
          { equipo: "Equipo4", fundacion: "1934"},
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h2{
    color: gray;
    font-size: 2.5rem;
    font-weight: 9000;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }
  .testimonialCard {
    max-height: 160px; /* Ajusta la altura según tus preferencias */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .testimonialContent {
    display: flex;
    align-items: center;
  }
  </style>