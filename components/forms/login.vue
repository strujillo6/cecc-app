<template>
  <form class="form" >
    <div class="logo">
      <img src="~/assets/img/logo.svg" alt="Logo de Cultura Etica y Convivencia Ciudadana">
    </div>
    <section class="container__form__login">
      <v-text-field
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
        @keyup="change"
      ></v-text-field>
      <v-text-field
        v-validate="'required'"
        v-model="password"
        :error-messages="errors.collect('password')"
        label="Contraseña"
        data-vv-name="password"
        required
        type='password'
      >
      </v-text-field>
    </section>
    <v-btn class="indigo" @click="submit(textSubmit)" :dark="!disabled" :disabled="disabled">{{textSubmit}}</v-btn>
    {{email}}
    <div class="actions">
      <nuxt-link to=""  class="pa-3">Registrarse</nuxt-link>
      <nuxt-link to="" class="pa-3">Recuperar contraseña</nuxt-link>
    </div>
  </form>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  Vue.use(VeeValidate)
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      password: null,
      email: null,
      textSubmit: 'Siguiente',
      select: null,
      disabled: true,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      dictionary: {
        custom: {
          email: {
            required: () => 'El campo de E-mail es requerido',
            email: 'Deber ser un E-mail valido como: example@test.co'
            // custom messages
          },
          password: {
            required: () => 'El campo de Contraseña es Obligatorio'
          }
        }
      }
    }),
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      submit (txt) {
        if(txt ==='Siguiente'){
          this.textSubmit = 'Ingresar'
        }else{

        }
      },
      // Escucha el evento keyup en el input
      change(){
        if(this.email && this.$validator.errors.items.length == 0){
          this.disabled=false
        } else{
          this.disabled=true
        }
      },
      login (){
        this.$router.push('/')
      }
    }
  }
</script>
<style>
.actions{
  margin-top: 20px;
  text-align: center;
  padding: 1em;
}
.logo{
  padding-bottom: 20px;
}
.v-input {
  padding-left: 1em;
  padding-right: 1em;
}
.container__form__login{
  width: 200%;
  display: flex;
}
</style>
