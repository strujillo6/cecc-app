<template>
  <v-toolbar
    :dark="dark"
    :color="color"
    flat
  >
    <v-btn flat icon v-if="!menu" @click="toogle(false)">
      <v-icon>navigate_before</v-icon>
    </v-btn>
    <nuxt-link class="logo" v-if="menu" to="./">
      <img src="../../assets/img/logo-flat.svg" alt="Logo de Cultura Etica y Convivencia Ciudadana">
    </nuxt-link>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="menu__toolbar--hidden" v-if="menu">
      <cecc-menu/>
    </v-toolbar-items>
    <cecc-card-user v-if="menu"/>
    <v-btn flat icon v-if="!menu" @click="toogle(false)">
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import Carduser from './menu-user'
import Cmenu from './menu-links'
import { mapMutations } from 'vuex'
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
  },
  methods:{
    ...mapMutations({ toogle:'toogleForm'})
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
