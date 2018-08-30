<template>
  <nav class="container__menu">
    <v-btn
      v-for="(item, index) in items" :key="index"
      flat
      :to=item.link
      dark
    >
      <span>{{item.title}} </span>
      <v-icon class="pl-1 pr-1">{{item.icon}}</v-icon>
    </v-btn>
  </nav>
</template>
<script>
export default {
  data: ()=>({
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
      // {
      //   title: 'Conoceme',
      //   link: '/',
      //   icon: 'bookmarks'
      // }
    ]
  }),
  props:{
    color:{
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.container__menu{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
</style>
