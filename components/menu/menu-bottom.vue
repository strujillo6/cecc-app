<template>
  <v-bottom-nav
    :value="true"
    class="menu__bottom--hidden"
    :active.sync="bottomNav"
    color="teal"
  >
    <btn-links/>
  </v-bottom-nav>
</template>
<script>
import Cmenu from './menu-links'
export default {
  components: {
    'btn-links':Cmenu
  },
  data: ()=>({
    bottomNav: 0,
    items:[
      {
        title: 'Actividades',
        link: '/actividades',
        icon:'directions_bike'
      },
      {
        title: 'Reportes',
        link: '/reportes',
        icon: 'report'
      },
      {
        title: 'Juegos',
        link: '/juegos',
        icon: 'games'
      }
    ]
  }),
  computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue '
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
}
</script>

<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.menu__bottom--hidden{
  @include breakpoint(tablet){
    display: none;
  }
}
</style>
