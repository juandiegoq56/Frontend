<template>
    <v-app>
        <div class="layout-container">
            <MenuLogin />
        
            <slot></slot>
        </div>
    </v-app>
</template>

<script>
import MenuLogin from '~/components/NavBar/MenuLogin.vue';

export default {
  components: {
    MenuLogin,
  },
}
</script>

<style>
  /* div.v-application__wrap {
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 100%;
    min-height: 10 !important;
    position: relative;
} */
</style>