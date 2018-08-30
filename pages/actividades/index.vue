<template>
  <section>
    <cecc-hero :img='activitys[0].image'/>
    <section class="card__container">
      <cecc-event v-for="(event, index) in activitys" :key="index" :event="event"/>

    </section>
  </section>
</template>
<script>
import Hero from '~/components/activitys/hero'
import Card from '~/components/activitys/card-event'
import { mapState } from 'vuex'
export default {
  created() {
    document.getElementById('content').scrollTop=0
  },
  components:
  {
    'cecc-hero': Hero,
    'cecc-event': Card
  },
  data: () => ({
  }),
  computed:
  {
    ...mapState({
      activitys: state => state.activitys.activitys,
    })
  }
}
</script>
<style lang="scss">
.card__container{
  width: 100%;
  max-width: em(1120);
  height: auto;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(290px, 1fr));
  grid-gap: 1em;
}
</style>

