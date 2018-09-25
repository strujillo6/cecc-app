<template>

  <form class="form"> <!-- contenedor del formulario -->

    <div class="logo__login">  <!-- contenedor del logo -->

      <img src="~/assets/img/logo.svg" alt="Logo de Cultura Etica y Convivencia Ciudadana">

    </div>  <!-- fin del contenedor del logo -->

    <section :class="{ container__form__password: showPassword }" class="container__form__login"><!-- contenedor principal de los input -->

      <div class="container__form__login__input">
        <!-- input para el email -->
        <v-text-field
          v-validate="'required|email'"
          v-model="email"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
          @keyup="change"
          @keydown.enter.prevent="action(actionText)"
        />
      </div>

      <div class="container__form__login__input">
        <!-- input para el password -->
        <v-text-field
          v-validate="'required'"
          v-model="password"
          label="Contraseña"
          name="password"
          data-vv-name="password"
          type='password'
          required
          @keydown.enter.prevent="action(actionText)"
        />
      </div>

    </section><!-- fin del contenedor principal de los input -->

    <!-- boton que se encarga de trasladar el contenedor de los input y loguearse en la aplicacion -->
    <v-btn
      block class="indigo"
      @click.prevent="action(actionText)"
      :dark="!disabled"
      :disabled="disabled"
      v-if="!showPassword"
    >
      {{actionText}}
    </v-btn>

    <!-- boton que se encarga de logearse o de registrar el nuevo usuario -->
    <v-btn
      block class="indigo"
      @click.prevent="action({actionActiveText})"
      :dark="!disabled"
      :disabled="disabled"
      v-else
    >
      {{actionActiveText}}
    </v-btn>

    <!-- Contenedor para las aciones de registro y recuperar contraseña -->
    <div class="actions">
      <nuxt-link to=""  class="pa-3">Registrarse</nuxt-link>
      <nuxt-link to="" class="pa-3">Recuperar contraseña</nuxt-link>
    </div>

    <!-- Snackbar que se muestra en caso de ocurrir un error -->
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
        Cerrar
      </v-btn>
    </v-snackbar>

  </form> <!-- fin del contenedor del formulario -->

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
      password: '',
      email: '',
      disabled: true,
      showPassword: false,
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
    props:{
      actionText:{
        type: String,
        default: 'Siguiente'
      },
      actionActiveText:{
        type: String,
        default: "Ingresar"
      }
    },
    mounted () {
      this.$validator.localize('es', this.dictionary)
    },
    methods: {
      // Metodo para ingresar a la aplicacion
      action (txt) {
        // valida el contenido del texto del boton del formulario si es igual a Siguiente
        if(txt ==='Siguiente'){

          // Si es igual a siguiente desplaza el contenedor de los input para mostrar
          // el input de password, y cambia el texto del boton
          this.showPassword = true

        }else{
          // if(this.email == this.$store.state.user.user.email){

            if(this.password == this.$store.state.user.user.password){

              this.$router.push('/')
            }else{
              this.error = "La contraseña es incorrecta, por favor vuelve a intentarlo"
              this.snackbar=true
              this.showPassword = false
            }
          }
          // else{
          //   this.error = "El correo ingresado, no aparece en el registro de la aplicación, por favor vuelve a intentarlo"
          //   this.showPassword = true
          //   this.snackbar=true
          // }
        // }

      },

      // Escucha el evento keyup en el input
      change(e){
        // Valida si la variable email tiene datos y no tiene errores
        if(this.email && this.$validator.errors.items.length == 0){
          // Mantiene el boton de siguiente disable si no hay datos
          this.disabled=false
        }
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
.container__form__login{
  width: 200%;
  overflow: hidden;
  display: flex;
  transform: translateX(0);
}
.container__form__password{
  transform: translateX(-50%);
}
.container__form__login__input{
  width: 50%;
}
</style>
