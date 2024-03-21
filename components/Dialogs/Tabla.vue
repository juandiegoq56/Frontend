<template>
    <v-dialog v-model="internalDialog" max-width="900px">
      <v-card>
        <v-card-title>Tabla de partidos</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="equipos"
            :items-per-page="-1"
            hide-default-footer="true"
            class="elevation-1"
          >
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import api from '../plugins/services/api';
  
  export default {
    props: {
      dialog: Boolean,
    },
    data() {
      return {
        internalDialog: false,
        equipos: [],
        headers: [
          { title: 'Equipo', value: 'nombre_equipo' },
          { title: 'Goles a favor', value: 'goles_a_favor' },
          { title: 'Goles en contra', value: 'goles_en_contra' },
          { title: 'Partidos jugados', value: 'partidos_jugados' },
          { title: 'Puntuación', value: 'puntuacion' },
          { title: 'Diferencia de gol', value: 'diferenciaGol' },
        ],
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await api.getPartidos();
          this.equipos = response.data;
        } catch (error) {
          console.error('Error al obtener los datos de partidos:', error);
        }
      },
      openDialog() {
        this.fetchData();
      this.internalDialog = true;
     },
    },
  };
  </script>
  

  <style scoped>
/* Estilos para los encabezados de la tabla */
.v-data-table {
  background-color: #f5f5f5; /* Color de fondo de los encabezados */
  color: #333; /* Color del texto de los encabezados */
  font-weight: bold; /* Negrita para los encabezados */
}
</style>