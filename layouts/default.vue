<template>
  <v-app class="indigo darken-2">
    <div class="toolbar__top">
      <top-toolbar
        :title="title"
        class="z__index-10 indigo darken-3"
      />
      <top-toolbar
        class="z__index-10 toolbar__auxiliar"
        color="grey lighten-2"
        :menu='false'
        :dark='false'
        :class="{formActiveMenu: formReportActive}"
      />
    </div>
    <div class="content" id="content" @scroll="scroll__content">
      <nuxt class="main__container"/>
    </div>
    <div class="toolbar__bottom" :class="{formActiveBottom: formReportActive}">
       <bottom-toolbar class="z__index-10"/>
    </div>
  </v-app>
</template>
<script>
import Toolbar from '~/components/menu/toolbar.vue'
import Btoolbar from '~/components/menu/menu-bottom.vue'
import { mapState } from 'vuex'
export default {
  components: {
    'top-toolbar':    Toolbar,
    'bottom-toolbar': Btoolbar
    },
    data: () => ({
      title: "Actividades Culturales",
      animate: 0,
      // formReportActive: true
    }),
    computed:
    {
      ...mapState({
        formReportActive: state => state.formReportActive
      })
    },
    methods:{
      scroll__content(e){
        // if(!this.formReportActive && e.target.scrollTop >=0){
        //   console.log(e.target.scrollTop+ "  Positivo")
        // } else if(this.formReportActive && e.target.scrollTop >=0){
        //   console.log(e.target.scrollTop+ "  Negativo")
        // }
      }
    }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.main__container{
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  width: 100%;
  height: 100%;
}
.application--wrap{
  display: flex;
  height: 100vh;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}
.z__index-10{
  z-index: 10;
}
.content{
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: initial;
  z-index: 1;
  width: 100%;
}
.toolbar{
  &__auxiliar{
    transition: transform .5s ease!important;
    transition-delay: .5s!important;
  }
  &__top,
  &__bottom{
    overflow: hidden;
    transition: all .5s ease-in;
  }
  &__top{
    height: 55.4px;
    @media ( max-height: 319px){
      height: 47.4px;
    }
    @include breakpoint(toolbarM){
      height: 47.4px;
    }
    @include breakpoint(toolbarL){
      height: 63.4px;
    }
  }
  &__bottom{
    height: 56px;
    @include breakpoint(tablet){
      height: 0;
    }
  }
}
.formActive{
  &Menu{
    transform: translateY(-100%)!important;
  }
  &Bottom{
    height: 0;
  }
}
</style>
