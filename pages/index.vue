<template>
  <section>

    <div class="index__img pa-3"><!-- contenedor de la imagen aleatoria -->
      <img class="index__img__content" src="~/assets/img/team.svg" alt="">
    </div><!-- fin del contenedor de la imagen aleatoria -->

    <div class="index__content pa-3"><!-- contenedor de las frases aleatorias -->

      <v-card flat tag="article" class="transparent" dark>

        <!-- titulo de la card que muestra las frases aleatorias -->
        <v-card-title primary-title class="pt-0 pb-0">
          <div>
            <h1 class="headline mb-0">Seguridad</h1>
          </div>
        </v-card-title>

        <!-- contenido de la card que muestra las frases aleatorias -->
        <v-card-text >
          Sabias que, comprar o tener en tu poder un celular de
          dudosa procedencia puede afectar tu propia
          seguridad y la de las personas que amas.
        </v-card-text>

        <!-- Boton para acceder a mas contenido -->
        <v-card-actions tag="footer">
          <v-btn color="deep-orange ">Saber Mas</v-btn>
        </v-card-actions>

      </v-card>

    </div><!-- fin del contenedor de las frases aleatorias -->

    <!-- footer para agregar accesos utiles -->
    <div class="index__footer pa-2"></div>
  </section>
</template>

<script>
export default {
  middleware: 'data'
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.index{
  &__img{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @include breakpoint(phablet){
      width: 55%;
      height: 75%;
      justify-content: flex-end;
    }
    &__content{
      width: 90%;
      max-height: 90%;
    }
  }
  &__content{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @include breakpoint(phablet){
      height: 75%;
      width: 45%;
      align-items: flex-end;
    }
  }
  &__footer{
    width: 100%;
    height: 10%;
    @include breakpoint(phablet){
      height: 25%;
    }
  }
}
</style>

