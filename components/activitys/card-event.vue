<template>
    <v-card  >
        <v-card-media
            :src="event.image"
            height="200px"
            class="card__media"
            @click="viewEvent(event.id)"
        >
            <v-card-title primary-title class=" title__event">
                    <div class="headline "> {{event.title}} </div>
                    <div>Lugar</div>
            </v-card-title>
        </v-card-media>
        <v-card-actions>
            <h3 class="pl-2"> {{event.date}} </h3>
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>share</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
  props:{
    event:{
      type: Object
    }
  },
   methods: {
     viewEvent(_id){
       this.$router.push('/actividades/'+ _id)
     }
   }
}
</script>
<style>
.card__media{
    align-items: flex-end;
    cursor: pointer;
}
.title__event{
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(0,0,0,.3) 10%, rgba(0,0,0,0.7) 100%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    align-items: flex-start;
    color: white;
    display: flex;
    justify-content:flex-end;
}
</style>
