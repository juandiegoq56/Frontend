<template>
    <v-app>
        <div class="header">
            <Header />
        </div>
        <div class="container">
            <slot></slot>
        </div>
            <Footer />
    </v-app>
</template>
  
<script setup>


</script>
  
  <style scoped>
    .container {
        margin-top: 64px;
    }
  </style>