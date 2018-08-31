<template>
  <section>
    <cecc-menu @show="showMenu" :icon="iconMenu" @geolocation="setGeolocation"/>
    <cecc-map :locale="location" />
    <aside class="menu__report" :class="{ showMenu: active }">
      <cecc-filter/>
      <cecc-list/>
    </aside>
    <div class="form__report" :class="{ form__reportActive: formActiveSave }">
      <div class="form__report__animate"/>
      <form class="form__report__content">
        <cecc-form />
      </form>
    </div>
    <v-btn
      flat
      dark
      absolute
      right
      class="btn__report elevation-6"
      :class="{ btn__reportCenter: formActiveSave }"
      :ripple="false"

      @click="formActive"
    >
      <v-icon>add</v-icon>
      <span>Guardar</span>

    </v-btn>
  </section>
</template>
<script>
import Menu from '~/components/report/menu-report'
import Map from '~/components/report/map-report'
import List from '~/components/report/list-report'
import Filter from '~/components/report/filter-report'
import Form from '../../components/forms/form-report'
import { mapState,  mapMutations  } from 'vuex'
export default {
  components: {
    'cecc-map': Map,
    'cecc-menu': Menu,
    'cecc-list': List,
    'cecc-filter': Filter,
    'cecc-form': Form,
  },
  data: ()=> ({
    active: true,
    formActiveSave: false,
    iconMenu: 'menu'
  }),
  computed:
  {
    ...mapState({
      location: state => state.location.location,
      error: state => state.location.error
    })
  },
  methods: {
    setGeolocation() {
      this.$store.commit('location/updateLocation', "")
      this.$store.dispatch('location/geolocale')
    },
    showMenu() {
       if(this.active == true){
         this.active =false;
         this.iconMenu = 'close'
       }else{
         this.active =true;
         this.iconMenu = 'menu'
       }
    },
    formActive(){
      if(this.formActiveSave == false){
        this.formActiveSave = true
        this.add()
      }else{
        this.formActiveSave = false
        this.remove()
      }
    },
    ...mapMutations({ remove:'active', add:'inactive'})
  },
  middleware: 'location'
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.showMenu{
  transform: translateX(100%);
}
.menu__report{
  width: 100%;
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 1;
  overflow-y: auto;
  top: 0;
  padding-top: 48px;
  bottom: 0;
  transition: all .25s ease-in-out;
  @media (min-width: 365px) {
     padding-top: 64px;
  }
  @include breakpoint(phablet){
    padding-top: 0;
    width: 320px;
  }
}
.form__report{
  position: absolute;
  height: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all .5s ease;
  &Active{
    height: 100%;
    & .form__report__animate{
      transform: scale(30);
    }
    & .form__report__content{
      opacity: 1;
    }
  }
  &__animate{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height:100px;
    background-color: #E0E0E0;
    border-radius: 50%;
    transform: scale(0);
    transition: all .4s ease-in;
    transition-delay: .5s;
  }
  &__content{
    position: absolute;
    max-width: 400px;
    min-width: 300px;
    overflow-x: hidden;
    opacity: 0;
    transition: all .4s ease-in;
    transition-delay: .7s;
    margin-top: -54px;
  }
}
.btn__report{
  transition: all .85s ease-in-out;
  border-radius: 36px;
  height: 56px;
  width: 56px;
  min-width: 28px;
  bottom: 16px;
  margin-right: 16px;
  background-color: teal;
  @include breakpoint(tablet){
    height: 72px;
    width: 72px;
    min-width: 72px;
  }
  z-index: 10;
  & span{
    width: 0;
    overflow: hidden;
    transition: all .85s ease-in-out;
  }
  &Center{
    transform: translateX( calc(-50vw + 87px));
    width: 140px;
    & span{
      width: 70px;
    }
  }
}
</style>
