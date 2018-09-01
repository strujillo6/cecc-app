<template>
  <form class="form" >
    <div class="logo__login">
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
        v-if="showPassword"
      ></v-text-field>
      <v-text-field
        v-validate="'required'"
        v-model="password"
        label="Contraseña"
        name="password"
        data-vv-name="password"
        type='password'
        v-if="!showPassword"
        required
      >
      </v-text-field>
    </section>
    <v-btn block class="indigo" @click.prevent="login(textSubmit)" :dark="!disabled" :disabled="disabled">{{textSubmit}}</v-btn>
    <div class="actions">
      <nuxt-link to="login/registro"  class="pa-3">Registrarse</nuxt-link>
      <nuxt-link to="" class="pa-3">Recuperar contraseña</nuxt-link>
    </div>
    <v-snackbar
      v-model="snackbar"
      color="red"
      multi-line="multi-line"
      :timeout="7000"
      vertical="vertical"
    >
      {{ error }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
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
      transfomr: 0,
      password: null,
      email: null,
      textSubmit: 'Siguiente',
      select: null,
      disabled: true,
      showPassword: true,
      error:false,
      snackbar: false,
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
      login (txt) {
        if(txt ==='Siguiente'){
          this.showPassword= false
          this.textSubmit = "Ingresar"
        }else{
          if(this.email == this.$store.state.user.user.email){
            if(this.password == this.$store.state.user.user.password){
              this.$store.commit('loginUser', true)
              this.$router.push('/')
            }else{
              this.error = "La contraseña es incorrecta, por favor vuelve a intentarlo"
              this.snackbar=true
              this.showPassword = false
            }
          }else{
            this.error = "El correo ingresado, no aparece en el registro de la aplicación, por favor vuelve a intentarlo"
            this.showPassword = true
            this.snackbar=true
          }
        }
      },
      // Escucha el evento keyup en el input
      change(e){
        console.log(e.key)
        var n = e.key
        if(n === 'Enter'){
          e.preventDefault()
          this.login(this.textSubmit)
        }else{
          // Valida si la variable email tiene datos y no tiene errores
          if(this.email && this.$validator.errors.items.length == 0){
            this.disabled=false
          }
        }
      },
      enter(){

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
.logo__login{
  padding-bottom: 20px;
}
</style>
