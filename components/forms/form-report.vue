<template>

  <div class="container__form__main">
    <section id="container__items__form" class="container__items__form" >
      <div class="item__form">
        <v-select
          :items="items"
          label="Tipo de Reporte"
        />
      </div>
      <div class="item__form">
        <h2 class="pb-2">Ubicación</h2>
        <cecc-map class="item__form__map" :locale="location" />
        <p v-if="file">{{file.name}}</p>
      </div>
      <div class="item__form" >
        <v-textarea
          name="description"
          label="Descripción"
          hint="Breve descripción del problema"

        />
      </div>
      <div class="item__form">
        <cecc-file :capture="true" :movil="true" v-model="file" class="capture-movil"/>
        <cecc-file  v-model="file"/>
        <p v-if="file">{{file.name}}</p>
      </div>
    </section>
    <section class="container__actions">
      <v-btn class="action__back" flat @click="back"  v-if="transform >= 24">
        <v-icon>navigate_before</v-icon>
        atras
      </v-btn>
      <v-btn class="action__next" flat @click="next" v-if="transform <= 74">
        siguiente
        <v-icon>navigate_next</v-icon>
      </v-btn>
    </section>
  </div>
</template>
<script>
import Map from '~/components/report/map-report'
import File from '../../components/forms/file-image'
import { mapState} from 'vuex'
export default {
  components: {
    'cecc-map': Map,
    'cecc-file': File
  },
  data: () => ({
    items:[
      'Petición',
      'Queja',
      'Reclamo'
    ],
    description: null,
    transform: 0,
    file: null,
    nameRules: [
        v => !!v || 'El campo es requerido',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
  }),
  computed:
  {
    ...mapState({
      location: state => state.location.location
    })
  },
  methods: {
    next(){
      this.transform+=25
      var elemnt = document.getElementById('container__items__form')
      elemnt.style.transform = 'translateX(-'+ this.transform +'%)'
      elemnt = null
    },
    back(){
      this.transform-=25
      var elemnt = document.getElementById('container__items__form')
      elemnt.style.transform = 'translateX(-'+ this.transform +'%)'
      elemnt = null
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.capture-movil{
  @include breakpoint(laptop){
    display: none;
  }
}
.container{
  &__form__main,
  &__actions{
    width: 100%;
  }
  &__actions{
    height: 56px;
    position: relative;
    & .action__back,
    & .action__next{
      position: absolute;
      color: #3f51b5;
    }
    & .action__back{
      left: 0;
    }
     & .action__next{
       right: 0;
     }
  }
  &__items__form{
    width: 400%;
    display: flex;
    align-items: center;
    transition: all .35s ease-in-out;
  }
}
.item__form{
  flex: 1;
  margin: 1em;
  &__map{
    height: 300px;
  }
}
.item__form:nth-child(2){
  min-height: 250px;
  overflow: hidden;
}
</style>
