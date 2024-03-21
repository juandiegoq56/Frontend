<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="1200"
  >
    <v-slide-group
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item v-for="(item, index) in items" :key="index">
        <v-card class="serviceCard ml-6 mr-6" width="300">
                        <v-card-title class="titleCard title-center">{{ item.title }}</v-card-title>
                        <v-card-text class="textCard title-center">{{ item.description }}</v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import api from '../plugins/services/api';
export default {
  data() {
    return {
      items: [
        {
            title: 'Campeon',
            description: 'Campeon',
        },
        {
            title: 'SubCampeon',
            description: 'SubCampeon',
        },
        {
            title: 'Tercero',
            description: 'Tercero',
        },
      ],
    };
  },
  methods: {

  },
  async created(){
      try {
        const response = await api.getPartidos();
        const topTeams = response.data.slice(0, 3); // Obtener los tres primeros equipos
        this.items = topTeams.map((team, index) => {
          return {
            title: team.nombre_equipo,
            description: index === 0 ? 'Campeón' : index === 1 ? 'Subcampeón' : 'Tercero',
          };
        });
      } catch (error) {
        console.error('Error al obtener los datos de los partidos:', error);
      }
  }
};
</script>

<style scoped>
    .serviceCard{
        background-color: gray;
        max-width: 300px;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .titleCard{
        color: white;
        font-size: 2rem;
        font-weight: 1000;
        text-align: center;
        margin: 0;
    }
    .textCard{
      color: white;
        font-size: 1.5rem;
        font-weight: 1000;
        text-align: center;
        margin: 0;
    }
</style>