
import type { NuxtComponentIndicator } from 'nuxt/dist/app/composables/component';
<template>
    <v-footer class="footer">
      <v-row justify="center" no-gutters>
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn> -->
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Nuxt.js</strong>
        </v-col>
      </v-row>
    </v-footer>
</template>
<style>
.footer{
    background: linear-gradient(to right, rgba(139,69,19,.8), rgba(192,128,20)) !important;
    color: #F7E5C4 !important;
}
</style>