<template>
  <v-container fluid>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, index) in items" :key="index" >
        <v-row class="fill-height d-flex justify-center align-center">
          <v-col>
            <h2 class="display-4 title-center">{{ item.title }}</h2>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Noticias' },
        { title: 'Comienza el torneo' },
        { title: 'Que gran espectaculo' },
      ],
    };
  },
};

</script>

<style scoped>
    .v-carousel-item {
        background-color: gray !important;
        border-radius: 50px;
    }
    h2{
        color: white;
        font-size: 3rem;
        font-weight: 1000;
        text-align: center;
        margin: 0;
    }
</style>