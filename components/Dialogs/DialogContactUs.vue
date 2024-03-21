<template>
    <v-dialog v-model="internalDialog" max-width="900px">
      <v-card>
        <v-card-text>
        <!-- Formulario -->
        <!-- <v-form @submit.prevent="submitForm"> -->
        <v-form>
          <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
          <v-text-field v-model="apellido" label="Apellidos" required></v-text-field>
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
          <vue-tel-input class="mb-6"  v-model="phone" :inputOptions="{ showDialCode: false, placeholder: 'Teléfono' }"></vue-tel-input>
          <!-- <v-text-field v-model="telefono" label="Teléfono" type="number" min="0" required></v-text-field> -->
          <v-select
            v-model="selectedService"
            label="Selecciona un servicio"
            :items="services"
          ></v-select>
          <v-textarea v-model="mensaje" label="Mensaje"></v-textarea>
          <v-btn color="gray" @click="submitForm()">Enviar</v-btn>
        </v-form>
      </v-card-text>
        <!-- <v-card-actions>
          <v-btn @click="closeDialog">Cerrar</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { VueTelInput } from 'vue-tel-input';
  import 'vue-tel-input/vue-tel-input.css';
  export default {
    props: {
      dialog: Boolean,
    },
    components:{
      VueTelInput,
    },
    data() {
      return {
        internalDialog: false,
        nombre: '',
        apellido: '',
        email: '',
        phone: '',
        mensaje: '',
        selectedService: null,
        services: ['Servicio 1','Servicio 2','Servicio 3','Servicio 4','Servicio 5','Servicio 6'],
      };
    },
    watch: {
      dialog(newVal) {
        this.internalDialog = newVal;
      },
    },
    methods: {
     openDialog() {
      this.internalDialog = true;
     },
     closeDialog() {
      this.internalDialog = false;
    },
    clearInfo(){
      this.nombre= ''
      this.apellido= ''
      this.email= ''
      this.phone= ''
      this.mensaje= ''
      this.selectedService= null
    },
    submitForm() {
      console.log('Formulario enviado:', { nombre: this.nombre, email: this.email, mensaje: this.mensaje, servicio: this.selectedService});
      this.clearInfo();
      this.closeDialog();
    },
    },
  };

  
  </script>