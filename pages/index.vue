<template>
    <v-app>
      <div class="carrusel ml-8 mr-8">
        <div class="contentNewsCarousel">
          <CarouselNews />
        </div>
        <div class="contentServiceCarousel">
          <CarouselServices/>
        </div>
      </div>
    </v-app>
</template>

<script >
import CarouselNews from '~/components/Carousel/CarouselNews.vue';
import CarouselServices from '~/components/Carousel/CarouselServices.vue';
import CardsTestimonios from '~/components/Cards/CardsTestimonios.vue'
</script>

<style scoped>

h2{
  color: rgb(83, 80, 73);
  font-size: 3rem;
  font-weight: 1000;
}

h3{
  color: rgb(100, 99, 94);
  font-size: 2rem;
  font-weight: 900;
}

p{
  color: rgb(97, 94, 84);
  font-size: 1.2rem;
  font-weight: 500;
}

</style>