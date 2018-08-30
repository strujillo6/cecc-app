<template>
    <v-toolbar
      dense
      floating
      class="search__map"
    >
      <v-autocomplete
        single-line
        v-model="model"
        :items="numbers"
        prepend-icon="search"
        class="autocomplete__search__report"
        placeholder="No. de radicado"
      />
      <v-btn icon @click="geolocation">
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon @click="show">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-toolbar>
</template>
<script>
export default {
    props:{
        icon:{
            type: String
        }
    },
    methods: {
        show () {
          this.$emit('show')
        },
        geolocation () {
          this.$emit('geolocation')
        }
    },
    data: () => ({
      model: null,
      numbers: [
        '123456789', '987456123', '741258963'
      ]
    })
}
</script>
<style lang="scss">
@import '~/assets/css/tools/_mixin.scss';
.search__map{
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  @media (min-width: 335px) {
    top: 8px;
  }
  @include breakpoint(phablet){
    left: 8px;
  }
}
.autocomplete__search__report{
  padding-top: 16px;
}
.v-autocomplete__content.v-menu__content{
  width: 210px!important;
}
</style>
