<template>
  <v-bottom-nav
    :value="true"
    class="menu__bottom--hidden"
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
