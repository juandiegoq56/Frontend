<template>
    <div class="menuContainer">
            <v-app class="appContainer">
                <v-app-bar :elevation="0">
                  <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                  </template>
                  <v-app-bar-title>Application Bar</v-app-bar-title>
                </v-app-bar>
            </v-app>

    </div>
</template>
<style>
    body{
        margin: 0;
    }
    .menuContainer{
        height: 100vh !important;
        margin: 0 !important;
    }
    .appContainer{
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        max-width: 100%;
        min-height: 0 !important;  /* Ajusta a 0 si es necesario */
        position: relative;
        background-color: red !important;
    }
</style>