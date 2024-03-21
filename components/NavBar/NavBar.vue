<template>
  <v-app-bar
    color="rgba(83, 80, 73);"
    app
    fixed
  >
    <v-app-bar-title class="header-items ml-16 mr-auto">Mision Astral</v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="header-items mr-16">
      <v-btn icon>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="tiktok-icon">
          <img src="/img/icons-tik-tok.svg" alt="TikTok Icon">
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
</script>

<style scoped>
.header-items {
  color: #F7E5C4 !important;
}

.v-app-bar {
  z-index: 1000;
}

.tiktok-icon img {
  width: 30px;
  height: 30px;
  color: #F7E5C4 !important;
}


/* Diseño responsive */
@media only screen and (max-width: 600px) {
  .ml-4 {
    margin-left: 5rem !important;
  }

  .mr-4 {
    margin-right: 2rem !important;
  }
}
</style>
