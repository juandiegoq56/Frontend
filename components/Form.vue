<template>
    <form class="form">
      <v-text-field
        label="E-mail"
        type="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
      ></v-text-field>
      <v-btn
        class="me-4"
        type="submit"
      >
        login
      </v-btn>
  
      <v-btn>
        sign up
      </v-btn>
    </form>
  </template>

<style scoped>
 .form{
    max-width: 70%;
 }
</style>