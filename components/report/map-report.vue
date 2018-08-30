<template>
  <div class="container__map">
    <l-map  :zoom="16" :center="[locale.latitude, locale.longitude]" >
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <!-- <l-tile-layer url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}"
                    token='pk.eyJ1Ijoic3RydWppbGxvNiIsImEiOiJjamw0MXhtZnEwMmI3M3Jxa2hvNzl1ZnZyIn0.dXbn4cof6WclKi4oC94mcw'
                    :options="{
                      id: 'mapbox.streets',
                      attribution:'Imagery © <a href=´https://www.mapbox.com/´>Mapbox</a>'
                      }"
                    /> -->
      <l-marker :lat-lng="[locale.latitude, locale.longitude]" :icon="icon">
        <l-popup>
          Contenido
          <v-list-tile-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-list-tile-avatar>
        </l-popup>
      </l-marker>
      <l-control-scale position="bottomleft"></l-control-scale>
    </l-map>
  </div>
</template>
<script>

import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlScale
  } from 'vue2-leaflet';

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  components:{
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlScale
  },

  computed:{
    icon () {
      return L.icon({
        // iconUrl: "https://image.flaticon.com/icons/svg/143/143960.svg",
        iconUrl: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJhY3R1YWxfX3Bvc2l0aW9uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci%0D%0AIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBw%0D%0AeCIgdmlld0JveD0iMCAwIDM4IDk0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAz%0D%0AOCA5NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKICA8c3R5bGU+CiAgICAjcG9pbnR7CiAgICAg%0D%0AIGFuaW1hdGlvbi1uYW1lOiBzY2FsZTsKICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAg%0D%0AICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIHRyYW5zZm9ybS1v%0D%0AcmlnaW46IGJvdHRvbTsKICAgIH0KICAgICNtYXJrZXJ7CiAgICAgIGFuaW1hdGlvbi1uYW1lOiBt%0D%0Ab3ZlOwogICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICBhbmltYXRpb24taXRlcmF0%0D%0AaW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tOwogICAg%0D%0AfQogICAgQGtleWZyYW1lcyBzY2FsZSB7CiAgICAgIGZyb20sIHRvIHsKICAgICAgICB0cmFuc2Zv%0D%0Acm06IHNjYWxlKDEpOwogICAgICB9CiAgICAgIDUwJSB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2Fs%0D%0AZSguNSk7CiAgICAgIH0KICAgIH0KICAgIEBrZXlmcmFtZXMgbW92ZSB7CiAgICAgIGZyb20sIHRv%0D%0AIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgICAgdHJhbnNmb3JtOiBz%0D%0AY2FsZSguNSk7CiAgICAgIH0KICAgICAgNTAlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0%0D%0AZVkoMTBweCk7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsKICAgICAgfQogICAgfQogIDwv%0D%0Ac3R5bGU+CgogIDxwYXRoIGlkPSJwb2ludCIgZmlsbD0iIzMwM0Y5RiIgIGQ9Ik0xOSw3NEM4LjUs%0D%0ANzQsMCw3OC41LDAsODRjMCw1LjUsOC41LDEwLDE5LDEwczE5LTQuNSwxOS0xMEMzOCw3OC41LDI5%0D%0ALjUsNzQsMTksNzR6IE0xOSw5MAljLTYuOCwwLTEyLjMtMi45LTEyLjMtNi41UzEyLjIsNzcsMTks%0D%0ANzdzMTIuMywyLjksMTIuMyw2LjVTMjUuOCw5MCwxOSw5MCIvPgoKICA8cGF0aCBpZD0ibWFya2Vy%0D%0AIiBmaWxsPSIjMzAzRjlGIiAgZD0iTTMyLjQsNi44Yy03LjQtOS0xOS40LTktMjYuOSwwYy02Ljcs%0D%0AOC4xLTcuNCwyMy40LTEuOCwzMi42TDE5LDY2bDE1LjItMjYuN0MzOS45LDMwLjIsMzkuMSwxNC45%0D%0ALDMyLjQsNi44eiBNMTksMzVjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTYuNiw1LjQtMTIsMTItMTJz%0D%0AMTIsNS40LDEyLDEyQzMxLDI5LjYsMjUuNiwzNSwxOSwzNXoiCiAgLz4KPC9zdmc+Cg==",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
      })
    }
  },
  props:{
    locale:{
      type:Object
    },
    marker:{
      type: Object
    }
  },
  methods:{
    // clicka(e){
    //     console.log(e)
    // }
  }
}
</script>
<style>
.leaflet-control-zoom{
  top: 60px;
  left: 0;
}
.container__map{
  z-index: 1;
  height: 100%;
  width: 100%;
}
.leaflet-touch .leaflet-bar a{
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
  border: none!important;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);
}
</style>
