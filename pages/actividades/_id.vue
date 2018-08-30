<template>
    <section>
      <cecc-hero
        :img='event.image'
        title="Barrio / localidad"
        :subtitle="event.date"
      />
      <section class="container__event">
        <v-card>
        <v-card-title primary-title>
            <h2 class="display-3 mb-0">{{event.title}}</h2>
        </v-card-title>
        <v-card-text>
          <div>{{event.short_description}}</div>
        </v-card-text>
        <v-card-text>
          <h3 class="display-2 mb-0">Organiza</h3>
          <div class="container__organizer">
            <cecc-circle class="cecc-circle" img="https://www.ccb.org.co/var/ccb/storage/images/ccb/clusters/cluster-de-industrias-creativas-y-contenidos/contenido-auxiliar/multimedia/imagenes-aliados/idartes/147568-2-esl-CO/idartes_large.jpg"/>
            <cecc-circle class="cecc-circle" img="https://pbs.twimg.com/profile_images/1032288959806820352/6Mr1J59U_400x400.jpg"/>
            <cecc-circle class="cecc-circle" img="http://www.bogota.gov.co/sites/default/files/styles/large/public/field/image/Estimulos%202015.jpg?itok=0cp_jsQj"/>
          </div>
        </v-card-text>
      </v-card>
      </section>
    </section>
</template>
<script>
import Hero from '~/components/activitys/hero'
import Circle from '~/components/activitys/organizer'
export default {
  created() {
    document.getElementById('content').scrollTop=0
  },
  components:
  {
    'cecc-hero': Hero,
    'cecc-circle': Circle
  },
  asyncData({ params, store }) {
    const  data = store.state.activitys.activitys.find(event => event.id == params.id)
    return { event: data }
  },
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.container__event{
  max-width: 70em;
  margin-bottom: 2em;
   @include breakpoint(tablet){
     margin-top: -2em;
   }
}
.container__organizer{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  & .cecc-circle{
    padding: 2em;
    box-sizing: border-box;
  }
}
</style>
