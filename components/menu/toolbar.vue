<template>
  <v-toolbar
    :dark="dark"
    :color="color"
    flat
  >
    <v-btn flat icon v-if="!menu">
      <v-icon>navigate_before</v-icon>
    </v-btn>
    <div class="logo" v-if="menu">
      <img src="../../assets/img/logo-flat.svg" alt="Logo de Cultura Etica y Convivencia Ciudadana">
    </div>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="menu__toolbar--hidden" v-if="menu">
      <cecc-menu/>
    </v-toolbar-items>
    <cecc-card-user v-if="menu"/>
    <v-btn flat icon v-if="!menu">
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import Carduser from './menu-user'
import Cmenu from './menu-links'
export default {
  components: {
    'cecc-card-user':Carduser,
    'cecc-menu': Cmenu
  },
  props: {
    menu: {
      type: Boolean,
      default: true
    },
    title:{
      type:String
    },
    color:{
      type:String,
      default:"transparent"
    },
    dark:{
      type:Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.menu__toolbar--hidden{
  display: none;
  @include breakpoint(tablet){
    display: inline;
  }
}
.logo{
  height: 30px;
  & img{
    height: 100%;
  }
}
</style>
