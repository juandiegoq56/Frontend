<template>
  <header>
      <v-app-bar app class="customBar">
        <v-toolbar-title class="logo ml-12" v-if="windowWidth > 967">TORNEO UD</v-toolbar-title>
          <div class="btns mr-12" v-if="windowWidth > 967">
              <v-btn color="white" class="customBtn" @click="handleButtonClick">Home</v-btn>
              <v-btn color="white" class="customBtn" @click="handleButtonClick">Tabla</v-btn>
              <v-btn color="white" class="customBtn" @click="openDialog">Llamame</v-btn>
          </div>
      </v-app-bar>
    <DialogContactUs ref="dialogComponent"/>
    <Tabla ref="dialogTabla"/>
  </header>
</template>

<script>
  import DialogContactUs from '~/components/Dialogs/DialogContactUs.vue';
  import Tabla from '~/components/Dialogs/Tabla.vue';
  import api from '../plugins/services/api';
  export default {
    components: {
      DialogContactUs,
      Tabla,
    },
    data() {
      return {
        dialog: false,
        windowWidth: 0,
      };
    },
    methods: {
      async handleButtonClick() {
        this.$refs.dialogTabla.openDialog();
      },
      openDialog(){
        this.$refs.dialogComponent.openDialog();
      },
      handleMenuItemClick(item) {
        if (item.title === 'Contactanos') {
          this.openDialog();
        } else {
          // Puedes agregar lógica para otros elementos del menú aquí
        }
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
      toggleMobileMenu() {
              this.mobileMenu = !this.mobileMenu;
      },
      },      calcularDiferenciaGol(item) {
        return item.goles_a_favor - item.goles_en_contra;
      },
    mounted() {
      window.addEventListener('resize', this.updateWindowWidth);
      this.updateWindowWidth();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateWindowWidth);
    },
  }
</script>

<style scoped>
  .logo{
    color: gray;
    font-size: 3rem;
    font-weight: 1000;
    line-height: 1.5;
  }
  .customBtn{
    background-color: gray;
    margin-left: 10px;
    flex: 1;
    min-width: 103px;
  }  
  .v-dialog__content {
    z-index: 9999;
  }
</style>